import mongoose from "mongoose"

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sabhinav797:Abhi12345@cluster0.nvv1ymn.mongodb.net/FoodDelivery').then(()=>console.log("DB connected"));
}

export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     console.log("⏳ Connecting to MongoDB...");
//     await mongoose.connect(
//       "mongodb://sabhinav797:Abhi12345@ac-xxxxxx-shard-00-00.d7ier4e.mongodb.net:27017,ac-xxxxxx-shard-00-01.d7ier4e.mongodb.net:27017,ac-xxxxxx-shard-00-02.d7ier4e.mongodb.net:27017/FoodDelivery?ssl=true&replicaSet=atlas-xxxx-shard-0&authSource=admin&retryWrites=true&w=majority"
//     );
//     console.log("✅ DB connected");
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB

