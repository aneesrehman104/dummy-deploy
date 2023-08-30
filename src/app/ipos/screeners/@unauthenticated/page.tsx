"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IPOScreener from "@/lib/components/MainComponents/IPO/IPOScreener";
const IPOSScreenerPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="ipos/screeners">
        <IPOScreener />
      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default IPOSScreenerPage;
