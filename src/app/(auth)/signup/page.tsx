"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function SignUpPage() {
  const [authState, setAuthState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("The auth state is", authState);
  };

  return (
    <>
      <div className="container relative h-[calc(100vh-75px)] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          {/* Image Here */}
        </div>
        <div className="pt-16 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <div className="grid gap-6">
              <form
              // method="post"
              // action="/api/auth/callback/credentials"
              >
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="py-2" htmlFor="name">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Wick"
                      required
                      onChange={(e) =>
                        setAuthState({ ...authState, name: e.target.value })
                      }
                      // disabled={isLoading}
                    />
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
                    Sign Up with Email
                  </Button>
                </div>
              </form>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
