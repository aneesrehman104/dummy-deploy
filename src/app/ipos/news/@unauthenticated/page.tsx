"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IPONews from "@/lib/components/MainComponents/IPONews";
const IposNewsPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="ipos/list">
        <IPONews />
      </AuthenticatedLayout>
    </RootLayout>
  );
};
export default IposNewsPage;
