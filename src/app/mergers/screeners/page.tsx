"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import MergerScreener from "@/lib/components/MainComponents/MergerScreener";
const MergerScreenerPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="mergers/screeners">
        <MergerScreener />
      </AuthenticatedLayout>
    </RootLayout>
  );
};
export default MergerScreenerPage;
