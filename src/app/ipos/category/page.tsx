"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IpoCategory from "@/lib/components/MainComponents/IpoCategory";
const IposHubPage =()=> {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos/hub">
        <IpoCategory />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}

export default  IposHubPage