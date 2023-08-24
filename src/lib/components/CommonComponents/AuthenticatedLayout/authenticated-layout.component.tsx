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

const AuthenticatedLayout = (props: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [currentBreadcrumb, setCurrentBreadcrumb] = useState<string>("Home");
  const [isOpen, setIsOpen] = useState<SidebarState>({});
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

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
    <Box sx={{ display: "-webkit-box" }}>
      <CssBaseline />
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setIsSearchModalOpen={setIsSearchModalOpen}
      />

      {/* sidebar */}
      {isMediumScreen ? (
        <MediumScreenDrawer isSidebarOpen={isSidebarOpen}>
          <DrawerList
            selected_id={props.selected_id}
            isSidebarOpen={isSidebarOpen}
            pathname={pathname}
            handleListItemButton={handleListItemButtonClick}
            isOpen={isOpen}
            handleSubItemClick={handleListSubItemButtonClick}
          />
        </MediumScreenDrawer>
      ) : (
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

      <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
        <Toolbar />
        <div className="dashboardheader">
          <div className="link">{currentBreadcrumb}</div>
        </div>
        {props.children}
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
