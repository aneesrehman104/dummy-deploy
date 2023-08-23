import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPO PIPELINE",
  description: "IPO PIPELINE",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
