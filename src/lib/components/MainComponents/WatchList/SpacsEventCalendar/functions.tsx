import React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { TABLETITLESECTION } from "@/lib/ts/constants";
import styles from "./SpacsEventCalendar.module.css";
import Image from "next/image";

const headerArray = [
  {
    name: "Company",
    key: "company",
  },
  {
    name: "Event",
    key: "event",
  },
  {
    name: "Status",
    key: "status",
  },
  {
    name: "Est. Pricing Date",
    key: "pricingDate",
  },
  {
    name: "Price/range",
    key: "priceRange",
  },
  {
    name: "Proceeds/range",
    key: "proceedsRange",
  },
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
                  sortColumn === item.key? (
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
                  <Image src="/image.svg" alt="image" width={24} height={24} />
                </div>
                <div className={styles.activision}>{item.company}</div>
              </div>
            </TableCell>
            <TableCell>{item.event}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.pricingDate}</TableCell>
            <TableCell>{item.priceRange}</TableCell>
            <TableCell>{item.proceedsRange}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default MyTable;
