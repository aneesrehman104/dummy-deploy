"use client";
import RootLayout from "./layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import MergerCategory from "@/lib/components/MainComponents/MergerCategory";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import { Meta } from "@/lib/meta.component";
const MergerPage = () => {
  const { user, memberstack } = useContext(MemberInformationContext);
  return (
    <Meta title="Merger Hub" description="" style={{ width: "100%" }}>
      <RootLayout>
        <AuthenticatedLayout selected_id="mergers">
          <MergerCategory />
        </AuthenticatedLayout>
      </RootLayout>
    </Meta>
  );
};
export default MergerPage;