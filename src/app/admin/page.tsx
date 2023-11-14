"use client";

import AdminSidebar from "@/components/adminSidebar";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

export default function Admin() {
  const { data: session, status } = useSession();
  console.log(session?.user?.email);

  if (status === "loading") {
    return (
      <div className="h-[calc(100vh-75px)] w-full flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (session?.user?.email === "admin@admin.com") {
    return (
      <div className="h-screen w-full flex flex-col lg:flex-row">
        <AdminSidebar />
        <main className="flex-1 p-5">
          <h2 className="text-xl mb-5">Welcome back, Admin!</h2>
          <p>Here is the overview of your account:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div className="p-5 border rounded-md shadow">
              <h3 className="text-lg mb-2">Total Users</h3>
              <p>500</p>
            </div>
            <div className="p-5 border rounded-md shadow">
              <h3 className="text-lg mb-2">Total Products</h3>
              <p>50</p>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    redirect("/404");
  }
}
