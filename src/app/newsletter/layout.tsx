"use client";
import React from "react";
import { MemberstackProvider } from "@memberstack/react";
import { Meta } from "@/lib/meta.component";
import { memberstack_config } from "@/lib/ts/constants";

const RootLayout = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <Meta title="Newsletter" description="" style={{ width: "100%" }}>
      <MemberstackProvider config={memberstack_config}>
        {children}
      </MemberstackProvider>
    </Meta>
  );
};
export default RootLayout;
