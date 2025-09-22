import express from "express";
import { chatbotWebhook } from "../controllers/chatbotController.js";


const router = express.Router();

router.post("/chatbot", chatbotWebhook);

export default router;
