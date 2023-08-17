import styles from "../iops.module.css";
import React, { useState, useEffect } from "react";
interface PROPS {}

const Overview = [
  {
    name: "Day's Range",
    value: "March 13, 1986",
  },
  {
    name: "Prev. Close",
    value: "XXX",
  },
  {
    name: "52-Week Range",
    value: "$100M",
  },
  {
    name: "Volume",
    value: "XXX",
  },
  {
    name: "Avg. Volume (30-day)",
    value: "SoftBank",
  },
  {
    name: "Shares Outstanding",
    value: "Icon",
  },
  {
    name: "Prev. Year Revenue",
    value: "327,401",
  },
  {
    name: "Prev. Year Net Income",
    value: "XXX",
  },
  {
    name: "PE Ratio (TTM)",
    value: "XX% YTD",
  },
  {
    name: "Employees",
    value: "Bill Gates",
  },
  {
    name: "Industry",
    value: "Bill Gates",
  },
  {
    name: "HQ",
    value: "Bill Gates",
  },
];
const IPO = [
  {
    name: "IPO Date",
    value: "March 13, 1986",
  },
  {
    name: "IPO Type",
    value: "XXX",
  },
  {
    name: "Return from IPO",
    value: "$100M",
  },
  {
    name: "Annualized Return",
    value: "XXX",
  },
  {
    name: "Shares Offered",
    value: "SoftBank",
  },
  {
    name: "IPO Price",
    value: "Icon",
  },
  {
    name: "IPO Proceeds",
    value: "327,401",
  },
  {
    name: "Underwriters",
    value: "XXX",
  },
  {
    name: "S-1 Link",
    value: "XX% YTD",
  },
  {
    name: "Market Cap at IPO",
    value: "Bill Gates",
  },
  {
    name: "Market Cap Return from IPO",
    value: "Bill Gates",
  },
  {
    name: "Capital Raised Pre-IPO",
    value: "Bill Gates",
  },
];
const MergerHistory = [
  {
    name: "Logo",
    value: "March 13, 1986",
  },
  {
    name: "Company",
    value: "Company",
  },
  {
    name: "Deal Status",
    value: "Deal Status",
  },
  {
    name: "Date (based on Deal Status... ex. Terminated status would be TerminatedDate, Announced would be AnnouncedDate)",
    value: "XXX",
  },
  {
    name: "Link to Deal Page",
    value: "SoftBank",
  },
];
const CompanyInfo: React.FC<PROPS> = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <>
      <div className={styles.tableContainer}>
        <h3 className={styles.tableTitle}>IPO Company Profile</h3>
        <div className={styles.tableContainerInner}>
          <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
            <div
              onClick={() => setSelectedTab(0)}
              className={`${styles.headerCell} ${
                selectedTab === 0 && styles.selectedHeader
              }`}
            >
              Overview
            </div>
            <div
              onClick={() => setSelectedTab(1)}
              className={`${styles.headerCell} ${
                selectedTab === 1 && styles.selectedHeader
              }`}
            >
              IPOs
            </div>
            <div
              onClick={() => setSelectedTab(2)}
              className={`${styles.headerCell} ${
                selectedTab === 2 && styles.selectedHeader
              }`}
            >
              Merger History (Rows)
            </div>
          </div>
          <div
            style={{
              marginTop: 30,
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {selectedTab === 0
              ? Overview.map((data: any) => (
                  <div className={styles.cell} key={data.name}>
                    <span>{data.name}</span>
                    <span>{data.value}</span>
                  </div>
                ))
              : selectedTab === 1
              ? IPO.map((data: any) => (
                  <div className={styles.cell} key={data.name}>
                    <span>{data.name}</span>
                    <span>{data.value}</span>
                  </div>
                ))
              : MergerHistory.map((data: any) => (
                  <div className={styles.cell} key={data.name}>
                    <span>{data.name}</span>
                    <span>{data.value}</span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
