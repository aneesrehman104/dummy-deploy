"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
export default function IposPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/pipeline">
        <div style={{ minHeight: "10vh" }}>spacs pipeline</div>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
