"use client";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import NextAuthSessionProvider from "./(auth)/provider/SessionProvider";
import { CartProvider } from "@/context";
import Provider from "@/components/provider";
import "./globals.css";
import { Inter } from "next/font/google";

// import { AppProvider } from "@/context";
// import { cartState } from "@/@types/globalTypes";
// import { useEffect, useReducer, useState } from "react";
// import { initialState, reducerFn } from "@/reducer";



const inter = Inter({ subsets: ["latin"] });

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
              </Provider>
            </CartProvider>
          </NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
