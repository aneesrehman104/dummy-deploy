"use client";
import { MemberstackProvider } from "@memberstack/react";
import { MemberstackWrapper } from "@/lib/components/memberstack/memberstack.wrapper";
import { memberstack_config } from "@/lib/components/context";
import "./globals.css";
import 'react-slideshow-image/dist/styles.css'
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
