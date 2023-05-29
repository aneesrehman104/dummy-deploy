"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
export default function IposPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/news">
        <div style={{ minHeight: "10vh" }}>spacs news</div>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
