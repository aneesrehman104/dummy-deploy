"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import IPOSCalendar from "@/lib/components/MainComponents/IPO/IPOSCalendar";
const IpoCalendarPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="ipos/calendar">
        <IPOSCalendar />
      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default IpoCalendarPage;
