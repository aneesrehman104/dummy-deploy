"use client";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import Spacs from "@/lib/components/MainComponents/SPAC/Spacs";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import { Meta } from "@/lib/meta.component";
const SpacsPage = () => {
  const { user, memberstack } = useContext(MemberInformationContext);

  return (
    <Meta title="Spac Hub" description="" style={{ width: "100%" }}>
        <AuthenticatedLayout selected_id="spacs/hub">
          <Spacs />
        </AuthenticatedLayout>
    </Meta>
  );
};

export default SpacsPage;
