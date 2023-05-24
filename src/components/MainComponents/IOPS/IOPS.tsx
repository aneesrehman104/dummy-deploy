import styles from "./iops.module.css";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { TextField, InputAdornment } from "@mui/material";
import searchIcon from "../../../asserts/images/searchIcon.svg";
import Image from "next/image";
import { styled } from "@mui/material/styles";
const DynamicChart = dynamic(() => import("./IOPSChart"), { ssr: false });

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
      
        </div>
      </div>
    </>
  );
}

export default IOPS;
