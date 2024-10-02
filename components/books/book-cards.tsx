import { IconPlaylistAdd } from "@tabler/icons-react";
import React from "react";

type VolumeInfo = {
  title: string;
  authors: string[];
};
type Book = {
  id: string;
  volumeInfo: VolumeInfo;
  // publishedDate?: string;
  // description?: string;
  // pageCount?: number;
  // categories?: string[];
  // thumbnailUrl?: string;
};

type BookObject = {
  items: Book[];
};

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">{book.volumeInfo.title}</h2>
          <p className="text-primary">
            Author:{" "}
            {book.volumeInfo.authors
              ? book.volumeInfo.authors.join(", ")
              : "Unknown"}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <IconPlaylistAdd className="mr-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BookCards({ data }: { data: BookObject }) {
  console.log("data ", data);
  // data is an object with an attribute items, which is a list of book objects
  // data : {items:[{book}]}
  return (
    // <div className="mt-5 grid grid-cols- gap-4 items-center justify-center w-full">
    <ul>
      {data.items.map((book) => (
        <li key={book.id} className="mb-4">
          <BookCard book={book} />
        </li>
      ))}
    </ul>
    // </div>
  );
}
