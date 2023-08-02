import React, { Fragment, useState, useEffect } from "react";
import footerLogo from "../../../../../public/footerLogo.svg";
import Image from "next/image";
import "./UnauthenticatedNavBar.css";
import CommonfiButton from "../CommonfiButton";
export default function UnauthenticatedNavBar() {
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
        <div>Features</div>
        <div>Pricing</div>
        <div>Request a Demo</div>
        <div>CommonFi</div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="textStyle cursorPointer">
          <span>Sign up</span> / <span>Sign in</span>
        </div>
        <div>
          <CommonfiButton
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
            className="buttonStyleGo"
            title="Go Pro"
          />
        </div>
      </div>
    </div>
  );
}
