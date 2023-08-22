"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import Spacs from "@/lib/components/MainComponents/Spacs";
const SpacsHubPage = () => {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/hub">
        <Spacs />
      </AuthenticatedNavbar>
    </RootLayout>
  );
};

export default SpacsHubPage;
