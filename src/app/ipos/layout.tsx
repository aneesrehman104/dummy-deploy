"use client";
import { MemberstackProvider } from "@memberstack/react";
import { Metadata } from "next";
import { MemberstackWrapper } from "@/lib/components/memberstack/memberstack.wrapper";
import { memberstack_config } from "@/lib/ts/constants";

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
