import mongoose, { Schema } from "mongoose";

const bookListSchema = new mongoose.Schema(
  {
    googleId: { type: String, unique: true, required: true },
    listId: {
      type: Schema.Types.ObjectId,
      ref: "List",
    },
  },
  {}
);

export const BookList =
  mongoose.models?.BookList || mongoose.model("BookList", bookListSchema);
