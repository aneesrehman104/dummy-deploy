"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import MergerCategory from "@/lib/components/MainComponents/MergerCategory";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
export default function MergerPage() {

  const { user, memberstack } = useContext(MemberInformationContext);
  return (
    <RootLayout>
      <AuthenticatedNavbar
        selected_id="mergers"
      >
        <MergerCategory />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
