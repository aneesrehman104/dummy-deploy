import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPACS HUB",
  description: "SPACS HUB",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default RootLayout;
