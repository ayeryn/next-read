import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/getSession";
import { signOut } from "@/auth";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

const Nav = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="mx-auto flex h-16 w-full items-center justify-center">
      <nav className="navbar bg-accent">
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
              className="text-secondary-content hover:text-primary">
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/books"
              className="text-secondary-content hover:text-primary">
              Books
            </Link>
          </li>
          {user ? (
            <li>
              <Link
                href="/private/lists"
                className="text-secondary-content hover:text-primary">
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
                  href="/login"
                  className="text-secondary-content hover:text-primary">
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
                className="btn-sm text-secondary-content hover:text-primary">
                Sign Out
              </Button>
            </form>
          )}
          <li>
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                // value="forest"
                value="pastel"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <IconSunFilled className="h-4 w-4 col-start-1 row-start-1 stroke-base-100 fill-base-100" />
              <IconMoonFilled className="h-4 w-4 col-start-2 row-start-1 stroke-base-100 fill-base-100" />
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
