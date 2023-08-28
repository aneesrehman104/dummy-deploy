import React, { Fragment, useEffect } from "react";
import "./get-free-updates.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import Image from "next/image";
import Rectangle from "../../../../../../public/Rectangle.svg";
import { TextField, Checkbox, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import Pic from "../../../../../../public/nonAuthPic.svg";
import { marketingConstants } from "@/lib/ts/constants";
import "./get-free-updates.css";
interface PROPS {}

const GetFreeUpdates: React.FC<PROPS> = () => {
  const CssTextField = styled(TextField)({
    width: "278px",
    height: "56px",
    color: "#ffffff", // or "white"
    border: "1px solid #0aac85",
    borderRadius: "4px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    marginTop: "10px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "& input": {
        color: "#ffffff", // Sets the input text color to white
      },
      "&::placeholder": {
        color: "#ffffff", // Sets the placeholder color to white
      },
      "&::-moz-placeholder": {
        color: "#ffffff",
        opacity: 1,
      },
    },
  });
  return (
    <section
      style={{
        display: "flex",
        background: "#20608B",
        height: "100%",
      }}
    >
      <div className="spaceBwteenPower">
        <div className="firstDivGetFreeUpdate">
          <div
            style={{ width: "80%", display: "flex", justifyContent: "center" }}
          >
            <Image
              src={Pic}
              alt="Pic"
              width={375}
              height={375}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <div className="secondDivGetFreeUpdate">
          <div className="freeUpadte">
            {marketingConstants.GETFREEUPDATESTOYOURINBOX}
          </div>
          <div className="titleMainPro">
            {marketingConstants.GETFREEUPDATESTOYOURINBOXDETAILS}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "85%",
              flexWrap: "wrap",
            }}
          >
            <div>
              <CssTextField placeholder="Enter first name " hiddenLabel />
            </div>
            <div>
              <CssTextField placeholder="Enter email address" hiddenLabel />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox
              style={{ color: "#0AAC85", marginLeft: -10 }}
              defaultChecked
            />
            <div className="checkBoxStyle">
              I accept the Terms or Conditions
            </div>
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
              className="buttonStyleSubscribe"
              title="Subscribe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetFreeUpdates;
