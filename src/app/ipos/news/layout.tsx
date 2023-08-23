import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPO News",
  description: "IPO News",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
