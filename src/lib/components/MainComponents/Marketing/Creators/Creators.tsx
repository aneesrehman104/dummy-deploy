import React, { Fragment, useEffect } from "react";
import styles from "./Losers.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import Image from "next/image";
import Rectangle from "../../../../../../public/Rectangle.svg";
import "./Creators.css";
function Creators() {
  return (
    <section className="creatorsMainDiv">
      <div className="titleMainCretaers">
        BROUGHT TO YOU BY THe creators OF SPAC track, AS MENTIONED IN:
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <div> Fortune</div>
        <div> The Wall Street Joural</div>
        <div> Forbes</div>
        <div> The new Dork Time </div>
      </div>
    </section>
  );
}

export default Creators;
