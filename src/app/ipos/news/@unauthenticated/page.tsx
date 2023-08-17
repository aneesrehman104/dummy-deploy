"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IPONews from "@/lib/components/MainComponents/IPONews";
const IposNewsPage = () => {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/list">
        <IPONews />
      </AuthenticatedNavbar>
    </RootLayout>
  );
};
export default IposNewsPage;
