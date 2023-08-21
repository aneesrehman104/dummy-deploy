"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import WatchList from "@/lib/components/MainComponents/WatchList";
const WatchListPage =()=> {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="watchlist">
        <WatchList />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}

export default WatchListPage


