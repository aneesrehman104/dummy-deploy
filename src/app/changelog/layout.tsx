"use client";
import React from "react";
import { MemberstackProvider } from "@memberstack/react";
import { Meta } from "@/lib/meta.component";
import { memberstack_config } from "@/lib/components/context";

const RootLayout = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <Meta title="Change Log" description="" style={{ width: "100%" }}>
        {children}
    </Meta>
  );
};
export default RootLayout;