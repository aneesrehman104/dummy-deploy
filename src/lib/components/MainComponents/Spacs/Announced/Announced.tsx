import React from "react";
import styles from "./Announced.module.css";
import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { TABLETITLESECTION } from "@/lib/ts/constants";
import Image from "next/image";
import { Diversity1Outlined } from "@mui/icons-material";
import MyTable from "./functions";
function Announced() {
  const data = [
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision3",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23T",
    },
  ];

  return (
    <div className={styles.stockstablesection}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className={styles.tableTitle}>Latest Announced SPAC Deals</div>
      </div>
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
          <MyTable data={data} />
        </div>
      </div>
    </div>
  );
}

export default Announced;
