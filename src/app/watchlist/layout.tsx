"use client";
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
