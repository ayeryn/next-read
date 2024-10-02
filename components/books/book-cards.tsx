import { IconBrandGoogleFilled, IconPlaylistAdd } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

type VolumeInfo = {
  title: string;
  authors: string[];
  infoLink: string;
  imageLinks: ImageLinks;
};

type Book = {
  id: string;
  volumeInfo: VolumeInfo;
};

type BookObject = {
  items: Book[];
};

const BookCard = ({ book }: { book: Book }) => {
  // console.log("Book..", book);
  // console.log("Book..", book.volumeInfo.infoLink);
  return (
    <div className="card card-side card-bordered w-96 h-30  shadow-xl">
      <figure className="pl-3">
        <Image
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          width={120}
          height={200}
          className="ml-2"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{book.volumeInfo.title}</h2>
        <p className="text-primary">
          Author:{" "}
          {book.volumeInfo.authors
            ? book.volumeInfo.authors.join(", ")
            : "Unknown"}
        </p>
        <div className="card-actions justify-center mt-3">
          <button className="btn btn-sm">
            <a href={book.volumeInfo.infoLink} target="_blank">
              <IconBrandGoogleFilled />
            </a>
          </button>
          <button className="btn btn-sm">
            {/* This will be a dropdown form sorta thing to select lists */}
            <IconPlaylistAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function BookCards({ data }: { data: BookObject }) {
  // console.log("data ", data);
  // data is an object with an attribute items, which is a list of book objects
  // data : {items:[{book}]}
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {data.items.map((book) => (
        <li key={book.id} className="mb-4">
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
}
