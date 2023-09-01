"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IOPS from "@/lib/components/MainComponents/IPO/IPOS";
const IposPage =()=> {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="ipos">
        <IOPS />
      </AuthenticatedLayout>
    </RootLayout>
  );
}

export default IposPage 