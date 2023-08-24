import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MERGER NEWS",
  description: "MERGER NEWS",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
