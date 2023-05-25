"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
export default function HomePAge() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs">
        <div style={{ minHeight: "10vh" }}>spacs</div>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
