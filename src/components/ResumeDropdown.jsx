import React, { useState, useEffect, useRef } from 'react';

export default function ResumeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          whitespace-nowrap
          text-xs sm:text-sm
          font-normal
          text-blue-400
          hover:text-white
          transition-colors
          duration-200
        "
      >
        Download Resume {isOpen ? '▲' : '▼'}
      </button>

      {isOpen && (
        <ul
          className="
            absolute
            left-0
            top-full
            mt-2
            w-44
            sm:w-48
            rounded-md
            border
            border-zinc-800
            bg-[#0a0a0a]
            shadow-2xl
            z-50
            py-1.5
            list-none
            m-0
          "
        >
          <li>
            <a
              href="/resume-aiml.pdf"
              download="Vansh_Goel_AI_ML_Resume.pdf"
              className="
                block
                px-4 py-2.5
                text-xs sm:text-sm
                text-gray-400
                hover:bg-zinc-900
                hover:text-white
                transition-colors
              "
            >
              ~ AI / ML Role
            </a>
          </li>

          <li>
            <a
              href="/resume-webdev.pdf"
              download="Vansh_Goel_WebDev_Resume.pdf"
              className="
                block
                px-4 py-2.5
                text-xs sm:text-sm
                text-gray-400
                hover:bg-zinc-900
                hover:text-white
                transition-colors
              "
            >
              ~ Web Dev Role
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}