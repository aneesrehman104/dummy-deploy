"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
export default function IposPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers/hub">
        <div style={{ minHeight: "10vh" }}>mergers hub</div>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
