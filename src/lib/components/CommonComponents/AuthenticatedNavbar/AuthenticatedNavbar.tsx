import React, { Fragment, useState, useEffect } from "react";
import footerLogo from "../../../../../public/footerLogo.svg";
import currntTabIcon from "../../../../../public/currntTabIcon.svg";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Footer from "../Footer";
import Image from "next/image";
import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  IconButton,
  useMediaQuery,
  useTheme,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import "./AuthenticatedNavbar.css";
import dynamic from "next/dynamic";
import searchIcon from "../../../../../public/searchIcon.svg";
import { styled } from "@mui/material/styles";
import { Props, SidebarState } from "@/lib/ts/interface";
import { sidebarItem, navBarText } from "@/lib/ts/constants";
import CloseIcon from "@mui/icons-material/Close";
import { toggleItem } from "./functions";
const MenuIcon = dynamic(() => import("@mui/icons-material/Menu"));

const drawerWidth = 240;

export default function AuthenticatedNavbar(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down(900));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentBreadcrumb, setCurrentBreadcrumb] = useState<string>("Home");
  const [isOpen, setIsOpen] = useState<SidebarState>({});
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const CssTextField = styled(TextField)({
    width: "375px",
    height: "40px",
    border: "1px solid #dddee0",
    background: "#dddee0",
    borderRadius: "8px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
    },
  });

  useEffect(() => {
    const foundItem = sidebarItem.find((item) => {
      if (item.pathname === pathname) {
        return true;
      }
      if (
        item.items &&
        item.items.some((subItem) => subItem.pathname === pathname)
      ) {
        return true;
      }
      return false;
    });

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
  const handleOpenModal = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSearchModalOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <div className="headerMainDiv">
          <div className="headerInnerDiv">
            <div style={{ display: "flex", alignItems: "center" }}>
              {isMediumScreen ? (
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              ) : null}
              {!isMediumScreen ? (
                <Image
                  src={footerLogo}
                  alt="footerImage"
                  width={148}
                  height={21}
                  style={{ marginRight: 20 }}
                />
              ) : null}
              {!isMediumScreen ? (
                <CssTextField
                  placeholder="Search ticker or company"
                  className=""
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Image
                          src={searchIcon}
                          alt="searchIcon"
                          width={18}
                          height={18}
                        />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  hiddenLabel
                />
              ) : (
                <div
                  style={{
                    backgroundColor: "#dddee0",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={handleOpenModal}
                >
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    width={18}
                    height={18}
                  />
                </div>
              )}
            </div>
            <div className="textStyle cursorPointer">
              <span>{navBarText.signUp}</span> /{" "}
              <span>{navBarText.signIn}</span>
            </div>
          </div>
        </div>
      </AppBar>
      {isMediumScreen ? (
        <Drawer
          variant="temporary"
          open={isSidebarOpen}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              background: "#D2ECF9",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {sidebarItem.map((item, index) => (
                <Fragment key={item.id}>
                  <ListItem>
                    <ListItemButton
                      onClick={() => {
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
                      }}
                    >
                      <div
                        className={
                          isOpen[item.id] || item.id === props.selected_id
                            ? "currentTabStyle"
                            : "tabStyle"
                        }
                      >
                        {isOpen[item.id] ? (
                          <Image
                            src={currntTabIcon}
                            alt="footerImage"
                            style={{ transform: "rotate(90deg)" }}
                            width={8}
                            height={12}
                          />
                        ) : (
                          <Image
                            src={currntTabIcon}
                            alt="footerImage"
                            width={8}
                            height={12}
                          />
                        )}
                        &nbsp; &nbsp;{item.name}
                      </div>
                    </ListItemButton>
                  </ListItem>
                  {item.items && isOpen[item.id] ? (
                    <List>
                      {item.items.map((subItem) => (
                        <ListItem key={subItem.id}>
                          <ListItemButton
                            onClick={() => {
                              setCurrentBreadcrumb(subItem.breadcrumb);
                              router.push(subItem.pathname);
                            }}
                          >
                            <div
                              className={
                                subItem.pathname === pathname
                                  ? "currentTabStyle"
                                  : "tabStyle"
                              }
                            >
                              {subItem.name}
                            </div>
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  ) : null}
                  <Divider />
                </Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              background: "#D2ECF9",
            },
          }}
        >
          <Toolbar />
          <Box>
            <List>
              {sidebarItem.map((item, index) => (
                <Fragment key={item.id}>
                  <ListItem>
                    <ListItemButton
                      onClick={() => {
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
                      }}
                    >
                      <div
                        className={
                          isOpen[item.id] || item.id === props.selected_id
                            ? "currentTabStyle"
                            : "tabStyle"
                        }
                      >
                        {isOpen[item.id] ? (
                          <Image
                            src={currntTabIcon}
                            alt="footerImage"
                            style={{ transform: "rotate(90deg)" }}
                            width={8}
                            height={12}
                          />
                        ) : (
                          <Image
                            src={currntTabIcon}
                            alt="footerImage"
                            width={8}
                            height={12}
                          />
                        )}
                        &nbsp; &nbsp;{item.name}
                      </div>
                    </ListItemButton>
                  </ListItem>
                  {item.items && isOpen[item.id] ? (
                    <List>
                      {item.items.map((subItem) => (
                        <ListItem key={subItem.id}>
                          <ListItemButton
                            onClick={() => {
                              setCurrentBreadcrumb(subItem.breadcrumb);
                              router.push(subItem.pathname);
                            }}
                          >
                            <div
                              className={
                                subItem.pathname === pathname
                                  ? "currentTabStyle"
                                  : "tabStyle"
                              }
                            >
                              {subItem.name}
                            </div>
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  ) : null}
                  <Divider />
                </Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
      <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
        <Toolbar />
        <div className={"dashboardheader"}>
          <div className={"link"}>{currentBreadcrumb}</div>
        </div>
        {props.children}
        <Footer />
      </Box>
      <Dialog
        open={isSearchModalOpen}
        onClose={handleCloseModal}
        // maxWidth="xl"
        // fullWidth
        PaperProps={{
          style: {
            height: "100%",
            width: "100%",
            overflowY: "unset", // Remove the default y-axis overflow
            padding: 0, // Remove the default padding
            margin: 0, // Remove the default margin
            maxHeight: "100%", // Remove the max-height property
          },
        }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleCloseModal}
          aria-label="close"
          sx={{
            position: "absolute",
            top: 8,
            right: 20,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          style={{
            overflowY: "unset",
            padding: "50px 0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CssTextField
            placeholder="Search ticker or company"
            className=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    width={18}
                    height={18}
                  />
                </InputAdornment>
              ),
            }}
            size="small"
            hiddenLabel
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
