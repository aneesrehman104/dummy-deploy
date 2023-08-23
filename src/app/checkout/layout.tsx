"use client";
import React from "react";
import { Inter } from "next/font/google";
import { MemberstackProvider } from "@memberstack/react";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Listing Track",
//   description: "Listing Track",
// };

const  RootLayout=({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
})=> {
  return (
     <html lang="en">
      <title>CHECKOUT</title>
        <meta name="description" content="CHECKOUT" />
      <body className={inter.className} style={{ width: "100%" }}>
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