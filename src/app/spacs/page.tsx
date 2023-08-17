"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import Spacs from "@/lib/components/MainComponents/Spacs";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
const SpacsPage = () => {
  const { user, memberstack } = useContext(MemberInformationContext);

  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/hub">
        <Spacs />
      </AuthenticatedNavbar>
    </RootLayout>
  );
};

export default SpacsPage;
