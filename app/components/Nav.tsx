'use client';
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  // const isUserLoggedIn = false;
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState<any>(null);
  useEffect(() => {
    const setAuthProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
  
    setAuthProviders();
  }, []);
  

  return (
    <nav className="navbar bg-base-100 text-xl">
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
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/books">Books</Link></li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/users">
              Users
            </Link>

            <button type="button" className="btn btn-primary btn-sm" onClick={signOut}>
                Sign Out
              </button>
          </div>
        ) : (
          <>
          {providers && 
           Object.values(providers).map((provider: any) => (
            <button 
              type="button" 
              key={provider.name} 
              onClick={()=>signIn(provider.id)} 
              className="btn btn-primary btn-sm">
              Sign In
            </button>
          ))}
          </>
          )}
        </div>

        {/* Desktop Navigation */}
        {/* <div className="sm:hidden flex relative">
          {isUserLoggedIn ? (
            <div className="flex">
              </div>
          ):()}
        </div> */}
    </nav>
  );
}

export default Nav