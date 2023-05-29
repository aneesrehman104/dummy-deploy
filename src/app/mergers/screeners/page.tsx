"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
export default function IposPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers/screeners">
        <div style={{ minHeight: "10vh" }}>mergers screeners</div>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
