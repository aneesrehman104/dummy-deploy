"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IPOSStats from "@/lib/components/MainComponents/IPOSStats";
export default function IposPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/stats">
        <IPOSStats />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
