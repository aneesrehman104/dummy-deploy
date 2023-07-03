import React from "react";
import styles from "./HomeIpoTable.module.css";
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
import { TABLETITLESECTION, homeConstants } from "@/lib/ts/constants";

const ListingTrackTable = ({ data, headerArray }: any) => {
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
          {headerArray.map((item: any) => {
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
            {headerArray.map((headerItem: any) => (
              <TableCell key={headerItem.key}>{item[headerItem.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListingTrackTable;
