"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import MergerList from "@/lib/components/MainComponents/MergerList";
export default function CalenderPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="merger/list">
        <MergerList />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
