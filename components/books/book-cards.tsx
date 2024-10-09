import { IconSquareForbid } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { ViewBookButton, AddBookButton } from "./book-buttons";

type Book = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    infoLink: string;
    imageLinks: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
  };
};

type BookObject = {
  items: Book[];
};

const BookCard = ({ book }: { book: Book }) => {
  // Strip information from Book object
  const bookTitle = book.volumeInfo?.title || "";
  const bookAuthors = book.volumeInfo?.authors || [];
  const bookThumbnail =
    book.volumeInfo.imageLinks?.smallThumbnail ||
    book.volumeInfo.imageLinks?.thumbnail ||
    "";
  const bookLink = book.volumeInfo?.infoLink || "";

  return (
    <div className="card card-side card-compact card-bordered w-96 h-30 shadow-xl border-primary">
      <figure className="ml-5">
        {bookThumbnail ? (
          <Image src={bookThumbnail} alt={bookTitle} width={250} height={250} />
        ) : (
          <IconSquareForbid />
        )}
      </figure>
      <div className="card-body text-base-content">
        <h4 className="card-title">{bookTitle}</h4>
        <p className="text-sm">
          Author(s): {bookAuthors ? bookAuthors.join(", ") : "Unknown"}
        </p>
        <div className="card-actions justify-center mt-3">
          <ViewBookButton bookLink={bookLink} />
          <AddBookButton bookId={book.id} />
        </div>
      </div>
    </div>
  );
};

export default function BookCards({ data }: { data: BookObject }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 justify-center items-center">
      {data.items.map((book) => (
        <li key={book.id} className="mb-4">
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
}
