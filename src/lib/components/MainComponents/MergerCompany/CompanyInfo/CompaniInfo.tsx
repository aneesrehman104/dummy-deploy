import styles from "./company.module.css";
import React, { useState, useEffect } from "react";

const Overview = [
  {
    name: "Merger Status",
    value: "March 13, 1986",
  },
  {
    name: "Announced Date",
    value: "XXX",
  },
  {
    name: "Merger Type",
    value: "$100M",
  },
  {
    name: "Merger Strategy",
    value: "XXX",
  },
  {
    name: "Merger Endgame",
    value: "SoftBank",
  },
  {
    name: "Description",
    value: "Icon",
  },
  {
    name: "Deal Announcement Link",
    value: "327,401",
  },
  {
    name: "Investor Presentation",
    value: "XXX",
  },
  {
    name: "BCA Link",
    value: "XX% YTD",
  },
  {
    name: "S-4",
    value: "Bill Gates",
  },
  {
    name: "Closing Year",
    value: "Bill Gates",
  },
  {
    name: "Closing Date",
    value: "Bill Gates",
  },
];
const TermsDates = [
  {
    name: "Deal Overview Link",
    value: "March 13, 1986",
  },
  {
    name: "Valuation Details",
    value: "XXX",
  },
  {
    name: "Offer Price",
    value: "$100M",
  },
  {
    name: "Offer Per Share",
    value: "XXX",
  },
  {
    name: "Premium at Deal",
    value: "SoftBank",
  },
  {
    name: "Current Premium",
    value: "Icon",
  },
  {
    name: "Additional Financing",
    value: "327,401",
  },
  {
    name: "Combined Company Name",
    value: "XXX",
  },
  {
    name: "Combined Company Ticker",
    value: "XX% YTD",
  },
  {
    name: "Merger Vote Date",
    value: "Bill Gates",
  },
  {
    name: "Merger Vote Proxy",
    value: "Bill Gates",
  },
  {
    name: "Expected Closing Date",
    value: "Bill Gates",
  },
];
const Trading = [
  {
    name: "Target Return from Announcement",
    value: "March 13, 1986",
  },
  {
    name: "Buyer Return from Announcement",
    value: "Company",
  },
  {
    name: "Target Day's Range",
    value: "Deal Status",
  },
  {
    name: "Target Prev. Close",
    value: "XXX",
  },
  {
    name: "Target 52-Week Range",
    value: "SoftBank",
  },
  {
    name: "Target Volume",
    value: "xx",
  },
  {
    name: "Target Avg. Volume (30-day)",
    value: "xx",
  },
  {
    name: "Shares Outstanding",
    value: "xx",
  },
  {
    name: "Buyer Day's Range",
    value: "xx",
  },
  {
    name: "Buyer 52-Week Range",
    value: "xx",
  },
  {
    name: "Buyer Volume",
    value: "xx",
  },
  {
    name: "Buyer Avg. Volume",
    value: "xx",
  },
];

const TargetProfile = [
  {
    name: "Name & Ticker [if ListingStatus = Listed]",
    value: "March 13, 1986",
  },
  {
    name: "Listing Status",
    value: "XXX",
  },
  {
    name: "Description",
    value: "$100M",
  },
  {
    name: "Peer Landscape Slide",
    value: "XXX",
  },
  {
    name: "Valuation Comps Slide",
    value: "SoftBank",
  },
  {
    name: "Prev. Year Revenue",
    value: "Icon",
  },
  {
    name: "Prev. Year Net Income",
    value: "327,401",
  },
  {
    name: "PE Ratio (TTM) [if Listed]",
    value: "XXX",
  },
  {
    name: "Employees",
    value: "XX% YTD",
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
function CompanyInfo() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <div className={styles.tableContainer}>
        <h3 className={styles.tableTitle}>Merger Profile</h3>
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
              Terms & Dates
            </div>
            <div
              onClick={() => setSelectedTab(2)}
              className={`${styles.headerCell} ${
                selectedTab === 2 && styles.selectedHeader
              }`}
            >
              Trading
            </div>
            <div
              onClick={() => setSelectedTab(3)}
              className={`${styles.headerCell} ${
                selectedTab === 3 && styles.selectedHeader
              }`}
            >
              Target Profile
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
              ? TermsDates.map((data: any) => (
                  <div className={styles.cell} key={data.name}>
                    <span>{data.name}</span>
                    <span>{data.value}</span>
                  </div>
                ))
              : selectedTab === 2
              ? Trading.map((data: any) => (
                  <div className={styles.cell} key={data.name}>
                    <span>{data.name}</span>
                    <span>{data.value}</span>
                  </div>
                ))
              : TargetProfile.map((data: any) => (
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
}

export default CompanyInfo;
