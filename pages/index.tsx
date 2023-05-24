import { AuthenticatedNavbar } from "@/components/CommonComponents";
import Home from "@/components/MainComponents/Home";
import '../src/app/globals.css'
export default function HomePAge() {
  return (
   <AuthenticatedNavbar selected_id="home">
     <Home/>
    </AuthenticatedNavbar>
  );
}
