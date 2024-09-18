import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Nav = () => {
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
            <p>Next Read</p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 list-none">
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/private/books">Books</Link>
          </li>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
          <form>
            <Button type="button" className="btn btn-outline btn-sm">
              Sign Out
            </Button>
          </form>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
