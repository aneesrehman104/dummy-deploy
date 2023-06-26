import React, { useState } from "react";
import styles from "./MergerCalendar.module.css";
import MyTable from "./functions";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function MergerCalendar() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
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
      <div className={styles.tableTitle}>IPO Filings</div>
      <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
        <div
          onClick={() => setSelectedTab(0)}
          className={`${styles.headerCell} ${
            selectedTab === 0 && styles.selectedHeader
          }`}
        >
          Latest Filings
        </div>
        <div
          onClick={() => setSelectedTab(1)}
          className={`${styles.headerCell} ${
            selectedTab === 1 && styles.selectedHeader
          }`}
        >
          Latest Amended Filings
        </div>
        <div
          onClick={() => setSelectedTab(1)}
          className={`${styles.headerCell} ${
            selectedTab === 2 && styles.selectedHeader
          }`}
        >
          Withdrawn
        </div>
      </div>
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
          <MyTable data={data} />
        </div>
      </div>
    </section>
  );
}

export default MergerCalendar;
