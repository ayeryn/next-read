'use client';
import Link from "next/link";
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="navbar w-full mb-16 pt-33">
      <div className="flex-1">
        <Link href="/" className="flex gap-2 flex-center">
          Next Read
        </Link>
      </div>
       <div className="flex-none">
         <ul className="menu menu-horizontal px-1">
           <li><Link href="/books">Books</Link></li>
          </ul>
        </div>
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/users">Users</Link>
            <button className="btn btn-primary btn-sm" onClick={signOut}>
                Sign Out
              </button>
          </div>
        ) : (
          <div className="flex gap-3 md:gap-5">
              <button className="btn btn-primary btn-sm" onClick={()=>{}}>
                Sign Up
              </button>
            </div>
        )}
      </div>
    </nav>
  )
}

export default Nav