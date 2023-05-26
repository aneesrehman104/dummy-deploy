"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
export default function IposPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/hub">
        <div style={{ minHeight: "10vh" }}>ipos hub</div>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
