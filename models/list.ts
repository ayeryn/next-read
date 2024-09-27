import mongoose, { Schema } from "mongoose";

const listSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "List name is required!"],
      // TODO: Find a way to make a listname unique to one user
    },
    description: { type: String },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "modifiedAt" }, // Enable timestamps
  }
);

export const List = mongoose.models?.List || mongoose.model("List", listSchema);
