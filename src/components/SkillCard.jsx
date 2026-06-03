const SkillCard = () => {
  const iconClass =
  "h-24 w-24 object-contain transition-all duration-300 hover:scale-110 hover:-translate-y-2";

  return (  
      <main className="flex flex-col justify-center   py-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-400">Technologies I Work With</h1>
      <section className="flex flex-wrap justify-center gap-8 max-w-6xl my-12">
        <img className={iconClass} src="react.svg" alt="React" />
        <img className={iconClass} src="js.svg" alt="JavaScript" />

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
       

         <img className={iconClass} 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="git"/>

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

        <img className={iconClass} src="scikit-.svg" alt="Scikit Learn" />

        <img
          className={iconClass}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
          alt="PyTorch"
        />
      </section>
    </main>
   
  );
};

export default SkillCard;