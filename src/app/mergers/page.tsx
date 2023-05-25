"use client";

import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
export default function IposPage() {
  return (
    <AuthenticatedNavbar selected_id="mergers">
      <div style={{ minHeight: "10vh" }}>mergers</div>
    </AuthenticatedNavbar>
  );
}
