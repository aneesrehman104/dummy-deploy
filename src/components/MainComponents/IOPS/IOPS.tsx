import styles from "./iops.module.css";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { TextField, InputAdornment } from "@mui/material";
import searchIcon from "../../../../public/searchIcon.svg";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { borderBottom } from "@mui/system";
const DynamicChart = dynamic(() => import("./IOPSChart"), { ssr: false });

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

const CssTextField = styled(TextField)({
  width: "390px",
  height: "40px",
  border: "1px solid #dddee0",
  borderRadius: "8px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});
function IOPS() {
  const [isBrowser, setIsBrowser] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.breadcrumb}>
          <div className={styles.link}>IOPs</div>
        </div>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>microsoft [msft]</div>
          <CssTextField
            placeholder="Search ticker or company"
            className=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    width={18}
                    height={18}
                  />
                </InputAdornment>
              ),
            }}
            size="small"
            hiddenLabel
          />
        </div>
      </div>
      <div className={styles.sectionsummarycontainer}>
        <div className={styles.sectiondatasummary}></div>
        <div className={styles.chartcontainer}>
          <div style={{ display: "flex", marginLeft: 20 }}>
            <img alt="" src="/icongoogle.svg" />
            <div style={{ marginLeft: 10 }}>
              <div className={styles.ytdEventSummary}>Microsoft Corp.</div>
              <div className={styles.ytdEventSummary}>
                263.63 <sub style={{ fontSize: 12, color: "black" }}>USD</sub>{" "}
                <span style={{ fontSize: 18, fontWeight: 500, color: "red" }}>
                  -3.11
                </span>{" "}
                <span style={{ fontSize: 18, fontWeight: 500, color: "red" }}>
                  -1.17%
                </span>
                <span style={{ fontSize: 18, fontWeight: 500, color: "red" }}>
                  {" "}
                  Today
                </span>
              </div>
            </div>
          </div>

          <div style={{ width: "100%" }}>{isBrowser && <DynamicChart />}</div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.container}>
                <div>XXXX</div>
                <div>LAST TRADE</div>
              </div>
              <div className={styles.container}>
                <div>XX</div>
                <div>XXXXX</div>
              </div>
            </div>
            <div className={styles.indicator} />
            <div className={styles.eventsummaryinfo}>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur. Turpis pretium ut
                elementum quisque parturie. Turpis pretium ut elementum quisque
                parturie.
              </div>
              <div className={styles.titlebottom}>COMPARISON</div>
            </div>
          </div>
          <div className={styles.tableContainer}>
            <h3 className={styles.tableTitle}>Large Table Title</h3>
            <div className={styles.tableContainerInner}>
              <div
                style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}
              >
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
                  <div
                    className={styles.cell}
                  >
                    <span>{data.name}</span>
                    <span>{data.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IOPS;
