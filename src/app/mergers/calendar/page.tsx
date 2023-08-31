"use client";
import RootLayout from "../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
const IpoCalendar = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="merger/calendar">

      </AuthenticatedLayout>
    </RootLayout>
  );
};

export default IpoCalendar;
