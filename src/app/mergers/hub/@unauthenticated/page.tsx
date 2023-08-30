"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import MergerHub from "@/lib/components/MainComponents/Merger/MergerHub";
const MergerHubPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="mergers/hub">
        <MergerHub />
      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default MergerHubPage;
