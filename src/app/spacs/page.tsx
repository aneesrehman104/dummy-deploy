"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import Spacs from "@/lib/components/MainComponents/Spacs";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
export default function SpacsPage() {

  console.log("================user  authorized");
  const { user, memberstack } = useContext(MemberInformationContext);
  console.log("================user  authorized", user, memberstack);
 
  return (
    <RootLayout>
      <AuthenticatedNavbar
        selected_id="spacs/hub"
      >
        <Spacs />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
