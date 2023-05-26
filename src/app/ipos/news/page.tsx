"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
export default function IposPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/news">
        <div style={{ minHeight: "10vh" }}>ipos news</div>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
