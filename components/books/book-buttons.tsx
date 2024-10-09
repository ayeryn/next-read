import { getMyLists } from "@/lib/actions";
import { IconCaretDownFilled } from "@tabler/icons-react";

export function ViewBookButton({ bookLink }: { bookLink: string }) {
  return (
    <details className="dropdown dropdown-open">
      <summary className="btn btn-sm btn-accent m-1">
        {/* FIXME: close dropdown after one click */}
        View <IconCaretDownFilled />
      </summary>
      <ul className="menu dropdown-content bg-accent rounded-box z-[1] w-52 p-2 shadow">
        <li>
          <a href={bookLink} target="_blank">
            Google
          </a>
        </li>
        <li>
          {/* TODO: How do we open on goodreads???? have user select default retailer? */}
          Goodreads
        </li>
      </ul>
    </details>
  );
}

export async function AddBookButton({ bookId }: { bookId: string }) {
  // FIXME: Something wrong with how the components are put together
  // const lists = await getMyLists();

  return (
    <details className="dropdown">
      <summary className="btn btn-sm btn-accent m-1">
        Add To <IconCaretDownFilled />
      </summary>
      <ul className="menu dropdown-content bg-accent rounded-box z-[1] w-52 p-2 shadow">
        {/* {lists.map((list) => (
          <li key={list.id}>{list.name}</li>
        ))} */}
        <li>Default List</li>
      </ul>
    </details>
  );
}
