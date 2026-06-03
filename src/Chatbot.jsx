
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatMessage from "./ChatMessage";
import resumeContext from "./data/resumeContext";
import { supabase } from "./supabaseClient";
import "./styles/chatbot.scss";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [showFloating, setShowFloating] = useState(true);

  const bottomRef = useRef(null);

  useEffect(() => {
    initializeSession();

    const timer = setTimeout(() => {
      setShowFloating(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (sessionId) {
      fetchSessionMessages();
    }
  }, [sessionId]);

  useEffect(() => {
    if (!open) return;

    setTimeout(() => {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);
  }, [messages, loading, open]);

  const initializeSession = async () => {
    try {
      const existingSession =
        localStorage.getItem("chat_session_id");

      if (existingSession) {
        setSessionId(existingSession);
      } else {
        await createNewSession();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const createNewSession = async () => {
    try {
      const newSessionId = crypto.randomUUID();

      const { error } = await supabase
        .from("chat_sessions")
        .insert([
          {
            session_id: newSessionId,
            messages: [],
            resume_context: resumeContext,
          },
        ]);

      if (error) throw error;

      localStorage.setItem(
        "chat_session_id",
        newSessionId
      );

      setSessionId(newSessionId);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchSessionMessages = async () => {
    try {
      const { data, error } = await supabase
        .from("chat_sessions")
        .select("messages")
        .eq("session_id", sessionId)
        .single();

      if (error) throw error;

      setMessages(data?.messages || []);
      setInitialized(true);
    } catch (err) {
      console.error(err);

      setMessages([
        {
          role: "bot",
          text: "Unable to load chat history.",
        },
      ]);

      setInitialized(true);
    }
  };

  const updateSessionMessages = async (
    updatedMessages
  ) => {
    if (!sessionId) return;

    try {
      const { error } = await supabase
        .from("chat_sessions")
        .update({
          messages: updatedMessages,
        })
        .eq("session_id", sessionId);

      if (error) throw error;
    } catch (err) {
      console.error(err);
    }
  };

  const toggleChat = async () => {
    setOpen((prev) => !prev);

    if (
      !open &&
      initialized &&
      messages.length === 0
    ) {
      const welcomeMessage = {
        role: "bot",
        text:
          "🐱 I'm Arui, Vansh's cat. Curious about his work? Ask away!",
        timestamp: new Date().toISOString(),
      };

      const updatedMessages = [
        welcomeMessage,
      ];

      setMessages(updatedMessages);

      await updateSessionMessages(
        updatedMessages
      );
    }
  };

  const sendMessage = async () => {
    if (loading) return;

    const trimmed = input.trim();

    if (!trimmed) return;

    const userMessage = {
      role: "user",
      text: trimmed,
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    await updateSessionMessages(
      updatedMessages
    );

    try {
      const response = await fetch(
        "https://glmyhejkgldoblipnisi.functions.supabase.co/chatbot",
        {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${
                import.meta.env.VITE_SUPABASE_ANON_KEY
              }`,
              apikey:
                import.meta.env.VITE_SUPABASE_ANON_KEY,
            },
          body: JSON.stringify({
            message: trimmed,
            context: resumeContext,
          }),
        }
      );

       const responseText = await response.text();

console.log("Status:", response.status);
console.log("Response:", responseText);

if (!response.ok) {
  throw new Error(
    `HTTP ${response.status}: ${responseText}`
  );
}

const data = JSON.parse(responseText);
      const botMessage = {
        role: "bot",
        text:
          data.reply ||
          "Sorry, I couldn't generate a response.",
        timestamp: new Date().toISOString(),
      };

      const finalMessages = [
        ...updatedMessages,
        botMessage,
      ];

      setMessages(finalMessages);

      await updateSessionMessages(
        finalMessages
      );
    } catch (err) {
      console.error(err);

      const errorMessage = {
        role: "bot",
        text:
          "⚠️ Something went wrong. Please try again later.",
        timestamp: new Date().toISOString(),
      };

      const finalMessages = [
        ...updatedMessages,
        errorMessage,
      ];

      setMessages(finalMessages);

      await updateSessionMessages(
        finalMessages
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Launcher */}

      <AnimatePresence>
        {!open && (
          <motion.div
            className="chatbot-wrapper"
            onClick={toggleChat}
            drag
            dragMomentum={false}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 40,
            }}
          >
            {showFloating && (
              <motion.div
                className="chatbot-floating"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                Hey!
              </motion.div>
            )}

            <div className="chatbot-avatar">
              <img className="rounded-full"
                src="./paw.svg"
                alt="Chatbot"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-container"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="chatbot-header">
              <div>
                <h3>Auri</h3>
                <small>Online • Ask me anything about Vansh</small>
              </div>

              <button
                className="chatbot-btn"
                onClick={() =>
                  setOpen(false)
                }
              >
                ✕
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map(
                (msg, index) => (
                  <ChatMessage
                    key={index}
                    role={msg.role}
                    message={msg.text}
                  />
                )
              )}

              {loading && (
                <ChatMessage
                  role="bot"
                  loading
                />
              )}

              <div ref={bottomRef} />
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) =>
                  setInput(
                    e.target.value
                  )
                }
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter"
                  ) {
                    sendMessage();
                  }
                }}
              />

              <button
                className="chatbot-btn chatbot-send"
                onClick={
                  sendMessage
                }
                disabled={loading}
              >
                {loading
                  ? "..."
                  : "Send"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

