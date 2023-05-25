"use client";

import { AuthenticatedNavbar } from "@/components/CommonComponents";
import Home from "@/components/MainComponents/Home";
export default function HomePAge() {
  return (
    <AuthenticatedNavbar selected_id="home">
     <Home/>
    </AuthenticatedNavbar>
  );
}
