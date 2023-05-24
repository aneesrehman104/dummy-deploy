import { AuthenticatedNavbar } from "@/componets/CommonComponets";
import IOPS from "@/componets/MainComponets/IOPS";
export default function IposPage() {
  return (
    <AuthenticatedNavbar selected_id="ipos">
      <IOPS />
    </AuthenticatedNavbar>
  );
}
