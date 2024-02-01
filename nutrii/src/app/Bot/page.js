import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chat = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      name: "ChatBot",
      img: "https://image.flaticon.com/icons/svg/327/327779.svg",
      side: "left",
      text: "Hi, welcome to ChatBot! Go ahead and send me a message. 😄",
      time: formatDate(new Date()),
    },
  ]);

  const inputRef = useRef(null);

  const sendMessage = async () => {
    if (!currentMessage) return;

    appendMessage("You", "https://image.flaticon.com/icons/svg/145/145867.svg", "right", currentMessage);
    setCurrentMessage("");

    try {
      const response = await axios.get(`http://localhost:4000/get`, { params: { msg: currentMessage } });
      const botResponse = response.data;
      appendMessage("ChatBot", "https://image.flaticon.com/icons/svg/327/327779.svg", "left", botResponse);
    } catch (error) {
      console.error(error);
      // Handle error response from the server
    }
  };

  const appendMessage = (name, img, side, text) => {
    const newMessage = {
      name,
      img,
      side,
      text,
      time: formatDate(new Date()),
    };

    setChatMessages([...chatMessages, newMessage]);
    inputRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const formatDate = (date) => {
    const h = `0${date.getHours()}`.slice(-2);
    const m = `0${date.getMinutes()}`.slice(-2);
    return `${h}:${m}`;
  };

  return (
    <div className="msger">
      <header className="msger-header">
        <div className="msger-header-title">
          <i className="fas fa-bug"></i> Chatbot <i className="fas fa-bug"></i>
        </div>
      </header>

      <main className="msger-chat">
        {chatMessages.map((message, index) => (
          <div key={index} className={`msg ${message.side}-msg`}>
            <div className="msg-img" style={{ backgroundImage: `url(${message.img})` }}></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">{message.name}</div>
                <div className="msg-info-time">{message.time}</div>
              </div>

              <div className="msg-text">{message.text}</div>
            </div>
          </div>
        ))}
        <div ref={inputRef}></div>
      </main>

      <form className="msger-inputarea" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="msger-input"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Enter your message..."
        />
        <button type="button" className="msger-send-btn" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
