"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import Home from "@/lib/components/MainComponents/Home";
const  HomePAge =()=> {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="home">
        <Home />
      </AuthenticatedLayout>
    </RootLayout>
  );
}

export default HomePAge 