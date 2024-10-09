"use client";
import BookCards from "@/components/books/book-cards";
import { useState } from "react";
import mockData from "@/response.json";

const jsonData = mockData || [];
const BooksPage = () => {
  // const [data, setData] = useState(null);

  // const fetchData = async () => {
  //   const request =
  //     process.env.GOOGLE_BOOKS_API_URL + process.env.GOOGLE_BOOKS_API_KEY;
  //   console.log("req = ", request);

  //   try {
  //     const response = await fetch(request);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const data = await response.json();
  //     setData(data);
  //     console.log("Fetching Google Books...");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // fetchData();

  // data is an object with an attribute items, which is a list of book objects
  // data : {items:[{book}]}
  return (
    <div className="flex flex-col w-full justify-center items-center my-5">
      <h2 className="text-2xl font-semibold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        Books
      </h2>
      {/* {!data ? <p>Loading...</p> : <BookCards data={data} />} */}
      <BookCards data={jsonData} />
    </div>
  );
};

export default BooksPage;
