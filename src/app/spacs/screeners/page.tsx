"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import SpacsScreener from "@/lib/components/MainComponents/SpacsScreener";
const SpacScreenersPage = () => {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/screeners">
        <SpacsScreener />
      </AuthenticatedNavbar>
    </RootLayout>
  );
};
export default SpacScreenersPage;
