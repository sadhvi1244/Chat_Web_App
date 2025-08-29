//here we create fn to create database
import mongoose from "mongoose";

//fn to connect to the mongodb databbase
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URL}/chat-app`);
  } catch (error) {
    console.log(error);
  }
};
