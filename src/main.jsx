import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Oneko from "./components/Oneko.jsx";
import Chatbot from './Chatbot.jsx'


import About from './components/About'
import SkillCard from './components/SkillCard.jsx'

import Footer from './components/Footer.jsx'
import Contacts from './components/Contacts.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <About />
    <SkillCard />
    <Oneko />
    <Chatbot />
    <Contacts />
    <Footer />
  </React.StrictMode>
);