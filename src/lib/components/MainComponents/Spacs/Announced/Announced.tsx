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
  const MyTable = ({ data }: any) => {
    const [sortColumn, setSortColumn] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");

    const handleSort = (column: string) => {
      setSortColumn(column);
      setSortDirection(
        sortDirection === TABLETITLESECTION.asc
          ? TABLETITLESECTION.desc
          : TABLETITLESECTION.asc
      );
    };

    const sortedData = [...data].sort((a, b) => {
      if (sortColumn) {
        if (sortDirection === TABLETITLESECTION.asc) {
          return a[sortColumn].localeCompare(b[sortColumn]);
        } else {
          return b[sortColumn].localeCompare(a[sortColumn]);
        }
      } else {
        return 0;
      }
    });
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => handleSort("company")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.company ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Company
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("symbol")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.symbol ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Symbol
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("price")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.price ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Price
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("today")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.today ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Today
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("marketCap")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.marketCap ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Market Cap
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className={styles.customTableCustomCell}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/image.svg"
                      alt="image"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.activision}>{item.company}</div>
                </div>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.today}</TableCell>
              <TableCell>{item.marketCap}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
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
