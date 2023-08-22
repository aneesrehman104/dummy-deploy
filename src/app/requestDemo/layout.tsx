"use client";
import React from "react";
import { Inter } from "next/font/google";
import { MemberstackProvider } from "@memberstack/react";
const inter = Inter({ subsets: ["latin"] });

const  RootLayout=({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
})=> {
  return (
    <html lang="en">
      <title>REQUEST DEMO</title>
      <meta name="description" content="REQUEST DEMO" />
      <body className={inter.className}         style={{ width: "100%", height: "90vh", margin: 0 }}
>
        <MemberstackProvider
          config={{
            publicKey: `${process.env.NEXT_PUBLIC_MEMBERSTACK_KEY}`,
            appId: undefined,
            sessionDurationDays: undefined,
            useCookies: undefined,
            domain: undefined,
          }}
        >
          {children}
        </MemberstackProvider>
      </body>
    </html>
  );
}
export default  RootLayout
