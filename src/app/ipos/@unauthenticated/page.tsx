"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IOPS from "@/lib/components/MainComponents/IOPS";
const IposPage =()=> {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="ipos">
        <IOPS />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}

export default IposPage 