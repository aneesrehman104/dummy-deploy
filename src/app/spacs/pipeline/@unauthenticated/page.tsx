"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import SpacsPipeline from "@/lib/components/MainComponents/SpacsPipeline";
const SpacPipelinePage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="spacs/pipeline">
        <SpacsPipeline />
      </AuthenticatedLayout>
    </RootLayout>
  );
};
export default SpacPipelinePage;
