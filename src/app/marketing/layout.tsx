"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Meta } from "@/lib/meta.component";
const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <Meta title="Marketing" description="" style={{ width: "100%" }}>
        {children}
    </Meta>
  );
};
export default RootLayout;
