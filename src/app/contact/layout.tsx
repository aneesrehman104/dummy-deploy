"use client";
import React from "react";
import { Meta } from "@/lib/meta.component";

const RootLayout = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <Meta
      title="Contact Us"
      description=""
      style={{ width: "100%", height: "90vh", margin: "0" }}
    >
        {children}
    </Meta>
  );
};
export default RootLayout;
