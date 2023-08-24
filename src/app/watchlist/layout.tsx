"use client";
import {
  useMember,
  useMemberstack,
  MemberstackProvider,
} from "@memberstack/react";
import Fallback from "../fallback/page";
import { MemberInformationContext } from "@/lib/components/context";
import { MemberstackWrapper } from "@/lib/components/memberstack/memberstack.wrapper";
import { memberstack_config } from "@/lib/ts/constants";
import { Meta } from "@/lib/meta.component";

const RootLayout = ({
  unauthenticated,
  children,
}: {
  unauthenticated?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Meta title="Watchlist" description="" style={{ width: "100%" }}>
      {children}
    </Meta>
  );
};

export default RootLayout;
