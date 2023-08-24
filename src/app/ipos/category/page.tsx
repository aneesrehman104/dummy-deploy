"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IpoCategory from "@/lib/components/MainComponents/IpoCategory";
const IposHubPage =()=> {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="ipos/hub">
        <IpoCategory />
      </AuthenticatedLayout>
    </RootLayout>
  );
}

export default  IposHubPage