const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods":
    "POST, GET, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  try {
    const { message, context } = await req.json();

    const groqApiKey = Deno.env.get("GROK_API");

    if (!groqApiKey) {
      return new Response(
        JSON.stringify({
          reply: "GROQ_API_KEY not configured.",
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const systemPrompt = `
You are Auri, Vansh's portfolio cat assistant.

Rules:
- Answer ONLY using the provided portfolio context.
- Answer questions about Vansh's:
  - Skills
  - Projects
  - Experience
  - Career goals
  - Education
  - Technologies
  - Contact information
- If a question is unrelated to Vansh's portfolio, politely redirect the user.
- Be friendly and concise.
- Occasionally say "Meow!".
- Never invent information not present in the context.

Portfolio Context:
${context}
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${groqApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      }
    );

    const data = await response.json();

    console.log("Groq Status:", response.status);
    console.log("Groq Response:", JSON.stringify(data));

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          reply: "Groq API Error",
          error: data,
        }),
        {
          status: response.status,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const reply =
      data?.choices?.[0]?.message?.content ||
      "🐱 Meow! I couldn't generate a response.";

    return new Response(
      JSON.stringify({ reply }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Function Error:", error);

    return new Response(
      JSON.stringify({
        reply: "🐱 Something went wrong.",
        error: String(error),
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});