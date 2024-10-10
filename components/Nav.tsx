import Link from "next/link";
import { getSession } from "@/lib/getSession";
import { signOut } from "@/auth";
import { IconBooks, IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import Image from "next/image";

const Nav = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="mx-auto flex h-16 w-full items-center justify-center">
      <nav className="navbar bg-accent">
        <div className="flex-none mr-2">
          <Link href="/">
            <IconBooks className="w-9 h-9 stroke-primary-content fill-secondary col-start-1 row-start-1" />
          </Link>
        </div>
        <div className="flex-1">
          <Link href="/">
            <p className="font-medium">Next Read</p>
          </Link>
        </div>

        <div className="flex-none gap-2">
          {user ? (
            <div className="dropdown dropdown-end items-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full">
                  <Image
                    src={user.image}
                    alt="profile"
                    width={37}
                    height={37}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow text-primary-content">
                <li>
                  <Link
                    href="/tbr"
                    className="text-primary-content hover:text-accent justify-between">
                    TBR
                  </Link>
                </li>
                <li>
                  <label className="flex cursor-pointer gap-2">
                    <IconSunFilled className="h-5 w-5" />
                    <input
                      type="checkbox"
                      value="coffee"
                      className="toggle theme-controller"
                    />
                    <IconMoonFilled className="h-5 w-5" />
                  </label>
                </li>
                <li>
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}>
                    <button className="text-primary-content hover:text-accent">
                      Sign Out
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button className="btn btn-sm  btn-primary">
                <Link
                  href="/login"
                  className="text-primary-content hover:text-accent">
                  Sign In
                </Link>
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
