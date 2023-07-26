"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import MergerPipeline from "@/lib/components/MainComponents/MergerPipeline";
export default function MergerPipelinePage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers/pipeline">
        <MergerPipeline />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
