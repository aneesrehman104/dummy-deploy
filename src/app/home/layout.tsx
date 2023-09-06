// "use client";
// import React from "react";
// import { Inter } from "next/font/google";
// import { MemberstackProvider } from "@memberstack/react";
// import { Meta } from "@/lib/meta.component";
// import { memberstack_config } from "@/lib/ts/constants";
// const inter = Inter({ subsets: ["latin"] });

// const RootLayout = ({
//   children,
// }: {
//   children: React.ReactElement | React.ReactElement[];
// }) => {
//   return (
//     <Meta title="Marketing" description="" style={{ width: "100%" }}>
//         {children}
//     </Meta>
//   );
// };
// export default RootLayout;

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

export default RootLayout;
