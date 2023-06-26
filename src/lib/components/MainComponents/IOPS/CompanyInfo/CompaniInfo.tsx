import styles from "../iops.module.css";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Skeleton from "@mui/material/Skeleton";

const dataSet = [
  {
    name: "Data",
    value: "March 13, 1986",
  },
  {
    name: "Proceeds",
    value: "XXX",
  },
  {
    name: "Previous FY Revenue ",
    value: "$100M",
  },
  {
    name: "Type",
    value: "XXX",
  },
  {
    name: "Underwriters",
    value: "SoftBank",
  },
  {
    name: "S-1 Prospectus",
    value: "Icon",
  },
  {
    name: "Return",
    value: "327,401",
  },
  {
    name: "Shared Offers",
    value: "XXX",
  },
  {
    name: "Annualised Return",
    value: "XX% YTD",
  },
  {
    name: "CEO",
    value: "Bill Gates",
  },
];

function CompanyInfo() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      <div className={styles.tableContainer}>
        <h3 className={styles.tableTitle}>Company Information</h3>
        <div className={styles.tableContainerInner}>
          <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
            <div
              onClick={() => setSelectedTab(0)}
              className={`${styles.headerCell} ${
                selectedTab === 0 && styles.selectedHeader
              }`}
            >
              Profile
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
              Merger History
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
            {dataSet.map((data) => (
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
