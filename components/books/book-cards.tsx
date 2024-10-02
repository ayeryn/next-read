import {
  IconBook,
  IconBrandGoogleFilled,
  IconPlaylistAdd,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

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
  const book_title = book.volumeInfo?.title || "";
  const book_authors = book.volumeInfo?.authors || [];
  const book_thumbnail =
    book.volumeInfo.imageLinks?.thumbnail ||
    book.volumeInfo.imageLinks?.smallThumbnail ||
    "";
  const book_link = book.volumeInfo?.infoLink || "";

  return (
    <div className="card card-side card-bordered w-96 h-30 shadow-xl">
      <figure className="ml-5">
        {book_thumbnail ? (
          <Image
            src={book_thumbnail}
            alt={book_title}
            width={300}
            height={300}
          />
        ) : (
          <IconBook />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{book_title}</h2>
        <p className="text-primary">
          Author(s): {book_authors ? book_authors.join(", ") : "Unknown"}
        </p>
        <div className="card-actions justify-center mt-3">
          {/* TODO: dropdown - open in */}
          <button className="btn btn-sm">
            <a href={book_link} target="_blank">
              <IconBrandGoogleFilled />
            </a>
          </button>
          <button className="btn btn-sm">
            {/* TODO: dropdown showing my lists */}
            <IconPlaylistAdd />
          </button>
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
