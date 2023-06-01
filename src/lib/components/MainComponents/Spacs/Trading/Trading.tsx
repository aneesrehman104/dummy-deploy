import React from "react";
import styles from "./trading.module.css";
import { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { TABLETITLESECTION } from "@/lib/ts/constants";
import dynamic from "next/dynamic";
import Gainer from "../Gainer/Gainer";
import Losers from "../Losers/Losers";

function Trading() {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Trading</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          <div
            onClick={() => setSelectedTab(0)}
            className={`${styles.headerCell} ${
              selectedTab === 0 && styles.selectedHeader
            }`}
          >
            All Active SPACs
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className={`${styles.headerCell} ${
              selectedTab === 1 && styles.selectedHeader
            }`}
          >
            De-SPACs
          </div>
        </div>
        {selectedTab === 0 ? (
          <>
            <Gainer title="Gainers: Active SPACs" />
            <Losers title="Losers:  Active SPACs" />
          </>
        ) : (
          <>
            <Gainer title="Gainers: De-SPACs " />
            <Losers title="Losers: De-SPACs " />
          </>
        )}
      </div>
    </div>
  );
}

export default Trading;
