import React from "react";
import styles from "./announced.module.css";
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
const headerArray = [
  {
    name: "Company",
    key: "company",
  },
  {
    name: "Symbol",
    key: "symbol",
  },
  {
    name: "Price",
    key: "price",
  },
  {
    name: "Today",
    key: "today",
  },
  {
    name: "Market Cap",
    key: "marketCap",
  }
];
const MyTable = ({ data }: any) => {
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<string>("asc");

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
          {headerArray.map((item) => {
            return (
              <TableCell key={item.key} onClick={() => handleSort(item.key)}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  {sortDirection === TABLETITLESECTION.desc &&
                  sortColumn === item.key ? (
                    <ArrowUpwardIcon fontSize="inherit" />
                  ) : (
                    <ArrowDownwardIcon fontSize="inherit" />
                  )}
                  {item.name}
                </div>
              </TableCell>
            );
          })}
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

export default MyTable