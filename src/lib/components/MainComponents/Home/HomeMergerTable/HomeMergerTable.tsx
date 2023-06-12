import React from "react";
import styles from "./HomeMergerTable.module.css";
import { useState, useEffect } from "react";
import {  homeConstants } from "@/lib/ts/constants";
import MyTable from "./functions";

function HomeMergerTableTitle() {
  return (
    <div className={styles.tableTitle}>{homeConstants.MergersPipeline.title}</div>
    );
}


function HomeMergerTable() {
  const data = [
    {
      company: "Activision",
      event: "IPO",
      status: "Announced",
      pricingDate: "Jan 2 ‘22",
      priceRange: "$21/share",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "BBC",
      event: "SPAC",
      status: "Closed",
      pricingDate: "Jun 2 ‘22",
      priceRange: "$34/share2",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "CNN",
      event: "Merger",
      status: "Announced",
      pricingDate: "May 2 ‘22",
      priceRange: "$74/share",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "Fair Foods",
      event: "IPO",
      status: "Closed",
      pricingDate: "Sept 2 ‘22",
      priceRange: "$12/share2",
      proceedsRange: "$150M - $175M",
    },
  ];


 
  return (
    <section className={styles.stockstablesection}>
      <HomeMergerTableTitle/>
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
          <MyTable data={data} />
        </div>
      </div>
    </section>
  );
}

export default HomeMergerTable;
