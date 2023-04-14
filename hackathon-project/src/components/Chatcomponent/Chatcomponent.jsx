import React, { useState } from "react";
import "./ChatComponent.css";
import { useContext } from "react";
import { UserContext } from "../../context/authcontext/Auth.context";
import axios from "axios";
function ChatComponent() {
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("");
  const [username, setUsername] = useState("");
  const {currentUser} = useContext(UserContext);

console.log(currentUser,"h")

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Userid: ${currentUser.id}\nCategory: ${category}\nQuote: ${quote}`);
    axios.post("http://localhost:8000/api/kickposting", {
      "userid":currentUser.id,
      "category":category,
      "quote":quote

    
    })
    .then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="chat-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          
          <input type="text" className="input-field" placeholder="Category" value={category} onChange={(event) => setCategory(event.target.value)} />
        </div>
        <textarea className="quote-field" placeholder="Quote" value={quote} onChange={(event) => setQuote(event.target.value)} />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}

export default ChatComponent;
