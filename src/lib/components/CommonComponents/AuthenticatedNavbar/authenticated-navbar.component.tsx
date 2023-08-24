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
  InputAdornment,
  Dialog,
  Menu,
  MenuItem,
  DialogContent,
} from "@mui/material";
import { setCookie } from "cookies-next";
import { motion } from "framer-motion";
import "./authenticated-navbar.css";
import dynamic from "next/dynamic";
import searchIcon from "../../../../../public/searchIcon.svg";
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
import { CssTextField } from "@/lib/styled-components/index.styled";
import { drawerWidth } from "./constants";
const MenuIcon = dynamic(() => import("@mui/icons-material/Menu"));

function findItemPath(pathname: string) {
  return sidebarItem.find((item) => {
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
}

const AuthenticatedNavbar = (props: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [currentBreadcrumb, setCurrentBreadcrumb] = useState<string>("Home");
  const [isOpen, setIsOpen] = useState<SidebarState>({});
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { logout } = useMemberstack();
  const { openModal, hideModal } = useMemberstackModal();
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const { user } = useContext(MemberInformationContext);
  const isMediumScreen = useMediaQuery(theme.breakpoints.down(900));

  const handleLogout2 = async () => {
    await logout();
    setCookie("accessToken", null);
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

  const handleOpenModal = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSearchModalOpen(false);
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
                  {user?.member === null ? (
                    <>
                      <motion.div
                        whileHover={{ scale: 0.98 }} // Scale down effect on hover
                      >
                        <MenuItem
                          onClick={() =>
                            openModal({
                              type: "LOGIN",
                            }).then(({ data, type }: any) => {
                              console.log("data", data);
                              console.log("type: ", type);
                              if (type === "LOGIN") {
                                setCookie(
                                  "accessToken",
                                  data.tokens.accessToken
                                );
                                hideModal();
                                window.location.reload();
                              } else {
                                hideModal();
                              }
                            })
                          }
                        >
                           <Avatar /> SignIn
                        </MenuItem>
                        <Divider />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 0.98 }} // Scale down effect on hover
                      >
                        <MenuItem
                          onClick={() =>
                            openModal({
                              type: "SIGNUP",
                            }).then(({ data, type }: any) => {
                              console.log("data", data);
                              console.log("type: ", type);
                              if (type === "LOGIN") {
                                setCookie(
                                  "accessToken",
                                  data.tokens.accessToken
                                );
                                hideModal();
                                window.location.reload();
                              } else if (type === "CLOSED") {
                                hideModal();
                              } else {
                                setCookie(
                                  "accessToken",
                                  data.tokens.accessToken
                                );
                                router.push("/plans");
                              }
                            })
                          }
                        >
                           <Avatar /> Sign Up
                        </MenuItem>
                        <Divider />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        whileHover={{ scale: 0.98 }} // Scale down effect on hover
                      >
                        <MenuItem onClick={handleClose}>
                          {user?.member?.auth?.email}
                        </MenuItem>
                        <Divider />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 0.98 }} // Scale down effect on hover
                      >
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <Home fontSize="medium" />
                          </ListItemIcon>
                          Home
                        </MenuItem>
                        <Divider />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 0.98 }} // Scale down effect on hover
                      >
                        <MenuItem onClick={handleClose}>
                          <Avatar /> Profile
                        </MenuItem>
                        <Divider />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 0.98 }} // Scale down effect on hover
                      >
                        <MenuItem onClick={handleCheckout}>
                          <Avatar />
                          Plans
                        </MenuItem>
                        <Divider />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 0.98 }} // Scale down effect on hover
                      >
                        <MenuItem onClick={handleLogout2}>
                          <ListItemIcon>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                      </motion.div>
                    </>
                  )}
                </Menu>
              </React.Fragment>
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
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
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
                        <motion.div
                          whileHover={{ scale: 1.05 }} // Scale up effect on hover
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
                        </motion.div>
                      </ListItemButton>
                    </ListItem>
                  </motion.div>
                  {item.items && isOpen[item.id] ? (
                    <List>
                      {item.items.map((subItem) => (
                        <motion.div
                          key={subItem.id}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ListItem key={subItem.id}>
                            <ListItemButton
                              onClick={() => {
                                setCurrentBreadcrumb(subItem.breadcrumb);
                                router.push(subItem.pathname);
                              }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.05 }} // Scale up effect on hover
                                className={
                                  subItem.pathname === pathname
                                    ? "currentTabStyle"
                                    : "tabStyle"
                                }
                              >
                                {subItem.name}
                              </motion.div>
                            </ListItemButton>
                          </ListItem>
                        </motion.div>
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
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
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
                        <motion.div
                          whileHover={{ scale: 1.05 }} // Scale up effect on hover
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
                        </motion.div>
                      </ListItemButton>
                    </ListItem>
                  </motion.div>
                  {item.items && isOpen[item.id] ? (
                    <List>
                      {item.items.map((subItem) => (
                        <motion.div
                          key={subItem.id}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <ListItem key={subItem.id}>
                            <ListItemButton
                              onClick={() => {
                                setCurrentBreadcrumb(subItem.breadcrumb);
                                router.push(subItem.pathname);
                              }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.05 }} // Scale up effect on hover
                                className={
                                  subItem.pathname === pathname
                                    ? "currentTabStyle"
                                    : "tabStyle"
                                }
                              >
                                {subItem.name}
                              </motion.div>
                            </ListItemButton>
                          </ListItem>
                        </motion.div>
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
};
export default AuthenticatedNavbar;
