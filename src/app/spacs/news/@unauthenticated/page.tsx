"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import SpacsNews from "@/lib/components/MainComponents/SPAC/SpacsNews";
const SpacsNewsPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="spacs/news">
        <SpacsNews />
      </AuthenticatedLayout>
    </RootLayout>
  );
};
export default SpacsNewsPage;
