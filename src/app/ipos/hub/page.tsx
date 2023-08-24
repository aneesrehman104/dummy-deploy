"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IPOSHub from "@/lib/components/MainComponents/IPOSHub";
const IposHubPage =()=> {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="ipos/hub">
        <IPOSHub />
      </AuthenticatedLayout>
    </RootLayout>
  );
}

export default  IposHubPage