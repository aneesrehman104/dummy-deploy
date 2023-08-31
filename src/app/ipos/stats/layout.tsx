import { Meta } from "@/lib/meta.component";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Meta title="Ipo Stats" description="" style={{ width: "100%" }}>
      {children}
    </Meta>
  );
};
export default RootLayout;
