"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import MergerStats from "@/lib/components/MainComponents/MergerStats";
export default function MergerStatsPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers/stats">
        <MergerStats />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
