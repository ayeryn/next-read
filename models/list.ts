import mongoose, { Schema } from "mongoose";

const listSchema = new mongoose.Schema(
  {
    description: { type: String, required: true, default: "My reading list" },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
    books: {
      type: [String],
      required: true,
      default: [],
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "modifiedAt" }, // Enable timestamps
  }
);

export const List = mongoose.models?.List || mongoose.model("List", listSchema);
