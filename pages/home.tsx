import { AuthenticatedNavbar } from "@/componets/CommonComponets";
import Home from "@/componets/MainComponets/Home";
export default function HomePAge() {
  return (
    <AuthenticatedNavbar selected_id="home">
     <Home/>
    </AuthenticatedNavbar>
  );
}
