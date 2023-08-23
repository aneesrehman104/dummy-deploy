import { Meta } from "@/lib/meta.component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spac News",
  description: "Spac News",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
