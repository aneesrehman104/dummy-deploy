"use client";
import React from "react";
import { MemberstackProvider } from "@memberstack/react";
import { memberstack_config } from "@/lib/ts/constants";
import { Meta } from "@/lib/meta.component";

const RootLayout = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <Meta title="Plans" description="" style={{ width: "100%" }}>
        {children}
    </Meta>
  );
};
export default RootLayout;
