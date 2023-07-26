"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import SpacsStats from "@/lib/components/MainComponents/SpacsStats";
export default function SpacStatsPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/stats">
        <SpacsStats />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
