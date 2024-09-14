'use client';
import Link from "next/link";
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="text-xl">Next Read</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/users">Users</Link></li>
          <li><Link href="/books">Books</Link></li>
          <li><button className="btn btn-accent btn-sm" onClick={()=>{}}>
              Sign Up
            </button>
          </li>
          <li>
            <button className="btn btn-primary btn-sm" onClick={()=>{}}>
              Log In
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav