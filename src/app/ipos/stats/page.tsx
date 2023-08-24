"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IPOSStats from "@/lib/components/MainComponents/IPOSStats";
const IPOSStatsPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="ipos/stats">
        <IPOSStats />
      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default IPOSStatsPage;
