const About = () => {
    return (
        <section className="flex flex-col items-center  mx-20 my-20">
            <main className="text-left">
            <h1 className="text-9xl font-bold  text-blue-500  mb-8">
                About Me
            </h1>
            <h2 className="text-3xl font-bold text-white font-sanserif">
                Hey! I'm Vansh Goel.</h2>

            <h3 className="max-w-3xl text-2xl text-zinc-300 leading-relaxed">
                I'm a Full-Stack Developer passionate about building fast, scalable, and user-friendly web applications. I enjoy solving problems, learning new technologies, and transforming ideas into meaningful digital experiences.

                Outside of coding, I enjoy exploring emerging tech, working on personal projects, and spending time with cats.
</h3>
                <div className="text-xl flex flex-row">
                    <p>
                    Always happy to connect—</p>
                    <a href="mailto:vansh.goel.in@gmail.com" className="underline">
                        say hello!
                    </a>
                </div></main>
            </section>
        );
};

export default About;