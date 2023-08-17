"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import MergerList from "@/lib/components/MainComponents/MergerList";
const MergerListPage = () => {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="mergers/list">
        <MergerList />
      </AuthenticatedNavbar>
    </RootLayout>
  );
};
export default MergerListPage;
