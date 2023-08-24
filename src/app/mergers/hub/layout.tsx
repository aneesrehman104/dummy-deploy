import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MERGER HUB",
  description: "MERGER HUB",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
