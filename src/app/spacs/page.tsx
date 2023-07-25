"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import { useRouter } from "next/navigation";
import Spacs from "@/lib/components/MainComponents/Spacs";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import { useMemberstack } from "@memberstack/react";
import { useMemberstackModal } from "@memberstack/react";
export default function SpacsPage() {
  const { logout } = useMemberstack();
  const { openModal, hideModal } = useMemberstackModal();
  const router = useRouter();

  console.log("================user  authorized");
  const { user, memberstack } = useContext(MemberInformationContext);
  console.log("================user  authorized", user, memberstack);
  const handleLogout = () => {
    logout();
    router.refresh()
  };
  return (
    <RootLayout>
      <AuthenticatedNavbar
        selected_id="spacs/hub"
        handleLogout={handleLogout}
        openModal={openModal}
        hideModal={hideModal}
      >
        <Spacs />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
