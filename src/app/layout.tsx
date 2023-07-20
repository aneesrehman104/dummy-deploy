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




// "use client";
// import "./globals.css";

// import {
//   useMember,
//   useMemberstack,
//   MemberstackProvider,
// } from "@memberstack/react";
// import { MemberInformationContext } from "@/lib/components/context";

// export default function RootLayout({
//   children,
//   unauthenticated,
// }: {
//   children: React.ReactNode;
//   unauthenticated?: React.ReactNode;
// }) {
//   return (
//     <MemberstackProvider
//       config={{
//         publicKey: "pk_sb_e1babdb2327aaadd2e43",
//         appId: undefined,
//         sessionDurationDays: undefined,
//         useCookies: undefined,
//         domain: undefined,
//       }}
//     >
//       <MemberstackWrapper
//         children={children}
//         unauthenticated={unauthenticated}
//       />
//     </MemberstackProvider>
//   );
// }

// function MemberstackWrapper({
//   children,
//   unauthenticated,
// }: {
//   children: React.ReactNode;
//   unauthenticated?: React.ReactNode;
// }) {
//   const user = useMember();
//   const memberstack = useMemberstack();

//   return (
//     <MemberInformationContext.Provider value={{ user, memberstack }}>
//       {user ? children : unauthenticated}
//     </MemberInformationContext.Provider>
//   );
// }

// import "./globals.css";
// import React from "react";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// // export const metadata = {
// //   title: "Listing Track",
// //   description: "Listing Track",
// // };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
