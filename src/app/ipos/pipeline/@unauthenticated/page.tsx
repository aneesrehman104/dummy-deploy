"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IPOSPipeline from "@/lib/components/MainComponents/IPOSPipeline";
const IPOSPipelinePage = () => {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/pipeline">
        <IPOSPipeline />
      </AuthenticatedNavbar>
    </RootLayout>
  );
};

export default IPOSPipelinePage;
