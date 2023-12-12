"use client";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import NextAuthSessionProvider from "./(auth)/provider/SessionProvider";
import { CartProvider } from "@/context";
import Provider from "@/components/provider";
import "./globals.css";
import { Inter, Plaster } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const plaster = Plaster({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthSessionProvider>
            <CartProvider>
              <Provider>
                <Navbar />
                {children}
                <Toaster />
              </Provider>
            </CartProvider>
          </NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
