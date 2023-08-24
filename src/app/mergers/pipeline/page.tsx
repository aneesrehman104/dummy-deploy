"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import MergerPipeline from "@/lib/components/MainComponents/MergerPipeline";
const MergerPipelinePage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="mergers/pipeline">
        <MergerPipeline />
      </AuthenticatedLayout>
    </RootLayout>
  );
};
export default MergerPipelinePage;
