'use client';
import React from 'react'
import Link from "next/link";

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
        </ul>
      </div>
    </div>
  )
}

export default Nav