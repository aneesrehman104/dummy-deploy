"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import MergerCalendarPage from "@/lib/components/MainComponents/Merger/MergerCalendar";
const MergerCalendar = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="merger/calendar">
        <MergerCalendarPage />
      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default MergerCalendar;
