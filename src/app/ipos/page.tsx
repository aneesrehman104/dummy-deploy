"use client";
import RootLayout from "./layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IPOS from "@/lib/components/MainComponents/IPO/IPOS";
import IPOSHub from "@/lib/components/MainComponents/IPO/IPOSHub";
import { Meta } from "@/lib/meta.component";

const IposPage = () => {
  return (
    <Meta title="Ipos" description="" style={{ width: "100%" }}>
      <RootLayout>
        <AuthenticatedLayout selected_id="ipos">
          <IPOSHub />
        </AuthenticatedLayout>
      </RootLayout>
    </Meta>
  );
};

export default IposPage;
