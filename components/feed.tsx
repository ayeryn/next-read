"use client";

import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import mockData from "@/data/response.json";
import BookCards from "./books/book-cards";

const jsonData = mockData || [];

export default function Feed() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    const searchtext = e.target.value;
    setSearchText(searchtext);
    console.log("Search text = ", searchtext);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <label className="input input-bordered flex items-center gap-2 mt-5">
        <input
          type="text"
          className="grow input-md"
          placeholder="Book title, author, ISBN"
          value={searchText}
          onChange={handleSearchChange}
        />
        <IconSearch />
      </label>

      {/* <div className="flex flex-col w-full justify-center items-center my-5"> */}
      {/* {!data ? <p>Loading...</p> : <BookCards data={data} />} */}
      {/* <BookCards data={jsonData} /> */}
      {/* </div> */}
    </div>
  );
}
