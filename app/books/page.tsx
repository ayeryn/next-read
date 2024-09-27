"use client";
import { useEffect, useState } from "react";

const BooksPage = () => {
  // Read env.local
  // const apiKey: string = process.env.GOOGLE_BOOKS_API_KEY;
  // const apiUrl: string = process.env.GOOGLE_BOOKS_API_URL;
  // console.log("url = " + apiUrl);

  // // Request data
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(apiUrl);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok!')
  //       }

  //       const data = await response.json();
  //       setData(data)
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, );

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>{error.message}</p>

  // return (
  //   <div>
  //     <h1>Books</h1>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </div>
  // )
  const fetchData = async () => {
    const GOOGLE_BOOKS_API =
      "https://www.googleapis.com/books/v1/volumes?q=filter%3Dfree-ebooks&key=AIzaSyB5Ua3EiJz7ndCHtMvj6FNHJe4nBKzOpgQ";
    try {
      const response = await fetch(GOOGLE_BOOKS_API);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(typeof data, data.items); // object
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
  return (
    <div className="flex w-full justify-center items-center">
      <h1 className="text-2xl font-semibold">Books</h1>
    </div>
  );
};

export default BooksPage;
