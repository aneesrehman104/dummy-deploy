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
  Breadcrumbs,
} from "@mui/material";
import "./AuthenticatedNavbar.css";
import dynamic from "next/dynamic";
import searchIcon from "../../../../../public/searchIcon.svg";
import { styled } from "@mui/material/styles";

const MenuIcon = dynamic(() => import("@mui/icons-material/Menu"));

const drawerWidth = 240;
const sidebarItem = [
  {
    name: "Home",
    pathname: "/home",
    id: "home",
    breadcrumb: "Home",
  },
  {
    name: "IPOs",
    pathname: "/ipos",
    id: "ipos",
    breadcrumb: "Home > IPOs",
    items: [
      {
        name: "HUB",
        pathname: "/ipos/hub",
        id: "ipos/hub",
        breadcrumb: "Home > IPOs > HUB",
      },
      {
        name: "STATS",
        pathname: "/ipos/stats",
        id: "ipos/stats",
        breadcrumb: "Home > IPOs > STATS",
      },
      {
        name: "PIPELINE",
        pathname: "/ipos/pipeline",
        id: "ipos/pipeline",
        breadcrumb: "Home > IPOs > PIPELINE",
      },
      {
        name: "NEWS",
        pathname: "/ipos/news",
        id: "ipos/news",
        breadcrumb: "Home > IPOs > NEWS",
      },
      {
        name: "SCREENERS",
        pathname: "/ipos/screeners",
        id: "ipos/screeners",
        breadcrumb: "Home > IPOs > SCREENERS",
      },
    ],
  },
  {
    name: "SPACs",
    pathname: "/spacs",
    id: "spacs",
    breadcrumb: "Home > SPACs",
    items: [
      {
        name: "HUB",
        pathname: "/spacs/hub",
        id: "spacs/hub",
        breadcrumb: "Home > SPACs > HUB",
      },
      {
        name: "STATS",
        pathname: "/spacs/stats",
        id: "spacs/stats",
        breadcrumb: "Home > SPACs > STATS",
      },
      {
        name: "PIPELINE",
        pathname: "/spacs/pipeline",
        id: "spacs/pipeline",
        breadcrumb: "Home > SPACs > PIPELINE",
      },
      {
        name: "NEWS",
        pathname: "/spacs/news",
        id: "spacs/news",
        breadcrumb: "Home > SPACs > NEWS",
      },
      {
        name: "SCREENERS",
        pathname: "/spacs/screeners",
        id: "spacs/screeners",
        breadcrumb: "Home > SPACs > SCREENERS",
      },
    ],
  },
  {
    name: "MERGERS",
    pathname: "/mergers",
    id: "mergers",
    breadcrumb: "Home > MERGERS",

    items: [
      {
        name: "HUB",
        pathname: "/mergers/hub",
        id: "mergers/hub",
        breadcrumb: "Home > MERGERS > HUB",
      },
      {
        name: "STATS",
        pathname: "/mergers/stats",
        id: "mergers/stats",
        breadcrumb: "Home > MERGERS > STATS",
      },
      {
        name: "PIPELINE",
        pathname: "/mergers/pipeline",
        id: "mergers/pipeline",
        breadcrumb: "Home > MERGERS > PIPELINE",
      },
      {
        name: "NEWS",
        pathname: "/mergers/news",
        id: "mergers/news",
        breadcrumb: "Home > MERGERS > NEWS",
      },
      {
        name: "SCREENERS",
        pathname: "/mergers/screeners",
        id: "mergers/screeners",
        breadcrumb: "Home > MERGERS > SCREENERS",
      },
    ],
  },
];

interface Props {
  selected_id?: string;
  children?: any;
  window?: () => Window;
}

interface SidebarItem {
  name: string;
  pathname: string;
  id: string;
  breadcrumb: string;
  items?: SidebarItem[];
}

interface SidebarState {
  [key: string]: boolean;
}

export default function AuthenticatedNavbar(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down(900));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentBreadcrumb, setCurrentBreadcrumb] = useState<string>("Home");
  const [isOpen, setIsOpen] = useState<SidebarState>({});

  const CssTextField = styled(TextField)({
    width: isMediumScreen ? "100%" : "390px",
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleItem = (itemId: string) => {
    setIsOpen((prevState) => {
      const newState: SidebarState = { ...prevState };
      const hasSubItems = sidebarItem.some(
        (item) => item.id === itemId && item.items
      );

      if (hasSubItems) {
        newState[itemId] = !prevState[itemId];
      } else {
        // Close all items except the current item when navigating to a leaf item
        Object.keys(prevState).forEach((key) => {
          newState[key] = key === itemId ? !prevState[key] : false;
        });
      }

      return newState;
    });
  };

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
      toggleItem(foundItem.id);
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
                    onClick={toggleSidebar}
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
                  style={{marginRight:20}}
                />
              ) : null}
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
            </div>
            <div className="textStyle cursorPointer">
              <span>Sign up</span> / <span>Sign In</span>
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
                            toggleItem(item.id);
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
                            toggleItem(item.id);
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
    </Box>
  );
}
