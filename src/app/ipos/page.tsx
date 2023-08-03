"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import { useRouter } from "next/navigation";
import IOPS from "@/lib/components/MainComponents/IOPS";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
export default function IposPage() {
  const { user, memberstack } = useContext(MemberInformationContext);
  return (
    <RootLayout>
      <title>IPOS</title>
        <meta name="description" content="IPOS" />
      <AuthenticatedNavbar selected_id="ipos">
        <IOPS />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
