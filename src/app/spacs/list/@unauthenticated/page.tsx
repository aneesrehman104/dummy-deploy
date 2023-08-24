"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import SpacsList from "@/lib/components/MainComponents/SpacsList";
const SpacsListPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="spacs/list">
        <SpacsList />
      </AuthenticatedLayout>
    </RootLayout>
  );
};
export default SpacsListPage;
