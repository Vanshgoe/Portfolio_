import { useState } from "react";

const projects = [
  {
    name: "Image Processing Studio",
    link: "https://vanshgoe-image-processing-studio-app-c0ltih.streamlit.app/",
    technologies: "Python · Streamlit ·Machine Learning · Image Processing",
  },
  {
    name: "Cat & Dog Classification",
    link: "https://cat-and-dog-classification.vercel.app/",
    technologies: "Python · Machine Learning · CNN · React.js · Vercel",
  },
  {
    name: "ATS Brain",
    link: "https://ats-brain.vercel.app/",
    technologies: "Next.js · AI · Tailwind CSS · Vercel",
  },
  {
    name: "Real-Time Tracker",
    link: "https://real-time-tracker-sscw.onrender.com/",
    technologies: "React · Node.js · Socket.io · Render",
  },
  {
    name: "Image Editor",
    link: "https://image-editor-livid-one.vercel.app/",
    technologies: "React · JavaScript · Canvas API · Vercel",
  },
];


const Projects = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 my-16 sm:my-20">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="group flex items-center gap-3 text-3xl sm:text-5xl lg:text-6xl font-bold text-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
      >
        <span>Projects</span>

        <span
          className={`text-2xl sm:text-3xl transition-transform duration-300 ${
            open ? "rotate-90" : "group-hover:translate-x-1"
          }`}
        >
          →
        </span>

        {!open && (
          <span className="  text-sm sm:text-base font-normal text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
            click
          </span>
        )}
      </button>

      {open && (
        <div className="mt-8 space-y-7">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border-b border-zinc-800 pb-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {project.name}
                </h2>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  Live ↗
                </a>
              </div>

              <p className="mt-2 text-base sm:text-lg text-zinc-400">
                {project.technologies}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;