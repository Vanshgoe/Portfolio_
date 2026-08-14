import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Oneko from "./components/Oneko.jsx";
import ResumeDropdown from "./components/ResumeDropdown.jsx";
import Chatbot from './Chatbot.jsx'


import About from './components/About'
import SkillCard from './components/SkillCard.jsx'

import Footer from './components/Footer.jsx'
import Contacts from './components/Contacts.jsx'
import Projects from './components/Projects.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <About />
    <SkillCard />
    <Oneko />
    <Chatbot />
    <Contacts />
    <Projects/>
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 mt-8 sm:mt-10">
      <ResumeDropdown />
   </section>
    <Footer />
</>
);