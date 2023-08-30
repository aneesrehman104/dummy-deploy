"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IPOSHub from "@/lib/components/MainComponents/IPOSHub";
import IPOS from "@/lib/components/MainComponents/IPOS";

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