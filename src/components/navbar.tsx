"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { ModeToggle } from "./themeToggle";
import { Button } from "./ui/button";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [state, setState] = React.useState(false);
  const pathname = usePathname();

  const menus = [
    { title: "Home", path: "/" },
    { title: "About", path: "/" },
    { title: "Products", path: "/products" },
    { title: "Contact Us", path: "/" },
  ];

  if (pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <nav className="w-full md:h-[75px] border-b shadow">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-primary">Ecommerce</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <form className="flex items-center  space-x-2 border rounded-md p-2">
              <Search className="h-5 w-5 justify-self-center text-gray-500" />
              <input
                className="w-full bg-inherit outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form>
            {menus.map((item, idx) => (
              <li key={idx} className="hover:text-blue-500">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/login">
                <Button>Log In</Button>
              </Link>
            </li>
            <ModeToggle/>
          </ul>
        </div>
      </div>
    </nav>
  );
}