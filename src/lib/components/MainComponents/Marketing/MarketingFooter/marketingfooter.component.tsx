import React, { Fragment, useEffect } from "react";
import "./marketing-footer.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import Image from "next/image";
import Rectangle from "../../../../../../public/Rectangle.svg";
import { TextField, Checkbox, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import footerLogo from "../../../../../../public/footerLogo.svg";
import faceBook from "../../../../../../public/facebook.svg";
import Twitter from "../../../../../../public/twitter.svg";
import Linkdin from "../../../../../../public/linkedin.svg";

import "./MarketingFooter.css";
interface PROPS {}

const MarketingFooter: React.FC<PROPS> = () => {
  const FooterData = [
    {
      name: "Dashboard",
      link: "/home",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Terms & Conditions",
      link: "",
    },
    {
      name: "Privacy Policy",
      link: "",
    },
  ];
  return (
    <section className="MarktingFooterMainDiv">
      <div style={{ width: "90%", borderTop: "2px solid #D2ECF9" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20,
            marginBottom: 20,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Image
              src={footerLogo}
              alt="footerImage"
              width={233}
              height={40}
              style={{ cursor: "pointer", marginTop: 20, marginRight: 20 }}
            />
          </div>
          {FooterData.map((item) => {
            return (
              <Link
                href={item.link}
                className="textStyleFooter"
                style={{ width: "150px", marginTop: 20 }}
                key={item.name}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="#"
            className="textStyle"
            style={{ width: "150px", marginTop: 20 }}
          >
            <Image
              src={Linkdin}
              alt="Linkdin"
              width={25}
              height={25}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <Link
            href="#"
            className="textStyle"
            style={{ width: "150px", marginTop: 20 }}
          >
            <Image
              src={faceBook}
              alt="faceBook"
              width={25}
              height={25}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <Link
            href="#"
            className="textStyle"
            style={{ width: "50%", marginTop: 20 }}
          >
            <Image
              src={Twitter}
              alt="Twitter"
              width={25}
              height={25}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MarketingFooter;
