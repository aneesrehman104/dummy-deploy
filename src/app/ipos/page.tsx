"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IOPS from "@/lib/components/MainComponents/IOPS";
import { useContext } from "react";
// import { MemberInformationContext } from "@/lib/components/context";

export default function IposPage() {
  console.log("================user  authorized");
  // const { user,memberstack } = useContext(MemberInformationContext);
  // console.log("================user  authorized",user,memberstack);

  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos">
        <IOPS />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
