import React, { Fragment, useState, useEffect } from "react";
import footerLogo from "../../../../../public/footerLogo.svg";
import Image from "next/image";
import "./unauthenticated-navbar.css";
import CommonfiButton from "../CommonfiButton";
import Link from "next/link";
import { useMemberstackModal, useMemberstack } from "@memberstack/react";
import { setCookie } from "cookies-next";
import { useRouter, usePathname } from "next/navigation";
interface PROPS {}
const UnauthenticatedNavBar: React.FC<PROPS> = () => {
  const { openModal, hideModal } = useMemberstackModal();
  const router = useRouter();
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
      />
      <div className="textStyle cursorPointer flexBetween">
        {UnauthenticatedNavBarData.map((item: any) => {
          return (
            <Link href={item.link} className="textStyle" key={item.name}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          className="textStyle cursorPointer"
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
          <span>Sign up</span> / <span>Sign in</span>
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
