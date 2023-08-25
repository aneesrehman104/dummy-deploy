"use client";
import { MemberstackProvider } from "@memberstack/react";
import { MemberstackWrapper } from "@/lib/components/memberstack/memberstack.wrapper";
import "./globals.css";
import { memberstack_config } from "@/lib/components/context";

const RootLayout = ({
  unauthenticated,
  children,
}: {
  unauthenticated?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <MemberstackProvider config={memberstack_config}>
      <MemberstackWrapper unauthenticated={unauthenticated}>
        {children}
      </MemberstackWrapper>
    </MemberstackProvider>
  );
};

export default RootLayout;
