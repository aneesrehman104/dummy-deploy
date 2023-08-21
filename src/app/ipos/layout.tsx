"use client";
import {
  useMember,
  useMemberstack,
  MemberstackProvider,
} from "@memberstack/react";
import Fallback from "../fallback/page";
import { MemberInformationContext } from "@/lib/components/context";
import Head from "next/head"; // Import the Head component
import { Metadata } from "next";
const metadata: Metadata = {
  title: "IPOS",
  description: "IPOS",
};
const RootLayout = ({
  unauthenticated,
  children,
}: {
  unauthenticated?: React.ReactNode;
  children: React.ReactNode;
}) => {
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
        {/* <title>IPOS</title>
        <meta name="description" content="IPOS" /> */}
        {children}
      </MemberstackWrapper>
    </MemberstackProvider>
  );
}

const MemberstackWrapper =({
  unauthenticated,
  children,
}: {
  unauthenticated?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const user = useMember();
  const memberstack = useMemberstack();

  return (
    <MemberInformationContext.Provider value={{ user, memberstack }}>
      {user ? children : unauthenticated}
    </MemberInformationContext.Provider>
  );
}

export default RootLayout;
