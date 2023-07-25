"use client";
import RootLayout from "./layout";
import { AuthenticatedNavbar } from "@/lib/components/CommonComponents";
import { useRouter } from "next/navigation";
import IOPS from "@/lib/components/MainComponents/IOPS";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import { useMemberstack } from "@memberstack/react";
import { useMemberstackModal } from "@memberstack/react";
export default function IposPage() {
  const { logout } = useMemberstack();
  const { openModal, hideModal } = useMemberstackModal();
  const router = useRouter();

  console.log("================user  authorized");
  const { user, memberstack } = useContext(MemberInformationContext);
  console.log("================user  authorized", user, memberstack);
  const handleLogout = () => {
    logout();
    // router.refresh();
    // window.location.reload();
  };
  return (
    <RootLayout>
      <AuthenticatedNavbar
        selected_id="ipos"
        handleLogout={handleLogout}
        openModal={openModal}
        hideModal={hideModal}
      >
        <IOPS />
      </AuthenticatedNavbar>
    </RootLayout>
  );
}
