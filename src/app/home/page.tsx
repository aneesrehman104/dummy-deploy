"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import Home from "@/lib/components/MainComponents/Home";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
const HomePAge=() =>{
  const { user, memberstack } = useContext(MemberInformationContext);

  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="home">
        <Home />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
export default HomePAge 