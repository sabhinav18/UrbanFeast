
import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react"; // chat icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I’m UrbanFeast Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  // Ref for auto-scroll
  const messagesEndRef = useRef(null);

  // Auto-scroll when new message comes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    // Clear input immediately
    setInput("");

    try {
      // Call backend API
      const response = await fetch("https://urbanfeast-backend.onrender.com/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      const data = await response.json();
      console.log("Bot Reply:", data);

      setMessages([...newMessages, { sender: "bot", text: data.reply }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages([...newMessages, { sender: "bot", text: "⚠️ Sorry, something went wrong." }]);
    }
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-xl rounded-2xl flex flex-col overflow-hidden">
          <div className="bg-red-500 text-white p-3 font-bold flex justify-between items-center">
            <span>UrbanFeast Assistant</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200 ">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 overflow-y-auto h-64 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-gray-200 self-end text-right ml-auto"
                    : "bg-red-100 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {/* 👇 Scroll Anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex p-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}  // 👈 send on Enter
              className="flex-1 p-2 border rounded-lg text-sm"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

