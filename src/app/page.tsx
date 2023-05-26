"use client";

import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import Home from "@/lib/components/MainComponents/Home";

export default function HomePAge() {
  return (
    <AuthenticatedNavbar selected_id="home">
     <Home/>
    </AuthenticatedNavbar>
  );
}
