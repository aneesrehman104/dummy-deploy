"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import Spacs from "@/lib/components/MainComponents/SPAC/Spacs";
const HomePAge = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="spacs/hub">
        <Spacs />
      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default HomePAge;
