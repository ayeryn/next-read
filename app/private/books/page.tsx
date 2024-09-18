'use client';
import {useEffect, useState} from 'react';


const BooksPage = () => {
  // Read env.local
  // const apiKey: string = process.env.GOOGLE_BOOKS_API_KEY;
  const apiUrl: string = process.env.GOOGLE_BOOKS_API_URL;
  console.log("url = " + apiUrl);

  // Request data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok!')
        }

        const data = await response.json();
        setData(data)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  
    fetchData();
  }, );
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <div>
      <h1>Books</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default BooksPage