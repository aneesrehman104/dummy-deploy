"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import MergerHub from "@/lib/components/MainComponents/MergerHub";
export default function MergerHubPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers/hub">
        <MergerHub />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}