"use client";
import BookCards from "@/components/books/book-cards";
import { useState } from "react";
import mockData from "@/response.json";

const jsonData = mockData || [];
const BooksPage = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const GOOGLE_BOOKS_API =
      "https://www.googleapis.com/books/v1/volumes?q=filter%3Dfree-ebooks& projection=lite&key=AIzaSyB5Ua3EiJz7ndCHtMvj6FNHJe4nBKzOpgQ";
    try {
      const response = await fetch(GOOGLE_BOOKS_API);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setData(data);
      console.log("Fetching Google Books...");
    } catch (error) {
      console.error(error);
    }
  };
  // fetchData();

  // data is an object with an attribute items, which is a list of book objects
  // data : {items:[{book}]}
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-2xl font-semibold">Books</h1>
      {/* {!data ? <p>Loading...</p> : <BookCards data={data} />} */}
      <BookCards data={jsonData} />
    </div>
  );
};

export default BooksPage;
