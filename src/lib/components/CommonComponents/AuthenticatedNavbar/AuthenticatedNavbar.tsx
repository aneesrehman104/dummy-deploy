import React, { Fragment, useState, useEffect } from "react";
import footerLogo from "../../../../../public/footerLogo.svg";
import currntTabIcon from "../../../../../public/currntTabIcon.svg";
import { useRouter, usePathname } from "next/navigation";
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
  Menu,
  MenuItem,
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
import { MemberInformationContext } from "@/lib/components/context";
import { useContext } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import Home from "@mui/icons-material/Home";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { useMemberstackModal, useMemberstack } from "@memberstack/react";
const MenuIcon = dynamic(() => import("@mui/icons-material/Menu"));

const drawerWidth = 240;

export default function AuthenticatedNavbar(props: Props) {
  const { logout } = useMemberstack();
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useContext(MemberInformationContext);
  console.log("====================a", router, user);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down(900));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentBreadcrumb, setCurrentBreadcrumb] = useState<string>("Home");
  const [isOpen, setIsOpen] = useState<SidebarState>({});
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { openModal, hideModal } = useMemberstackModal();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleLogout2 = async () => {
    await logout();
    window.location.reload();
  };
  const handleCheckout = async () => {
    router.push("/plans");
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <Box sx={{ display: "-webkit-box" }}>
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
                  style={{ marginRight: 20, cursor: "pointer" }}
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
                          style={{ cursor: "pointer" }}
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
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}
            </div>

            {user?.member !== null ? (
              <div className="textStyle cursorPointer">
                <React.Fragment>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <Avatar sx={{ width: 32, height: 32 }}>
                          {user?.member?.auth?.email[0].toUpperCase()}
                        </Avatar>
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleClose}>
                      {user?.member?.auth?.email}
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Home fontSize="medium" />
                      </ListItemIcon>
                      Home
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <Avatar /> Profile
                    </MenuItem>
                    <Divider />

                    <MenuItem onClick={handleCheckout}>
                      <Avatar />
                      Plans
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout2}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              </div>
            ) : (
              <div
                className="textStyle cursorPointer"
                onClick={() =>
                  openModal({
                    type: "SIGNUP",
                  }).then(({ data, type }: any) => {
                    console.log("data", data);
                    console.log("type: ", type);
                    if (type === "LOGIN") {
                      hideModal();
                      window.location.reload();
                    } else if (type === "CLOSED") {
                      hideModal();
                    } else {
                      router.push("/plans");
                    }
                  })
                }
              >
                <span>{navBarText.signUp}</span> /{" "}
                <span>{navBarText.signIn}</span>
              </div>
            )}
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
                    style={{ cursor: "pointer" }}
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
