"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import WatchList from "@/lib/components/MainComponents/WatchList";
const WatchListPage =()=> {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="watchlist">
        <WatchList />
      </AuthenticatedLayout>
    </RootLayout>
  );
}

export default WatchListPage


