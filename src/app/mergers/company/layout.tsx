import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description: "Company",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
