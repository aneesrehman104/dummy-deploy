"use client";
import RootLayout from "./layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import Home from "@/lib/components/MainComponents/Home";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import { Meta } from "@/lib/meta.component";
const HomePAge = () => {
  const { user, memberstack } = useContext(MemberInformationContext);
  return (
    <Meta title="Main" description="" style={{ width: "100%" }}>
      <RootLayout>
        <AuthenticatedLayout selected_id="overview">
          <Home />
        </AuthenticatedLayout>
      </RootLayout>
    </Meta>
  );
};
export default HomePAge;
