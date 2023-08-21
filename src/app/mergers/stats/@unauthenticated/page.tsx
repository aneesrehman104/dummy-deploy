"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import MergerStats from "@/lib/components/MainComponents/MergerStats";
const MergerStatsPage = () => {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers/stats">
        <MergerStats />
      </AuthenticatedNavbar>
    </RootLayout>
  );
};
export default MergerStatsPage;
