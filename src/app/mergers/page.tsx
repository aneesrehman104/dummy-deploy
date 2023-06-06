"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import MergerCategory from "@/lib/components/MainComponents/MergerCategory";
export default function IposPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers">
       <MergerCategory/>
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
