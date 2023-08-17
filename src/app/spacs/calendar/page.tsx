"use client";
import RootLayout from "../../layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import SpacsCalender from "@/lib/components/MainComponents/SpacsCalender";
const SpacsCalenderPage = () => {
  return (
    <RootLayout>
      <AuthenticatedNavbar selected_id="spacs/calendar">
        <SpacsCalender />
      </AuthenticatedNavbar>
    </RootLayout>
  );
};

export default SpacsCalenderPage;
