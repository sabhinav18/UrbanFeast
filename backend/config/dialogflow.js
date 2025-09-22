// import dialogflow from "@google-cloud/dialogflow";
// import dotenv from "dotenv";

// dotenv.config();

// const projectId = process.env.DIALOGFLOW_PROJECT_ID;
// const sessionClient = new dialogflow.SessionsClient({
//   keyFilename: process.env.DIALOGFLOW_KEY_FILE, // path to service account JSON
// });



// export default sessionClient;


import dialogflow from "@google-cloud/dialogflow";
import dotenv from "dotenv";

dotenv.config();

const projectId = process.env.DIALOGFLOW_PROJECT_ID; // ✅ must match your actual GCP project ID
const keyFilename = process.env.DIALOGFLOW_KEY_FILE; // ✅ absolute/relative path to JSON file

// Create Dialogflow session client
const sessionClient = new dialogflow.SessionsClient({
  keyFilename,
});

// Helper to build session path for each user/session
export const getSessionPath = (sessionId) => {
  return sessionClient.projectAgentSessionPath(projectId, sessionId);
};

export default sessionClient; 
