import React, { Fragment, useEffect } from "react";
import styles from "./Losers.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import Image from "next/image";
import Rectangle from "../../../../../../public/Rectangle.svg";
import "./TrackingOnePlace.css";
function TrackingOnePlace() {
  return (
    <section style={{display:'flex',alignItems:'center',justifyContent:'space-around',height:"80vh",flexDirection:'column' }}>
      <div className="titleMainHadding">
        Finally, everything you need to track in ONE place.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: 274 }}>
          <div className="titleName">ListingTracker</div>
          <Image
            src={Rectangle}
            alt="Rectangle"
            width={260}
            height={110}
            style={{ cursor: "pointer" }}
          />
          <div className="detailStyle">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </div>
          <div className="buttonViewStyle pointer">VIEW Dashboard</div>
        </div>
        <div style={{ width: 274 }}>
          <div className="titleName">IPO PORTAL</div>
          <Image
            src={Rectangle}
            alt="Rectangle"
            width={260}
            height={110}
            style={{ cursor: "pointer" }}
          />
          <div className="detailStyle">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </div>
          <div className="buttonViewStyle pointer">VIEW IPOS</div>
        </div>
        <div style={{ width: 274 }}>
          <div className="titleName">MERGER PORTAL</div>
          <Image
            src={Rectangle}
            alt="Rectangle"
            width={260}
            height={110}
            style={{ cursor: "pointer" }}
          />
          <div className="detailStyle">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </div>
          <div className="buttonViewStyle pointer">VIEW MERGERS</div>
        </div>
        <div style={{ width: 274 }}>
          <div className="titleName">SPAC PORTAL</div>
          <Image
            src={Rectangle}
            alt="Rectangle"
            width={260}
            height={110}
            style={{ cursor: "pointer" }}
          />
          <div className="detailStyle">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </div>
          <div className="buttonViewStyle pointer">VIEW SPACs</div>
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
        />
      </div>
    </section>
  );
}

export default TrackingOnePlace;
