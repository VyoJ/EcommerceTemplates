"use client";

import { Button } from "@/components/ui/button";
import { HomeIcon, FolderOpen, Users2, Settings } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { ModeToggle } from "./themeToggle";

export default function AdminSidebar() {
  const { data: session } = useSession();

  return (
    <section className="h-screen w-64 flex flex-col justify-between bg-gray-800 text-white">
      <div>
        <div className="p-6">Logo</div>
        <nav>
          <ul className="space-y-2">
            <li className="px-6 py-2 hover:bg-gray-700 flex items-center">
              <HomeIcon size={20} />
              <Link href="/admin" className="ml-2">
                Dashboard
              </Link>
            </li>
            <li className="px-6 py-2 hover:bg-gray-700 flex items-center">
              <Users2 size={20} />
              <Link href="/admin/#" className="ml-2">
                Users
              </Link>
            </li>
            <li className="px-6 py-2 hover:bg-gray-700 flex items-center">
              <FolderOpen />
              <Link href="/admin/products" className="ml-2">
                Products
              </Link>
            </li>
            <li className="px-6 py-2 hover:bg-gray-700 flex items-center">
              <Settings />
              <Link href="/" className="ml-2">
                Settings
              </Link>
            </li>
            <li className="px-4 py-2">
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
      <Button className="m-6" variant="destructive" onClick={() => signOut()}>
        Logout
      </Button>
    </section>
  );
}
