"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IPOSPipeline from "@/lib/components/MainComponents/IPO/IPOSPipeline";
const IpoCalendar = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="ipos/pipeline">
        <IPOSPipeline />
      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default IpoCalendar;
