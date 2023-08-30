"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import SpacsStats from "@/lib/components/MainComponents/SPAC/SpacsStats";
const SpacStatsPage =()=> {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="spacs/stats">
        <SpacsStats />
      </AuthenticatedLayout>
    </RootLayout>
  );
}
export default SpacStatsPage

