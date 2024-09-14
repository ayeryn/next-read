"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  // const isUserLoggedIn = false;
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState<any>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    const setAuthProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setAuthProviders();
  }, []);

  return (
    <nav className="navbar bg-base-100">
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
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/users">Users</Link>
            <Link href="/books">Books</Link>

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={signOut}>
              Sign Out
            </button>
            <Link href="/">
              <Image
                src="/assets/images/profile.svg"
                alt="profile picture"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="btn btn-primary btn-sm">
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <Image
                src="/assets/images/profile.svg"
                alt="profile picture"
                width={37}
                height={37}
                className="rounded-full"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />
            </div>

            {toggleDropdown && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <Link
                    href="/profile"
                    onClick={() => setToggleDropdown(false)}>
                    My Profile
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={signOut}>
                    Sign Out
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
