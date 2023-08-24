import React from "react";
import "./creators.css";
import Image from "next/image";
import Brand1 from "../../../../../../public/brand1.svg";
import Brand2 from "../../../../../../public/brand2.svg";
import Brand3 from "../../../../../../public/brand3.svg";
import Brand4 from "../../../../../../public/brand4.svg";

import Link from "next/link";
import "./Creators.css";
import { marketingConstants } from "@/lib/ts/constants";

interface PROPS {}

const Creators: React.FC<PROPS> = () => {
  return (
    <section className="creatorsMainDiv">
      <div className="titleMainCretaers">
        {marketingConstants.BROUGHTTOYOUBYTHEcreatorsOFSPACtrackASMENTIONEDIN}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Link href="">
          <Image
            src={Brand3}
            alt="Brand3"
            width={180}
            height={31}
            style={{ cursor: "pointer", marginTop: 10, marginBottom: 10 }}
          />
        </Link>
        <Link href="">
          <Image
            src={Brand2}
            alt="Brand2"
            width={180}
            height={31}
            style={{ cursor: "pointer", marginTop: 10, marginBottom: 10 }}
          />
        </Link>
        <Link href="">
          <Image
            src={Brand1}
            alt="Brand1"
            width={180}
            height={31}
            style={{ cursor: "pointer", marginTop: 10, marginBottom: 10 }}
          />
        </Link>
        <Link href="">
          <Image
            src={Brand4}
            alt="Brand4"
            width={180}
            height={31}
            style={{ cursor: "pointer", marginTop: 10, marginBottom: 10 }}
          />
        </Link>
      </div>
    </section>
  );
};

export default Creators;
