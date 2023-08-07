import React, { Fragment, useEffect } from "react";
import styles from "./Losers.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import Image from "next/image";
import Pic from "../../../../../../public/nonAuthPic.svg";
import "./PowerOfPro.css";
function PowerOfPro() {
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
          <div className="powerProText">THE POWER OF PRO</div>
          <div className="titleMainProHadding">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, for just $60
            per month, or $500 annually.
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PowerOfPro;
