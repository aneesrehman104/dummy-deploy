"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IPOS from "@/lib/components/MainComponents/IPO/IPOS";
const IposCompanyPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="ipos/company">
        <IPOS />
      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default IposCompanyPage;
