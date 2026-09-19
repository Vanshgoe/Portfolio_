
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
          I'm a developer who likes building things with AI, machine learning,
          and software. I enjoy taking random ideas, turning them into real
          projects, and figuring out how to make them actually useful.

          <br />
          <br />

          I'm usually exploring some new technology, working on a side project,
          or getting way too curious about how something works. I'm especially
          interested in the intersection of AI and software engineering and
          love experimenting with new ideas along the way.

          <br />
          <br />

          When I'm not coding, you'll probably find me playing an instrument,
          hanging out with cats, or exploring something new.
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
 
