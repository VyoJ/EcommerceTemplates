"use client";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { registerErrorType } from "@/@types/globalTypes";
import { useToast } from "@/components/ui/use-toast";

export default function SignUpPage() {
  const router = useRouter();
  const { toast } = useToast();

  const [loading, setLoading] = useState<boolean>(false);
  const [userState, setUserState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setError] = useState<registerErrorType>({});

  const submitForm = async () => {
    setLoading(true);
    console.log("The payload is", userState);
    axios
      .post("/api/auth/signup", userState)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        console.log("The response is", response);
        if (response.status == 200) {
          toast({
            title: "Account created successfully!",
            description: "Redirecting to Login...",
          });
          console.log(`Account Created yay!`);
          router.push(`/login`);
        } else if (response?.status == 400) {
          toast({
            title: "Account could not be created!",
            description: "Please try again later",
          });
          console.log(response?.errors);
        } else {
          console.log({});
          toast({
            title: "Account could not be created!",
            description: "Please try again later",
          });
        }
      })
      .catch((err) => console.log("The error is", err));
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
              <form method="post" action="#">
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
                        setUserState({ ...userState, name: e.target.value })
                      }
                      disabled={loading}
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
                        setUserState({ ...userState, email: e.target.value })
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
                        setUserState({ ...userState, password: e.target.value })
                      }
                      disabled={loading}
                    />
                  </div>
                  <Button
                    className={`mt-2 ${loading ? "bg-gray-600" : ""}`}
                    disabled={loading}
                    onClick={submitForm}
                  >
                    Create Account{" "}
                    {loading && (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    )}
                  </Button>
                </div>
              </form>
            </div>
            <Link href="/login" className="text-center">
              Already have an account? Click to login!
            </Link>
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
