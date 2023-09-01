"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import SpacCalendar from "@/lib/components/MainComponents/SPAC/SpacsCalendar";
const SpacCalendarPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="spacs/calendar">
        <SpacCalendar />
      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default SpacCalendarPage;
