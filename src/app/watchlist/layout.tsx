"use client";
import { Meta } from "@/lib/meta.component";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Meta title="Watchlist" description="" style={{ width: "100%" }}>
      {children}
    </Meta>
  );
};

export default RootLayout;
