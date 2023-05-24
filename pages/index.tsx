import { AuthenticatedNavbar } from "@/componets/CommonComponets";
import Home from "@/componets/MainComponets/Home";
import '../src/app/globals.css'
export default function HomePAge() {
  return (
   <AuthenticatedNavbar selected_id="home">
     <Home/>
    </AuthenticatedNavbar>
  );
}
