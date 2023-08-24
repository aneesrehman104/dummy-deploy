import React, { Fragment, useEffect } from "react";
import "./tracking-oneplace.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import Image from "next/image";
import Rectangle from "../../../../../../public/Rectangle.svg";
import "./tracking-oneplace.css";
import { useRouter, usePathname } from "next/navigation";
import { marketingConstants } from "@/lib/ts/constants";
interface PROPS {}

const TrackingOnePlace: React.FC<PROPS> = () => {
  const router = useRouter();

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
        marginTop: 20,
        flexDirection: "column",
      }}
    >
      <div className="titleMainHadding">
        Finally, everything you need to track in &nbsp;<span className="oneLineUnder">ONE</span>&nbsp; place.
      </div>
      <div className="tackingOnePlace">
        <div style={{ width: 274, marginTop: 10, marginBottom: 30 }}>
          <div className="titleName">{marketingConstants.ListingTracker}</div>
          <Image
            src={Rectangle}
            alt="Rectangle"
            width={260}
            height={110}
            style={{ cursor: "pointer" }}
          />
          <div className="detailStyle">{marketingConstants.details}</div>
          <div
            className="buttonViewStyle pointer"
            onClick={() => {
              router.push("/home");
            }}
          >
            {marketingConstants.VIEWDashboard}
          </div>
        </div>
        <div style={{ width: 274, marginTop: 10, marginBottom: 10 }}>
          <div className="titleName">{marketingConstants.IPOPORTAL}</div>
          <Image
            src={Rectangle}
            alt="Rectangle"
            width={260}
            height={110}
            style={{ cursor: "pointer" }}
          />
          <div className="detailStyle">{marketingConstants.details}</div>
          <div
            className="buttonViewStyle pointer"
            onClick={() => {
              router.push("/ipos");
            }}
          >
            {marketingConstants.VIEWIPOS}
          </div>
        </div>
        <div style={{ width: 274, marginTop: 10, marginBottom: 10 }}>
          <div className="titleName">{marketingConstants.MERGERPORTAL}</div>
          <Image
            src={Rectangle}
            alt="Rectangle"
            width={260}
            height={110}
            style={{ cursor: "pointer" }}
          />
          <div className="detailStyle">{marketingConstants.details}</div>
          <div
            className="buttonViewStyle pointer"
            onClick={() => {
              router.push("/mergers");
            }}
          >
            {marketingConstants.VIEWMERGERS}
          </div>
        </div>
        <div style={{ width: 274, marginTop: 10, marginBottom: 10 }}>
          <div className="titleName">{marketingConstants.SPACPORTAL}</div>
          <Image
            src={Rectangle}
            alt="Rectangle"
            width={260}
            height={110}
            style={{ cursor: "pointer" }}
          />
          <div className="detailStyle">{marketingConstants.details}</div>
          <div
            className="buttonViewStyle pointer"
            onClick={() => {
              router.push("/spacs");
            }}
          >
            {marketingConstants.SPACPORTAL}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
          className="buttonStyleDemo"
          title="Request A DEMO"
          onClick={() => {
            router.push("/requestDemo");
          }}
        />
      </div>
    </section>
  );
}

export default TrackingOnePlace;
