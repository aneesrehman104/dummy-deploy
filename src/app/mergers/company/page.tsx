"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import MergerCompany from "@/lib/components/MainComponents/MergerCompany";
const MergerCompanyPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="mergers/company">
        <MergerCompany />
      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default MergerCompanyPage;
