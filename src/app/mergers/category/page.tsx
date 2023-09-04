"use client";
import RootLayout from "./layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import MergerHub from "@/lib/components/MainComponents/Merger/MergerHub";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import { Meta } from "@/lib/meta.component";
const MergerPage = () => {
  const { user, memberstack } = useContext(MemberInformationContext);
  return (
    <Meta title="Merger Category" description="" style={{ width: "100%" }}>
      <RootLayout>
        <AuthenticatedLayout selected_id="mergers">
          <div>NEED TO BUILD THIS</div>
        </AuthenticatedLayout>
      </RootLayout>
    </Meta>
  );
};
export default MergerPage;
