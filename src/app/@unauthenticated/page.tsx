
"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import Home from "@/lib/components/MainComponents/Home";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";

 const HomePAge =()=> {
  const { user,memberstack } = useContext(MemberInformationContext);

  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="overview">
        <Home />
      </AuthenticatedLayout>
    </RootLayout>
  );
}

export default  HomePAge