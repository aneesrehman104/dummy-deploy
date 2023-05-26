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
    name: "Homes",
    pathname: "/home",
    id: "home",
    breadcrumb: "Homes",
  },
  {
    name: "IPOs",
    pathname: "/ipos",
    id: "ipos",
    breadcrumb: "Homes > IPOs",
    items: [
      {
        name: "HUB",
        pathname: "/ipos-hub",
        id: "ipos-hub",
        breadcrumb: "Homes > IPOs > HUB",
      },
      {
        name: "STATS",
        pathname: "/ipos-stats",
        id: "ipos-stats",
        breadcrumb: "Homes > IPOs > STATS",
      },
      {
        name: "PIPELINE",
        pathname: "/ipos-pipeline",
        id: "ipos-pipeline",
        breadcrumb: "Homes > IPOs > PIPELINE",
      },
      {
        name: "NEWS",
        pathname: "/ipos-news",
        id: "ipos-news",
        breadcrumb: "Homes > IPOs > NEWS",
      },
      {
        name: "SCREENERS",
        pathname: "/ipos-screeners",
        id: "ipos-screeners",
        breadcrumb: "Homes > IPOs > SCREENERS",
      },
    ],
  },
  {
    name: "SPACs",
    pathname: "/spacs",
    id: "spacs",
    items: [
      {
        name: "HUB",
        pathname: "/spacs-hub",
        id: "spacs-hub",
      },
      {
        name: "STATS",
        pathname: "/spacs-stats",
        id: "spacs-stats",
      },
      {
        name: "PIPELINE",
        pathname: "/spacs-pipeline",
        id: "spacs-pipeline",
      },
      {
        name: "NEWS",
        pathname: "/spacs-news",
        id: "spacs-news",
      },
      {
        name: "SCREENERS",
        pathname: "/screeners",
        id: "screeners",
      },
    ],
  },
  {
    name: "MERGERS",
    pathname: "/mergers",
    id: "mergers",
    items: [
      {
        name: "HUB",
        pathname: "/mergers-hub",
        id: "mergers-hub",
      },
      {
        name: "STATS",
        pathname: "/mergers-stats",
        id: "mergers-stats",
      },
      {
        name: "PIPELINE",
        pathname: "/mergers-pipeline",
        id: "mergers-pipeline",
      },
      {
        name: "NEWS",
        pathname: "/mergers-news",
        id: "mergers-news",
      },
      {
        name: "SCREENERS",
        pathname: "/mergers-screeners",
        id: "mergers-screeners",
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
const CssTextField = styled(TextField)({
  width: "390px",
  height: "40px",
  marginLeft: "30px",
  border: "1px solid #dddee0",
  background: "#dddee0",
  borderRadius: "8px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});
export default function AuthenticatedNavbar(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down(750));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentBreadcrumb, setCurrentBreadcrumb] = useState<string>("Homes");
  const [isOpen, setIsOpen] = useState<SidebarState>({});
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
        Object.keys(prevState).forEach((key) => {
          newState[key] = key === itemId ? !prevState[key] : false;
        });
      }
      return newState;
    });
  };
  useEffect(() => {
    const currentPath = sidebarItem.filter(
      (item) => item.pathname === pathname
    );
    console.log("=============router", router, pathname, currentPath);
    toggleItem(currentPath[0].id);
    setCurrentBreadcrumb(currentPath[0].breadcrumb);
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
              <Image
                src={footerLogo}
                alt="footerImage"
                width={148}
                height={21}
              />
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
                    <ListItemButton onClick={() => router.push(item.pathname)}>
                      <div
                        className={
                          item.id === props.selected_id
                            ? "currentTabStyle"
                            : "tabStyle"
                        }
                      >
                        {item.id === props.selected_id ? (
                          <Image
                            src={currntTabIcon}
                            alt="footerImage"
                            width={8}
                            height={12}
                          />
                        ) : (
                          " "
                        )}
                        &nbsp; &nbsp;{item.name}
                      </div>
                    </ListItemButton>
                  </ListItem>
                  {item.items && item.id === props.selected_id ? (
                    <List>
                      {item.items.map((subItem) => (
                        <ListItem key={subItem.id}>
                          <ListItemButton
                            onClick={() => router.push(subItem.pathname)}
                          >
                            <div className="tabStyle">{subItem.name}</div>
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
          <Box sx={{ overflow: "auto" }}>
            <List>
              {sidebarItem.map((item, index) => (
                <Fragment key={item.id}>
                  <ListItem>
                    {/* <ListItemButton onClick={() => router.push(item.pathname)}> */}
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
                            <div className="tabStyle">{subItem.name}</div>
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
      <Box component="main" sx={{ flexGrow: 1 }}>
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
