"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import MergerCompany from "@/lib/components/MainComponents/MergerCompany";
export default function MergerCompanyPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers/company">
        <MergerCompany />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}