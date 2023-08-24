"use client";
import { MemberstackProvider } from "@memberstack/react";
import { MemberstackWrapper } from "@/lib/components/memberstack/memberstack.wrapper";
import { Meta } from "@/lib/meta.component";
import './globals.css'

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
          {children}
        </MemberstackWrapper>
      </MemberstackProvider>
  );
};

export default RootLayout;
