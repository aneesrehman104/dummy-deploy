"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IPOSHub from "@/lib/components/MainComponents/IPO/IPOSHub";
import IPOS from "@/lib/components/MainComponents/IPO/IPOS";

const IposHubPage =()=> {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="ipos/company">
        <IPOS />
      </AuthenticatedLayout>
    </RootLayout>
  );
}

export default  IposHubPage