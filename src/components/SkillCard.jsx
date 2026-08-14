const SkillCard = () => {
  const iconClass =
    "h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain transition-all duration-300 hover:scale-110 hover:-translate-y-2";

  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-10">
      
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-400">
        Technologies I Work With
      </h1>

      <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 my-10 sm:my-12">
        
        <img
          className={iconClass}
          src="react.svg"
          alt="React"
        />

        <img
          className={iconClass}
          src="js.svg"
          alt="JavaScript"
        />

        <img
          className={iconClass}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          alt="TypeScript"
        />

        <img
          className={iconClass}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          alt="Tailwind CSS"
        />

        <img
          className={iconClass}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
          alt="Vite"
        />

        <img
          className={iconClass}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          alt="Git"
        />

        <img
          className={iconClass}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
        />

        <img
          className={iconClass}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="Python"
        />

        <img
          className={iconClass}
          src="scikit-.svg"
          alt="Scikit Learn"
        />

        <img
          className={iconClass}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
          alt="PyTorch"
        />

      </div>
    </section>
  );
};

export default SkillCard;