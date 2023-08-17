"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IPOScreener from "@/lib/components/MainComponents/IPOScreener";
const IPOSScreenerPage = () => {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/screeners">
        <IPOScreener />
      </AuthenticatedNavbar>
    </RootLayout>
  );
};

export default IPOSScreenerPage;
