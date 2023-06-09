"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IOPSList from "@/lib/components/MainComponents/IOPSList";
export default function MergerHubPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/list">
        <IOPSList/>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}