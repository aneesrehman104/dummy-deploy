import { Meta } from "@/lib/meta.component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPACS SCREENERS",
  description: "SPACS SCREENERS",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
