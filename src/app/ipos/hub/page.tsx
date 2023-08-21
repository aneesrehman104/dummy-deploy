"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IPOSHub from "@/lib/components/MainComponents/IPOSHub";
const IposHubPage =()=> {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/hub">
        <IPOSHub />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}

export default  IposHubPage