"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import Home from "@/lib/components/MainComponents/Home";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
export default function HomePAge() {
  console.log("================user  authorized");
  const { user, memberstack } = useContext(MemberInformationContext);
  console.log("================user  authorized", user, memberstack);
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="home">
        <Home />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
