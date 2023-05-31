"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import Spacs from "@/lib/components/MainComponents/Spacs";
export default function SpacsHub() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/hub">
        <Spacs />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}