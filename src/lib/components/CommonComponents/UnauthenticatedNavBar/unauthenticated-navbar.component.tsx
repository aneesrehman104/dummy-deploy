import React, { useState } from "react";
import "./unauthenticated-navbar.css";
import { useMemberstackModal, useMemberstack } from "@memberstack/react";
import Navbar from "../Navbar/navbar.component";
import SearchDialogBox from "../SearchDialogBox/dialogbox.component";

interface PROPS {}
const UnauthenticatedNavBar: React.FC<PROPS> = () => {
  const { logout } = useMemberstack();

  const { openModal, hideModal } = useMemberstackModal();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setIsSearchModalOpen={setIsSearchModalOpen}
        logout={logout}
        openModal={openModal}
        hideModal={hideModal}
      />
      <SearchDialogBox
        isSearchModalOpen={isSearchModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};
export default UnauthenticatedNavBar;
