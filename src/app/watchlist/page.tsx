"use client";
import RootLayout from "./layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import WatchList from "@/lib/components/MainComponents/WatchList";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
const WatchListPage =()=> {
  const { user, memberstack } = useContext(MemberInformationContext);

  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="watchlist">
        <WatchList />
      </AuthenticatedLayout>
    </RootLayout>
  );
}
export default WatchListPage

