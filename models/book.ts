import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    authors: [String],
    publisher: String,
    publishedDate: String,
    description: String,
    categories: [String],
    pageCount: Number,
    thumbnail: String,
    googleId: { type: String, unique: true }, // Use Google Book ID to avoid duplicates
  },
  { timestamps: true }
);

export const Book = mongoose.models?.Book || mongoose.model("Book", bookSchema);
