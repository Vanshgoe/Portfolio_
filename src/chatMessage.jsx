export default function ChatMessage({
  message,
  role,
  loading,
}) {
  if (loading) {
    return (
      <div className="message-wrapper bot">
        <div className="message-bubble">
          Typing...
        </div>
      </div>
    );
  }

  return (
    <div className={`message-wrapper ${role}`}>
      <div className="message-bubble">
        {message}
      </div>
    </div>
  );
}
