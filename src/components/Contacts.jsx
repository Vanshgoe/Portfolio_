const Contacts = () => {
  const iconClass =
    "h-10 w-10 sm:h-12 sm:w-12 object-contain transition-all duration-300 hover:scale-110 hover:-translate-y-2";

  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-10">
      <h1 className="text-5xl sm:text-6xl font-bold text-blue-400">
        Contact
      </h1>

      <p className="text-xl sm:text-2xl lg:text-3xl my-6 sm:my-8">
        Building something interesting? I'd love to hear about it.
      </p>

      <div className="flex flex-row gap-6 sm:gap-8">
        <a
          href="https://www.linkedin.com/in/vansh-goel-06a7401ab"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={iconClass}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
          />
        </a>

        <a
          href="https://github.com/Vanshgoe"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={`${iconClass} invert`}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GitHub"
          />
        </a>

        <a
          href="https://x.com/goel_vansh84641"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={`${iconClass} invert`}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
            alt="X"
          />
        </a>
      </div>
    </section>
  );
};

export default Contacts;