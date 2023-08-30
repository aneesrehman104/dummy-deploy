"use client";
import RootLayout from "./layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import { useRouter } from "next/navigation";
import IOPS from "@/lib/components/MainComponents/IPO/IPOS";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import { Meta } from "@/lib/meta.component";
const IposPage = () => {
  const { user, memberstack } = useContext(MemberInformationContext);
  return (
    <Meta title="Ipos" description="" style={{ width: "100%" }}>
      <RootLayout>
        <AuthenticatedLayout selected_id="ipos">
          <IOPS />
        </AuthenticatedLayout>
      </RootLayout>
    </Meta>
  );
};

export default IposPage;
