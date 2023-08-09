"use client";
import {
  useMember,
  useMemberstack,
  MemberstackProvider,
} from "@memberstack/react";
import { MemberInformationContext } from "@/lib/components/context";

export default function RootLayout({
  unauthenticated,
  children,
}: {
  unauthenticated?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <MemberstackProvider
      config={{
        publicKey: `${process.env.NEXT_PUBLIC_MEMBERSTACK_KEY}`,
        appId: undefined,
        sessionDurationDays: undefined,
        useCookies: undefined,
        domain: undefined,
      }}
    >
      <MemberstackWrapper unauthenticated={unauthenticated}>
        {children}
      </MemberstackWrapper>
    </MemberstackProvider>
  );
}

function MemberstackWrapper({
  unauthenticated,
  children,
}: {
  unauthenticated?: React.ReactNode;
  children: React.ReactNode;
}) {
  const user = useMember();
  const memberstack = useMemberstack();

  return (
    <MemberInformationContext.Provider value={{ user, memberstack }}>
      <html lang="en">
        <body style={{ width: "100%",margin:0,height: "90vh", }}>
          {user ? children : unauthenticated}
        </body>
      </html>
    </MemberInformationContext.Provider>
  );
}
