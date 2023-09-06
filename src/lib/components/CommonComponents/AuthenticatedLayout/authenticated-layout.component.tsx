import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Footer from "../Footer";
import {
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./authenticated-layout.css";
import { Props, SidebarItem, SidebarState } from "@/lib/ts/interface";
import { findItemPath, toggleItem } from "./functions";
import {
  DrawerList,
  MediumScreenDrawer,
  ScreenDrawer,
} from "../Sidebar/sidebar.component";
import SearchDialogBox from "../SearchDialogBox/dialogbox.component";
import Navbar from "../Navbar/navbar.component";
import {
  useMember,
  useMemberstack,
  useMemberstackModal,
} from "@memberstack/react";
import CommonfiButton from "../CommonfiButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const AuthenticatedLayout = (props: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [currentBreadcrumb, setCurrentBreadcrumb] = useState<string>("");
  const [isOpen, setIsOpen] = useState<SidebarState>({});
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const { logout } = useMemberstack();
  const { openModal, hideModal } = useMemberstackModal();
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down(900));

  const handleCloseModal = () => {
    setIsSearchModalOpen(false);
  };

  const handleListItemButtonClick = (item: SidebarItem) => {
    console.log("====================click");
    if (item.items) {
      if (pathname === item.pathname) {
        toggleItem(item.id, setIsOpen);
      } else {
        router.push(item.pathname);
      }
    } else {
      setCurrentBreadcrumb(item.breadcrumb);
      router.push(item.pathname);
    }
    setIsSidebarOpen(false);
  };

  const handleListSubItemButtonClick = (subItem: SidebarItem) => {
    setCurrentBreadcrumb(subItem.breadcrumb);
    router.push(subItem.pathname);
  };

  useEffect(() => {
    const foundItem = findItemPath(pathname);
    if (foundItem) {
      toggleItem(foundItem.id, setIsOpen);
      if (foundItem?.pathname === pathname) {
        setCurrentBreadcrumb(foundItem.breadcrumb);
      } else {
        const currentPath = foundItem.items?.filter(
          (item) => item.pathname === pathname
        );
        if (currentPath && currentPath.length > 0) {
          setCurrentBreadcrumb(currentPath[0].breadcrumb);
        }
      }
    }
  }, [pathname]);

  return (
    // <div
    //   onClick={() => {
    //     isSidebarOpen?setIsSidebarOpen(false):setIsSidebarOpen(true);
    //   }}
    // >
    <Box sx={{ display: "-webkit-box"}}>
      <CssBaseline />
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setIsSearchModalOpen={setIsSearchModalOpen}
        logout={logout}
        openModal={openModal}
        hideModal={hideModal}
        selected_id={props.selected_id}
      />

      {/* sidebar */}
      {isMediumScreen ? (
        <MediumScreenDrawer
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        >
          <DrawerList
            selected_id={props.selected_id}
            isSidebarOpen={isSidebarOpen}
            pathname={pathname}
            handleListItemButton={handleListItemButtonClick}
            isOpen={isOpen}
            handleSubItemClick={handleListSubItemButtonClick}
          />
        </MediumScreenDrawer>
      ) : props.selected_id === "home" ? null : (
        <ScreenDrawer>
          <DrawerList
            selected_id={props.selected_id}
            isSidebarOpen={isSidebarOpen}
            pathname={pathname}
            handleListItemButton={handleListItemButtonClick}
            isOpen={isOpen}
            handleSubItemClick={handleListSubItemButtonClick}
          />
        </ScreenDrawer>
      )}

      <Box
        component="main"
        sx={{ flexGrow: 1, width: "100%" }}
        onClick={() => {
          setIsSidebarOpen(false);
        }}
      >
        <Toolbar />
        <div className="dashboardheader">
          <div className="link">{currentBreadcrumb}</div>
        </div>
        {props.children}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 20,
            marginTop: 20,
          }}
        >
          <CommonfiButton
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#0AAC85",
              marginBottom: "20px",
              "&:hover": {
                backgroundColor: "white",
                color: "#0AAC85",
              },
              "&:active": {
                backgroundColor: "white",
                color: "#0AAC85",
              },
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disableRipple
            title="BACK TO TOP"
            startIcon={<ArrowUpwardIcon />}
          />
        </div>
        <Footer />
      </Box>

      <SearchDialogBox
        isSearchModalOpen={isSearchModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </Box>
  );
};

export default AuthenticatedLayout;
