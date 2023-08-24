import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPO HUB",
  description: "IPO HUB",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
