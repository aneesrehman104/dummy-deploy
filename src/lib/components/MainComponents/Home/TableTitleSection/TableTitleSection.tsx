import React from "react";
import styles from "./table-title.module.css";
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

function TableTitleSection() {
  const data = [
    {
      company: "Activision",
      event: "IPO",
      status: "Announced",
      pricingDate: "Jan 2 ‘22",
      priceRange: "$21/share",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "BBC",
      event: "SPAC",
      status: "Closed",
      pricingDate: "Jun 2 ‘22",
      priceRange: "$34/share2",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "CNN",
      event: "Merger",
      status: "Announced",
      pricingDate: "May 2 ‘22",
      priceRange: "$74/share",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "Fair Foods",
      event: "IPO",
      status: "Closed",
      pricingDate: "Sept 2 ‘22",
      priceRange: "$12/share2",
      proceedsRange: "$150M - $175M",
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
              <div style={{ display: "flex", alignItems: "center" }}>
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.company ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Company
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("event")}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.event ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Event
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("status")}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.status ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Status
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("pricingDate")}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.pricingDate ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Est. Pricing Date
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("priceRange")}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.priceRange ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Price/range
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("proceedsRange")}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.proceedsRange ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Proceeds/range
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
  return (
    <div className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Large Table Title</div>
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
          <MyTable data={data} />
        </div>
      </div>
    </div>
  );
}

export default TableTitleSection;
