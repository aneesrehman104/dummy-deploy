"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import SpacsNews from "@/lib/components/MainComponents/SpacsNews";
export default function SpacsNewsPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/news">
        <SpacsNews />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
