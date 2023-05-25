"use client";

import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import IOPS from "@/lib/components/MainComponents/IOPS";
export default function IposPage() {
  return (
    <AuthenticatedNavbar selected_id="ipos">
      <IOPS />
    </AuthenticatedNavbar>
  );
}
