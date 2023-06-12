"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import SpacsPipeline from "@/lib/components/MainComponents/SpacsPipeline";
export default function SpacPipelinePage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/pipeline">
        <SpacsPipeline />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
