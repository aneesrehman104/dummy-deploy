"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IPOSPipeline from "@/lib/components/MainComponents/IPOSPipeline";
export default function IPOSPipelinePage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/pipeline">
        <IPOSPipeline/>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
