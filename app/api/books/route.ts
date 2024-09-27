import connectToDb from "@/lib/db";
import { Book } from "@/models/book";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_BOOKS_API_KEY}`
    );

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }

    await connectToDb();

    const books = data.items.map(async (item) => {
      const bookData = {
        title: item.volumeInfo.title || "Unknown Title",
        authors: item.volumeInfo.authors || ["Unknown Author"],
        publisher: item.volumeInfo.publisher || "Unknown Publisher",
        publishedDate: item.volumeInfo.publishedDate || "Unknown Date",
        description: item.volumeInfo.description || "No Description",
        categories: item.volumeInfo.categories || ["Unknown Category"],
        pageCount: item.volumeInfo.pageCount || 0,
        thumbnail: item.volumeInfo.imageLinks?.thumbnail || "",
        googleId: item.id, // Unique ID from Google Books
      };

      // Avoid duplicate books by checking googleId
      const existingBook = await Book.findOne({ googleId: item.id });
      if (!existingBook) {
        return Book.create(bookData);
      }
    });

    await Promise.all(books); // Wait for all books to be saved

    res.status(200).json({ message: "Books saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}
