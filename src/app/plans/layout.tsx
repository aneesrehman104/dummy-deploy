"use client";
import React from "react";
import { Inter } from "next/font/google";
import { MemberstackProvider } from "@memberstack/react";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Listing Track",
//   description: "Listing Track",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MemberstackProvider
          config={{
            publicKey: "pk_sb_e1babdb2327aaadd2e43",
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
