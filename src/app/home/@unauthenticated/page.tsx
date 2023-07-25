"use client";
import RootLayout from "../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import Home from "@/lib/components/MainComponents/Home";
export default function HomePAge() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="home">
        <Home />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
