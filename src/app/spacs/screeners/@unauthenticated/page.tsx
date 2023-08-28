"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import SpacsScreener from "@/lib/components/MainComponents/SpacsScreener";
const SpacScreenersPage =()=> {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="spacs/screeners">
        <SpacsScreener />
      </AuthenticatedLayout>
    </RootLayout>
  );
}
export default SpacScreenersPage

