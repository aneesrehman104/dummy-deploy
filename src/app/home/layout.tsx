"use client";
import {
  useMember,
  useMemberstack,
  MemberstackProvider,
} from "@memberstack/react";
import Fallback from "../fallback/page";
import { MemberInformationContext } from "@/lib/components/context";
import { MemberstackWrapper } from "@/lib/components/memberstack/memberstack.wrapper";
import { Meta } from "@/lib/meta.component";
import { memberstack_config } from "@/lib/ts/constants";

const RootLayout = ({
  unauthenticated,
  children,
}: {
  unauthenticated?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Meta title="Home" description="" style={{ width: "100%" }}>
          {children}
    </Meta>
  );
};

export default RootLayout;
