import axios from "axios";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
var socket, selectedChatCompare;
function Chat({ id }) {
    const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatId, setChatid] = useState("");
  const [Token, setToken] = useState("");
  const [loading, setloading] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);
  const socket = io("http://localhost:8000");

  useEffect(() => {
    async function fetchData() {
      setloading(true);
      const token = localStorage.getItem("Token");
      setToken(token);
      try {
        const response = await axios.post(
          "http://localhost:8000/message",
          { userId: id },
          { headers: { Authorization: token } }
        );
        setChatid(response.data);
        console.log(chatId);
        setMessages(response.data.messages || []);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]); // Include id in the dependencies array to re-fetch data when id changes

  useEffect(() => {

    socket.emit("setup", id);
    socket.on("connected", () => setSocketConnected(true));

    return () => {
      // Cleanup function to disconnect the socket when the component unmounts
      socket.disconnect();
    };
  }, [id]);

  useEffect(() => {
    const handleReceivedMessage = (newMessageReceived) => {
      console.log(newMessageReceived);
      setMessages([...messages, newMessageReceived]);
    };

    // Listen for incoming messages
    socket.on("message received", handleReceivedMessage);

    return () => {
      // Cleanup function to remove the message received listener
      socket.off("message received", handleReceivedMessage);
    };
  }, [messages]);

  const handleSendMessage = async () => {
    var messageData = {
      chat: chatId,
      content: newMessage,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8000/message/createMessage",
        messageData,
        {
          headers: {
            Authorization: Token,
          },
        }
      );

    //   console.log(chatId);
      setMessages([...messages, data]);
      socket.emit("new message", data);
    //   console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>loading</div>;
  }



  return (
  <div>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
        <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
            {messages.map((message, index) => 
              message.sender == id ? <div class="flex w-full mt-2 space-x-3 max-w-xs">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                      <p class="text-sm">{message.content}</p>
                  </div>
                  <span class="text-xs text-gray-500 leading-none">2 min ago</span>
              </div>
          </div> : <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">{message.content}</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-teal-50"></div>
			</div>
  
            )}
          </div>
          <div className="bg-gray-300 p-4">
            <input
              className="flex items-center h-10 w-full rounded px-3 text-sm"
              type="text"
              placeholder="Type your message…"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
