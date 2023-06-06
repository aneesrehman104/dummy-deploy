"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import MergerScreener from "@/lib/components/MainComponents/MergerScreener";
export default function MergerScreenerPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers/screeners">
        <MergerScreener />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}

