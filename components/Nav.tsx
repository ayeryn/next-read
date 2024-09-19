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
              href="/private/books"
              className="text-neutral hover:text-primary hover:font-semibold">
              Books
            </Link>
          </li>
          {user ? (
            <li>
              <Link
                href="/lists"
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
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
