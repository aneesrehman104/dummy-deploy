"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import SpacsList from "@/lib/components/MainComponents/SpacsList";
export default function MergerHubPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/list">
        <SpacsList/>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}