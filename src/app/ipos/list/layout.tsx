import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPO List",
  description: "IPO List",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
