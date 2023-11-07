"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { LoginErrorType } from "@/@types/globalTypes";

export default function LogInPage() {
  const params = useSearchParams();
  const router = useRouter();

  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setError] = useState<LoginErrorType>();



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
          signIn("next-auth-credentials", {
            email: authState.email,
            password: authState.password,
            callbackUrl: "/",
            redirect: true,
          }).then((res)=>{
            console.log("success",res)
          }).catch((err)=>{
            console.log("error",err)
          })

        } else if (response.status == 400 || response.status == 401) {
          console.log("error response", response);
          setError(response?.errors);
        }
      })
      .catch((err) => {
        setLoading(false);
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
          {params.get("message") ? (
            <p className="font-bold bg-green-300 rounded-md p-4">
              {params.get("message")}
            </p>
          ) : (
            <p></p>
          )}
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
          </div>
          <Link href="/signup" className="text-center">
            Don't have an account? Click to create one!
          </Link>
        </div>
      </div>
    </div>
  );
}
