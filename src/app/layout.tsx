"use client";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
// import { ctx } from "@/context";
import Provider from "@/components/provider";
import "./globals.css";
import { Inter } from "next/font/google";

// import { cartState } from "@/@types/globalTypes";
// import { useEffect, useReducer, useState } from "react";
// import { initialState, reducerFn } from "@/reducer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ctx.>
            <Provider>
              <Navbar />
              {children}
            </Provider>
          </ctx>
        </ThemeProvider>
      </body>
    </html>
  );
}
