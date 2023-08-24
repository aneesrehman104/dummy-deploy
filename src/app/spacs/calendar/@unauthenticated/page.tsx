"use client";
import RootLayout from "../../layout";
import { AuthenticatedLayout } from "@/lib/components/CommonComponents";
import SpacsCalender from "@/lib/components/MainComponents/SpacsCalender";
const SpacsCalenderPage = () => {
  return (
    <RootLayout>
      <AuthenticatedLayout selected_id="spacs/calendar">
        <SpacsCalender />
      </AuthenticatedLayout>
    </RootLayout>
  );
};
export default SpacsCalenderPage;
