import React, { Fragment, useEffect } from "react";
import "./marketing-footer.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import Image from "next/image";
import Rectangle from "@public/Rectangle.svg";
import { TextField, Checkbox, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import footerLogo from "@public/footerLogo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRouter, usePathname } from "next/navigation";

interface PROPS {}

const MarketingFooter: React.FC<PROPS> = () => {
  const router = useRouter();
  const FooterData = [
    {
      name: "Dashboard",
      link: "/overview",
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
    {
      name: <LinkedInIcon />,
      link: "",
    },
    {
      name: <FacebookIcon />,
      link: "",
    },
    {
      name: <TwitterIcon />,
      link: "",
    },
  ];
  return (
    <section className="MarktingFooterMainDiv">
      <div style={{ width: "90%", borderTop: "2px solid #D2ECF9" }}>
        <div
          style={{
            display: "flex",
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
              onClick={() => {
                router.push("/overview");
              }}
            />
          </div>
          {FooterData.map((item, index) => {
            return (
              <Link
                href={item.link}
                className="textStyleFooter
                "
                style={{ width: "150px", marginTop: 20, marginLeft: 20 }}
                key={`${item.name}${index}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketingFooter;
