import React from "react";
import "./Footer.css";
import { TextField, Checkbox, Button, Link } from "@mui/material";
import footerLogo from "../../../../public/footerLogo.svg";
import lightVector from "../../../../public/lightVector.svg";
import CommonfiButton from "../CommonfiButton";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const Footer = () => {
  const CssTextField = styled(TextField)({
    width: "100%",
    height: "56px",
    color: "#ffffff", // or "white"
    border: "1px solid #0aac85",
    borderRadius: "4px",
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    marginTop:'10px',
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
    },
  });
  return (
    <>
      <div className="footerMainDiv">
        <div className="footerSecondDiv">
          <div className="flexDiv">
            <div className="stayInTheKnowMainDiv">
              <div className="titleStyle">Stay in the know</div>
              <div className="textStyle paddingTop">
                Get free weekly updates
              </div>
              <div>
                <CssTextField placeholder="Email" hiddenLabel />
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
                  I agere to the{" "}
                  <span>
                    <Link href="#" color={"#D2ECF9"}>
                      Terms & Conditions
                    </Link>
                  </span>{" "}
                  of subscription
                </div>
              </div>
              <CommonfiButton
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
                />
                &nbsp; Unlock pro features
              </div>
              <div className="textStyle paddingTop">
                Take advantage of all the power tools we have to offer
                including:
                <li> Tool 1 description </li>
                <li> Tool 2 description </li>
                <li> Tool 3 description </li>
                <div className="paddingTop"> Pricing starts at $X.</div>
              </div>
              <CommonfiButton
                variant="contained"
                sx={{
                  "&:hover": {
                    backgroundColor: "#263c6f",
                    color: "#0aac85",
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
            <div className="footerLastRowStyle">
              <div className="titleStyle">PORTAL</div>
              <div>
                <Link href="#" color={"#FFFFFF"}>
                  ListingTrack
                </Link>
              </div>
              <div>
                <Link href="#" color={"#FFFFFF"}>
                  IPOs
                </Link>
              </div>
              <div>
                <Link href="#" color={"#FFFFFF"}>
                  Mergers
                </Link>
              </div>
              <div>
                <Link href="#" color={"#FFFFFF"}>
                  SPACs
                </Link>
              </div>
            </div>
            <div className="footerLastRowStyle">
              <div className="titleStyle">Support </div>
              <div>
                <Link href="#" color={"#FFFFFF"}>
                  Upgrade plan
                </Link>
              </div>
              <div>
                <Link href="#" color={"#FFFFFF"}>
                  FAQs
                </Link>
              </div>
              <div>
                <Link href="#" color={"#FFFFFF"}>
                  Policies
                </Link>
              </div>
              <div>
                <Link href="#" color={"#FFFFFF"}>
                  Contact us
                </Link>
              </div>
            </div>

            <div>
              <div className="titleStyle">Connect with us </div>
              <div className="footerConnetWithUs">
                <Link href="#" color={"#FFFFFF"}>
                  Twitter
                </Link>
              </div>
              <div className="footerConnetWithUs">
                <Link href="#" color={"#FFFFFF"}>
                  Common.fi
                </Link>
              </div>
            </div>

            <div className="footerLogoStyle">
              <div>
                <Image
                  src={footerLogo}
                  alt="footerImage"
                  width={198}
                  height={40}
                />
              </div>
              <div className="textStyle">Copyright LLC line here</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
