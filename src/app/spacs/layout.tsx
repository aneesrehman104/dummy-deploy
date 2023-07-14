"use client";
import {
  useMember,
  useMemberstack,
  MemberstackProvider,
} from "@memberstack/react";
import Fallback from "../fallback/page";
import { MemberInformationContext } from "@/lib/components/context";

export default function RootLayout({
  children,
  unauthenticated,
}: {
  children: React.ReactNode;
  unauthenticated?: React.ReactNode;
}) {
  return (
    <MemberstackProvider
      config={{
        publicKey: "pk_sb_e1babdb2327aaadd2e43",
        appId: undefined,
        sessionDurationDays: undefined,
        useCookies: undefined,
        domain: undefined,
      }}
    >
      <MemberstackWrapper
        children={children}
        unauthenticated={unauthenticated}
      />
    </MemberstackProvider>
  );
}

function MemberstackWrapper({
  children,
  unauthenticated,
}: {
  children: React.ReactNode;
  unauthenticated?: React.ReactNode;
}) {
  const user = useMember();
  const memberstack = useMemberstack();

  return (
    <MemberInformationContext.Provider value={{ user, memberstack }}>
      {user ? children : unauthenticated}
    </MemberInformationContext.Provider>
  );
}
