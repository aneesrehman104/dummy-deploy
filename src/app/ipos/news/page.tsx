"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IPONews from "@/lib/components/MainComponents/IPONews";
export default function IposPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/news">
        <IPONews/>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
