"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import MergerStats from "@/lib/components/MainComponents/MergerStats";
const MergerStatsPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="mergers/stats">
        <MergerStats />
      </AuthenticatedLayout>
    </RootLayout>
  );
};
export default MergerStatsPage;
