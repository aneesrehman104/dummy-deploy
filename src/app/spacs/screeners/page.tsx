"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
export default function IposPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/screeners">
        <div style={{ minHeight: "10vh" }}>spacs screeners</div>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
