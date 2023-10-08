import Link from "next/link";
import { UserAuthForm } from "@/components/userAuthForm";

export default function LogInPage() {
  return (
    <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
          <UserAuthForm />
          <Link href="/signup" className="text-center">
            Don't have an account? Click to create one!
          </Link>
        </div>
      </div>
    </div>
  );
}
