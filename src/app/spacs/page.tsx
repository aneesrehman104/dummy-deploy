"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import Spacs from "@/lib/components/MainComponents/Spacs";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import { Meta } from "@/lib/meta.component";
const SpacsPage = () => {
  const { user, memberstack } = useContext(MemberInformationContext);

  return (
    <Meta title="Spac Hub" description="" style={{ width: "100%" }}>
      <RootLayout>
        <AuthenticatedNavbar selected_id="spacs/hub">
          <Spacs />
        </AuthenticatedNavbar>
      </RootLayout>
    </Meta>
  );
};

export default SpacsPage;
