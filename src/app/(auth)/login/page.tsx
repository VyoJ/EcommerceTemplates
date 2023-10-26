"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function LogInPage() {
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("The auth state is", authState);
  };

  return (
    <div className="container relative h-[calc(100vh-75px)] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        {/* Image Here */}
      </div>
      <div className="pt-16 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password
            </p>
          </div>
          <div className="grid gap-6">
            <form
            action="#"
            // method="post"
            // action="/api/auth/callback/credentials"
            >
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label className="py-2" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) =>
                      setAuthState({ ...authState, email: e.target.value })
                    }
                    // disabled={isLoading}
                  />
                  <Label className="py-2" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="****"
                    required
                    onChange={(e) =>
                      setAuthState({ ...authState, password: e.target.value })
                    }
                    // disabled={isLoading}
                  />
                </div>
                <Button
                  className="mt-2"
                  // disabled={isLoading}
                  onClick={submitForm}
                >
                  {/* {isLoading && (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  )} */}
                  Sign In with Email
                </Button>
              </div>
            </form>
          </div>
          <Link href="/signup" className="text-center">
            Don't have an account? Click to create one!
          </Link>
        </div>
      </div>
    </div>
  );
}
