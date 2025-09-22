
import express from "express";
import dialogflow from "@google-cloud/dialogflow";
import { v4 as uuid } from "uuid";

const chatRoutes = express.Router();

chatRoutes.post("/chat", async (req, res) => {
  const { query } = req.body;

  try {
    const sessionId = uuid();
    const sessionClient = new dialogflow.SessionsClient({
      projectId: process.env.DIALOGFLOW_PROJECT_ID,
      credentials: {
        private_key: process.env.DIALOGFLOW_PRIVATE_KEY.replace(/\\n/g, "\n"),
        client_email: process.env.DIALOGFLOW_CLIENT_EMAIL,
      },
    });

    const sessionPath = sessionClient.projectAgentSessionPath(
      process.env.DIALOGFLOW_PROJECT_ID,
      sessionId
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: "en",
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;

    return res.json({ reply: result.fulfillmentText });
  } catch (error) {
    console.error("Dialogflow Error:", error.message, error);
    return res.status(500).json({ reply: "Sorry, I’m having trouble." });
  }
});

export default chatRoutes;
