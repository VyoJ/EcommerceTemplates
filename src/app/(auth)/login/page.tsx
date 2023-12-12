"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { LoginErrorType } from "@/@types/globalTypes";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import GoogleIcon from "../../../../public/google.svg";

export default function LogInPage() {
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setError] = useState<LoginErrorType>();

  const { toast } = useToast();

  const submitForm = async () => {
    setLoading(true);
    axios
      .post("/api/auth/login", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        console.log("The response is ", response);
        if (response.status == 200) {
          console.log("The user signed in", response);
          if (response.data.email === "admin@admin.com") {
            signIn("credentials", {
              email: response.data.email,
              password: response.data.password,
              callbackUrl: "/admin",
              redirect: true,
            })
              .then((res) => {
                toast({
                  title: "Logged in successfully!",
                  description: "Redirecting to admin dashboard...",
                });
                console.log("success", res);
              })
              .catch((err) => {
                console.log("error", err);
              });
          } else {
            signIn("credentials", {
              email: response.data.email,
              password: response.data.password,
              callbackUrl: "/",
              redirect: true,
            })
              .then((res) => {
                toast({
                  title: "Logged in successfully!",
                  description: "Redirecting to home...",
                });
                console.log("success", res);
              })
              .catch((err) => {
                console.log("error", err);
              });
          }
        } else if (response.status == 400 || response.status == 401) {
          toast({
            variant: "destructive",
            title: "Uh-oh! Could not login",
            description: "Please check your email and password and  try again",
          });
          console.log("error response", response);
          setError(response?.errors);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast({
          variant: "destructive",
          title: "Uh-oh! Could not login",
          description: "Please try again",
        });
        console.log("Error is", err);
      });
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
            <form action="#" method="post">
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
                    disabled={loading}
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
                    disabled={loading}
                  />
                </div>
                <Button
                  className="mt-2"
                  disabled={loading}
                  onClick={submitForm}
                >
                  Sign In with Email{" "}
                  {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              type="button"
              disabled={loading}
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/",
                  redirect: true,
                })
              }
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Image src={GoogleIcon} className="mr-2" alt="Google" width={28} />
              )}
              {"  "}
              Google
            </Button>
          </div>
          <Link href="/signup" className="text-center">
            Don't have an account? Click to create one!
          </Link>
        </div>
      </div>
    </div>
  );
}
