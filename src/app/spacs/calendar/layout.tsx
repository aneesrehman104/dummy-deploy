import { Meta } from "@/lib/meta.component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPACS CALENDAR",
  description: "SPACS CALENDAR",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
