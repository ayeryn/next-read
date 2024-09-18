import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri: string = process.env.MONGODB_URI;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(uri);
    console.log("Mongo DB connected!");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
