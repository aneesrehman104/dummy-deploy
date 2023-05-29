"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
export default function IposPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers/pipeline">
        <div style={{ minHeight: "10vh" }}>mergers pipeline</div>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
