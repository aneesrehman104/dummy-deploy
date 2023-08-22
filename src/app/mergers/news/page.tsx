"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import MergerNews from "@/lib/components/MainComponents/MergerNews";
const MergerNewsPage = () => {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers/news">
        <MergerNews />
      </AuthenticatedNavbar>
    </RootLayout>
  );
};
export default MergerNewsPage;
