"use client";

import { AuthenticatedNavbar } from "@/components/CommonComponents";
import IOPS from "@/components/MainComponents/IOPS";
export default function IposPage() {
  return (
    <AuthenticatedNavbar selected_id="ipos">
      <IOPS />
    </AuthenticatedNavbar>
  );
}
