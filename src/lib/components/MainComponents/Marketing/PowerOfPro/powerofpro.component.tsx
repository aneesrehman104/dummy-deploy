import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import Image from "next/image";
import Pic from "@public/nonAuthPic.svg";
import "./power-of-pro.css";
import { useRouter, usePathname } from "next/navigation";
import { marketingConstants } from "@/lib/ts/constants";
import { styled } from "@mui/material";
interface PROPS {}

const buttonStyleMuiPurchase = {
  "&:hover": {
    backgroundColor: "#263c6f",
    color: "white",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0AAC85",
  },
  boxShadow:
    "0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2)",
  borderRadius: "4px",
  height: "40px",
  width: "196px",
  marginRight: "20px",
  marginTop: "10px",
  backgroundColor: "#0AAC85",
};

const buttonStyleMuiRequestDemo = {
  "&:hover": {
    backgroundColor: "#263c6f",
    color: "white",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0AAC85",
  },
  border: "1px solid #0aac85",
  boxShadow:
    "0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2)",
  borderRadius: "4px",
  height: "40px",
  width: "196px",
  marginTop: "10px",
  background: "none",
  color: "white",
};

const PowerOfPro: React.FC<PROPS> = () => {
  const router = useRouter();

  return (
    <section
      style={{
        display: "flex",
        background: "#20608B",
        height: "100%",
        marginTop: "5%",
      }}
    >
      <div className="spaceBwteenPower">
        <div className="firstDivPowerOfPro">
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
        <div className="secondDivPowerOfPro">
          <div className="powerProText">{marketingConstants.THEPOWEROFPRO}</div>
          <div className="titleMainProHadding">
            {marketingConstants.THEPOWEROFPRODETAILS}
          </div>
          <div className="spaceBwteenPower">
            <div>
              <CommonfiButton
                sx={buttonStyleMuiPurchase}
                variant="contained"
                title="purchase"
                onClick={() => {
                  router.push("/plans");
                }}
              />
            </div>
            <div>
              <CommonfiButton
                sx={buttonStyleMuiRequestDemo}
                variant="contained"
                title="Request demo"
                onClick={() => {
                  router.push("/requestDemo");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOfPro;
