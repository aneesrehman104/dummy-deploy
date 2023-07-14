"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import WatchList from "@/lib/components/MainComponents/WatchList";
export default function WatchListPage() {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="watchlist">
        <WatchList />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}

