import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import path from "path";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import aiRoutes from './routes/aiRoutes.js';
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";

// import { fileURLToPath } from "url";
// import { dirname } from "path";



// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

dotenv.config();
// app config
const app = express()
const port = 4000 


// app.use(cors({
//   origin: "http://localhost:5173", // your React app's URL
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));


// middleware
app.use(express.json()) 
app.use(cors())

// db connection 
connectDB();    

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('upload'))
// app.use("/images", express.static(path.join(__dirname, "upload")));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/ai", chatRoutes); 






app.get("/", (req,res)=>{
    res.send("API Working") 
})



app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


// mongodb+srv://sabhinav797:Abhi12345@cluster0.d7ier4e.mongodb.net/?
// retryWrites=true&w=majority&appName=Cluster0