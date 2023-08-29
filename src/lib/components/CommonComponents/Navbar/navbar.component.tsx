import React, { useState } from "react";
import footerLogo from "@public/footerLogo.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Box,
  AppBar,
  Toolbar,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import { setCookie } from "cookies-next";
import { motion } from "framer-motion";
import "./navbar.css";
import dynamic from "next/dynamic";
import searchIcon from "@public/searchIcon.svg";
import { navBarText } from "@/lib/ts/constants";
import { MemberInformationContext } from "@/lib/components/context";
import { useContext } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import Home from "@mui/icons-material/Home";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { useMemberstackModal, useMemberstack } from "@memberstack/react";
import { CssTextField } from "@/lib/styled-components/index.styled";
import { LogoutMemberPayload } from "@memberstack/dom/lib/types";
import { MemberstackOptions } from "@memberstack/dom/lib/methods/requests";
import { ForgotModalProps, LoginModalProps, ProfileModalProps, ResetModalProps, SignupModalProps } from "@memberstack/react/dist/hooks/useMemberstackModal";
const MenuIcon = dynamic(() => import("@mui/icons-material/Menu"));

interface PROPS {
  isSidebarOpen: boolean;
  setIsSearchModalOpen: (value: boolean) => void;
  setIsSidebarOpen: (value: boolean) => void;
  logout: (options?: MemberstackOptions | undefined) => Promise<{
    data: {
      redirect?: string | undefined;
    };
  }>;
  openModal: (openModalProps?: ForgotModalProps | ResetModalProps | LoginModalProps | SignupModalProps | ProfileModalProps) => Promise<any>;
  hideModal: () => void;
}

const Navbar: React.FC<PROPS> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  setIsSearchModalOpen,
  logout,
  openModal,
  hideModal
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
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

  const handleModalPopup = () => {
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
    });
  };
  const handleModalPopupLogin = () => {
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
    });
  };

  return (
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
                  <MenuIcon sx={{ fontSize: 32 }} />
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
                onClick={() => {
                  router.push("/overview");
                }}
              />
            ) : null}
            {!isMediumScreen ? (
              <CssTextField
                placeholder="Search by company name or symbol"
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
                  width: "30px",
                  height: "30px",
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
                {user?.member !== null ? (
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
                ) : (
                  <div>
                    <motion.div
                      whileHover={{ scale: 0.98 }} // Scale down effect on hover
                    >
                      <MenuItem onClick={handleModalPopupLogin}>
                        <Avatar />
                        Login
                      </MenuItem>
                      <Divider />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 0.98 }} // Scale down effect on hover
                    >
                      <MenuItem onClick={handleModalPopup}>
                        <Avatar />
                        Sign Up
                      </MenuItem>
                      <Divider />
                    </motion.div>
                  </div>
                )}
              </Menu>
            </React.Fragment>
          </div>
          {/* // ) : (
          //   <div className="textStyle cursorPointer" onClick={handleModalPopup}>
          //     <span>{navBarText.signUp}</span> /{" "}
          //     <span>{navBarText.signIn}</span>
          //   </div>
          // )} */}
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
