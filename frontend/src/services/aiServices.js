import axios from "axios";

const API_URL = "http://localhost:4000/api/ai";

// Chatbot
export const sendMessageToChatbot = async (message, sessionId) => {
  const res = await axios.post(`${API_URL}/chatbot`, { message, sessionId });
  return res.data;
};