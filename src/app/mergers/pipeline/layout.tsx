import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MERGER PIPELINE",
  description: "MERGER PIPELINE",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
