"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
export default function CalenderPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/calendar">
        <div style={{ minHeight: "10vh" }}>spacs calendar</div>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
