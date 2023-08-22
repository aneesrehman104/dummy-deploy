"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import WatchList from "@/lib/components/MainComponents/WatchList";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
const WatchListPage =()=> {
  const { user, memberstack } = useContext(MemberInformationContext);

  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="watchlist">
        <WatchList />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
export default WatchListPage

