import React, { Fragment, useEffect } from "react";
import styles from "./power-of-pro.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import Image from "next/image";
import Pic from "../../../../../../public/nonAuthPic.svg";
import "./power-of-pro.module.css";
import { useRouter, usePathname } from "next/navigation";
import { marketingConstants } from "@/lib/ts/constants";
interface PROPS {}

const PowerOfPro: React.FC<PROPS> = () => {

  const router = useRouter();

  return (
    <section
      style={{
        display: "flex",
        background: "#20608B",
        height: "100%",
        marginTop:'5%'
      }}
    >
      <div className="spaceBwteenPower">
        <div
        className="firstDivPowerOfPro"
        >
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
        <div
          className="secondDivPowerOfPro"
        >
          <div className="powerProText">{marketingConstants.THEPOWEROFPRO}</div>
          <div className="titleMainProHadding">
          {marketingConstants.THEPOWEROFPRODETAILS}
          </div>
          <div className="spaceBwteenPower">
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
                className="buttonStylePurchase"
                title="purchase"
                onClick={() => {
                  router.push("/plans");
                }}
              />
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
                className="buttonStyleRequestDemo"
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
}

export default PowerOfPro;
