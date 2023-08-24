import React from "react";
import "./footer.css";
import { TextField, Checkbox, Button, Link } from "@mui/material";
import footerLogo from "../../../../../public/footerLogo.svg";
import lightVector from "../../../../../public/lightVector.svg";
import CommonfiButton from "../CommonfiButton";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { FOOTER } from "@/lib/ts/constants";
import { FooterTextField } from "@/lib/styled-components/index.styled";
import { PORTALS, SUPPORT } from "./constants";
const Footer = () => {

  const SOCIALLINKS = [{ name: "Twitter" }, { name: "Common.fi" }];
  return (
    <>
      <footer className="footerMainDiv">
        <div className="footerSecondDiv">
          <div className="flexDiv">
            <div className="stayInTheKnowMainDiv">
              <div className="titleStyle">{FOOTER.stayInTheKnow}</div>
              <div className="textStyle paddingTop">
                {FOOTER.getFreeWeeklyUpdates}
              </div>
              <div>
                <FooterTextField placeholder="Email" hiddenLabel />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Checkbox style={{ color: "#0AAC85", marginLeft: -10 }} />
                <div className="checkBoxStyle">
                  {FOOTER.iAgreeToThe}
                  <span>
                    <Link href="#" color={"#D2ECF9"}>
                      {FOOTER.termAndConditions}
                    </Link>
                  </span>
                  {FOOTER.ofSubscription}
                </div>
              </div>
              <CommonfiButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#263c6f",
                    color: "white",
                  },
                  "&:active": {
                    boxShadow: "none",
                    backgroundColor: "#263c6f",
                    color: "red",
                  },
                }}
                variant="contained"
                className="buttonStyle paddingTop"
                title="SUBSCRIBE"
              />
            </div>
            <div className="vertigalLineMainDiv">
              <hr className="hrStyling" />
            </div>
            <div className="unlockFeatureMainDiv">
              <div className="titleStyle">
                <Image
                  src={lightVector}
                  alt="lightVector"
                  width={9}
                  height={18}
                  style={{
                    marginRight: 10,
                  }}
                />
                {FOOTER.unlockPremiumFeatures}
              </div>
              <div className="textStyle paddingTop">
                {FOOTER.detailPremiumFeature}
                <li className="liTopStyle" >{FOOTER.pointOne} </li>
                <li className="liTopStyle"> {FOOTER.pointTwo} </li>
                <li className="liTopStyle"> {FOOTER.pointThree} </li>
                <div className="paddingTop"> {FOOTER.pricing}</div>
              </div>
              <CommonfiButton
                variant="contained"
                sx={{
                  "&:hover": {
                    backgroundColor: "#263c6f",

                    color: "white",
                  },
                  "&:active": {
                    boxShadow: "none",
                    backgroundColor: "#263c6f",
                    color: "red",
                  },
                }}
                disableRipple
                className="buttonStyle paddingTop"
                title="UNLOCK PRO ACCESS"
              />
            </div>
          </div>
          <hr className="horizontalStyling" />
          <div className="footerLastDiv paddingTop">
          <div className="marginMobile">

            <div className="footerLastRowStyle">
              <div className="titleStyle">{FOOTER.portals}</div>
              {PORTALS.map((item) => {
                return (
                  <div key={item.name}>
                    <Link href="#" color={"#FFFFFF"}>
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
            </div>
            <div className="marginMobile">

            <div className="footerLastRowStyle">
              <div className="titleStyle">{FOOTER.support} </div>
              {SUPPORT.map((item) => {
                return (
                  <div key={item.name}>
                    <Link href="#" color={"#FFFFFF"}>
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
            </div>

            <div className="marginMobile">
              <div className="titleStyle">{FOOTER.connectWithUs}</div>
              <div className="connectwithinline">
                {SOCIALLINKS.map((item) => {
                  return (
                    <div key={item.name} className="footerConnetWithUs">
                      <Link href="#" color={"#FFFFFF"}>
                        {item.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="footerLogoStyle">
              <div>
                <Image
                  src={footerLogo}
                  alt="footerImage"
                  width={233}
                  height={40}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="textStyle">{FOOTER.copyRights}</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
