"use client";
import { MemberstackProvider } from "@memberstack/react";
import { memberstack_config } from "@/lib/ts/constants";
import { MemberstackWrapper } from "@/lib/components/memberstack/memberstack.wrapper";

const RootLayout = ({
  unauthenticated,
  children,
}: {
  unauthenticated?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

export default RootLayout;
