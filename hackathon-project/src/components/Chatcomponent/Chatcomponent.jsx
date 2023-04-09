import React, { useState } from "react";
import "./ChatComponent.css";

function ChatComponent() {
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}\nCategory: ${category}\nQuote: ${quote}`);
  };

  return (
    <div className="chat-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" className="input-field" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
          <input type="text" className="input-field" placeholder="Category" value={category} onChange={(event) => setCategory(event.target.value)} />
        </div>
        <textarea className="quote-field" placeholder="Quote" value={quote} onChange={(event) => setQuote(event.target.value)} />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}

export default ChatComponent;
