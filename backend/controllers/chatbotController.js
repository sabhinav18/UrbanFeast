import sessionClient from "../config/dialogflow.js";

export const chatbotWebhook = async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    const sessionPath = sessionClient.projectAgentSessionPath(
      process.env.DIALOGFLOW_PROJECT_ID,
      sessionId
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode: "en-US",
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;

    res.json({ reply: result.fulfillmentText });
  } catch (error) {
    console.error("Chatbot Error:", error.message);
    res.status(500).json({ error: "Chatbot failed" });
  }
};
