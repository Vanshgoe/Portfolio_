// ChatMessage.jsx
import  { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

function ChatbotLoadingAnimation() {
  return (
    <div className="loading-dots">
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  );
}

const ChatMessage = forwardRef(({ message, role, loading }, ref) => {
  const isError =
    role === "bot" &&
    message &&
    message.includes("⚠️");

  return (
    <motion.div
      ref={ref}
      className={`message-wrapper ${role} ${
        isError ? "error" : ""
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {role === "bot" && (
        <div className="message-avatar">
          <img
            src="/paw1.png"
            alt="Bot Avatar"
          />
        </div>
      )}

      <div className="message-bubble">
        {loading ? (
          <ChatbotLoadingAnimation />
        ) : (
          <ReactMarkdown>
            {message}
          </ReactMarkdown>
        )}
      </div>
    </motion.div>
  );
});

export default ChatMessage;