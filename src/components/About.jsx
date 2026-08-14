const About = () => {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 my-16 sm:my-20">
      <main className="text-left">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-blue-500 mb-6 sm:mb-8">
          About Me
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Hey! I'm Vansh Goel.
        </h2>

        <p className="mt-4 max-w-3xl text-lg sm:text-xl lg:text-2xl text-zinc-300 leading-relaxed">
          I'm a developer passionate about AI,
           machine learning, and software engineering.
            I enjoy building intelligent and scalable solutions,
             solving complex problems, and exploring emerging 
             technologies. I’m focused on turning ideas into 
             practical applications that combine strong engineering
              with the power of AI. Outside of technology, 
              I enjoy playing musical instruments,
               which gives me a creative outlet and 
               keeps me curious beyond the world of code.



          <br />
          <br />

          Outside of coding, I enjoy exploring emerging tech, working on
          personal projects, and spending time with cats.
        </p>

        <div className="mt-6 text-base sm:text-xl flex flex-wrap gap-2">
          <p>Always happy to connect—</p>

          <a
            href="mailto:vansh.goel.in@gmail.com"
            className="underline hover:text-blue-400 transition-colors"
          >
            say hello!
          </a>
        </div>
      </main>
    </section>
  );
};

export default About;