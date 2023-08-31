"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import MergerList from "@/lib/components/MainComponents/Merger/MergerList";
const MergerListPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="mergers/list">
        <MergerList />
      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default MergerListPage;
