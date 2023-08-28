import React from "react";
import footerLogo from "../../../../../public/footerLogo.svg";
import Image from "next/image";
import "./unauthenticated-navbar.css";
import CommonfiButton from "../CommonfiButton";
import Link from "next/link";
import { useMemberstackModal, useMemberstack } from "@memberstack/react";
import { setCookie } from "cookies-next";
import { useRouter, usePathname } from "next/navigation";
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
import Tooltip from "@mui/material/Tooltip";
import Home from "@mui/icons-material/Home";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { motion } from "framer-motion";
import { useContext } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import { MemberInformationContext } from "@/lib/components/context";
interface PROPS {}
const UnauthenticatedNavBar: React.FC<PROPS> = () => {
  const { logout } = useMemberstack();

  const { openModal, hideModal } = useMemberstackModal();
  const { user } = useContext(MemberInformationContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout2 = async () => {
    await logout();
    setCookie("accessToken", null);
    window.location.reload();
  };
  const handleCheckout = async () => {
    router.push("/plans");
  };
  const UnauthenticatedNavBarData = [
    {
      name: "Features",
      link: "/home",
    },
    {
      name: "Pricing",
      link: "/plans",
    },
    {
      name: "Request a Demo",
      link: "requestDemo",
    },
    {
      name: "CommonFi",
      link: "",
    },
  ];
  return (
    <div className="headerMaindiv">
      <Image
        src={footerLogo}
        alt="footerImage"
        width={148}
        height={21}
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push('/home');
        }}
      />
      <div className="textStyleUnAuthenticatedNavBar cursorPointer flexBetween">
        {UnauthenticatedNavBarData.map((item: any) => {
          return (
            <div
              onClick={() => {
                router.push(item.link);
              }}
              className="textStyleUnAuthenticatedNavBar"
              key={item.name}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
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
                <div>
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
                            setCookie("accessToken", data.tokens.accessToken);
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
                            setCookie("accessToken", data.tokens.accessToken);
                            hideModal();
                            window.location.reload();
                          } else if (type === "CLOSED") {
                            hideModal();
                          } else {
                            setCookie("accessToken", data.tokens.accessToken);
                            router.push("/plans");
                          }
                        })
                      }
                    >
                      <Avatar /> Sign Up
                    </MenuItem>
                    <Divider />
                  </motion.div>
                </div>
              ) : (
                <div>
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
                </div>
              )}
            </Menu>
          </React.Fragment>
        </div>
        <div>
          <CommonfiButton
            className="buttonStyleGo"
            sx={{
              "&:hover": {
                backgroundColor: "#263c6f",
                color: "white",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: "#0AAC85",
              },
            }}
            variant="contained"
            title="Go Pro"
            onClick={() => {
              router.push("/plans");
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default UnauthenticatedNavBar;
