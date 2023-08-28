"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IPOSList from "@/lib/components/MainComponents/IPOSList";
export default function IposListPage() {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="ipos/list">
        <IPOSList />
      </AuthenticatedLayout>
    </RootLayout>
  );
}