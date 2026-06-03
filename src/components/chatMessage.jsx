// ChatMessage.jsx

import React, { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

// Optional loading animation component
function ChatbotLoadingAnimation() {
  return (
    <div className="loading-dots">
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  );
}

// I'm using forwardRef here, but it's purely optional.
// If you don't need refs for scrolling or transitions, a normal component is fine.
const ChatMessage = forwardRef(({ message, role, loading }, ref) => {
  // This is a simple check for an error style (e.g., if the text contains some warning emoji).
  // It's optional—omit if you don't need special styling for errors.
  const isError = role === "bot" && message && message.includes("⚠️");

  return (
    <motion.div
      ref={ref}
      className={`message-wrapper ${role} ${isError ? "error" : ""}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* A small avatar (optional) if the role is "bot" */}
      {role === "bot" && (
        <div className="message-avatar">
          <img src="/chat-avatar.png" alt="Bot Avatar" />
        </div>
      )}
      <div className="message-bubble">
        {/* If we're still loading, show an animation. Otherwise, render the actual text. */}
        {loading ? (
          <ChatbotLoadingAnimation />
        ) : (
          <ReactMarkdown>{message}</ReactMarkdown>
        )}
      </div>
    </motion.div>
  );
});

export default ChatMessage;