"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import MergerNews from "@/lib/components/MainComponents/MergerNews";
const MergerNewsPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="mergers/news">
        <MergerNews />
      </AuthenticatedLayout>
    </RootLayout>
  );
};
export default MergerNewsPage;
