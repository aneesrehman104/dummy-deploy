"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IPOSList from "@/lib/components/MainComponents/IPOSList";
export default function IposListPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/list">
        <IPOSList />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}