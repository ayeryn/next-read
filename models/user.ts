import mongoose from "mongoose";

// Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: [true, "Username is required!"] },
  email: {
    type: String,
    required: [true, "Email is required!"],
  },
  password: { type: String, select: false },
  image: { type: String },
  authProviderId: { type: String }, // Google & Github Providers
});

// Model
// if there exists a User, user it
// else create a User with userSchema
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
