import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/getSession";
import { signOut } from "@/auth";

const Nav = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="mx-auto flex h-16 w-full items-center">
      <nav className="navbar bg-base-200">
        <div className="flex-1">
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/assets/images/logo.svg"
              alt="logo picture"
              width={40}
              height={40}
            />
            <p className="font-medium">Next Read</p>
          </Link>
        </div>

        <ul className="hidden md:flex space-x-4 list-none">
          <li>
            <Link
              href="/users"
              className="text-neutral hover:text-primary hover:font-semibold">
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/books"
              className="text-neutral hover:text-primary hover:font-semibold">
              Books
            </Link>
          </li>
          {user ? (
            <li>
              <Link
                href="/private/lists"
                className="text-neutral hover:text-primary hover:font-semibold">
                My Lists
              </Link>
            </li>
          ) : (
            <></>
          )}
          {!user ? (
            <>
              <Button asChild variant="secondary">
                <Link
                  href="/signin"
                  className="text-neutral hover:text-primary hover:font-semibold">
                  Sign In
                </Link>
              </Button>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}>
              <Button
                variant="secondary"
                className="btn-sm text-neutral hover:text-primary hover:font-semibold">
                Sign Out
              </Button>
            </form>
          )}
          <li>
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
