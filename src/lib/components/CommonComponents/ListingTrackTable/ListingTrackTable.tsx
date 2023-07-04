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
import TablePagination from "@mui/material/TablePagination";
import dynamic from "next/dynamic";
import Skeleton from "@mui/material/Skeleton";

const DynamicChart = dynamic(() => import("./EventsChart"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});
const ListingTrackTable = ({
  data,
  headerArray,
  currentPage,
  itemsPerPage,
  paginate,
  totalLength,
  showPagination,
}: any) => {
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (column: string) => {
    if (column !== "last30D") {
      setSortColumn(column);
      setSortDirection(
        sortDirection === TABLETITLESECTION.asc
          ? TABLETITLESECTION.desc
          : TABLETITLESECTION.asc
      );
    }
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
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
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
            {headerArray.map((headerItem: any) =>
              headerItem.type === "string" ? (
                <TableCell key={headerItem.key}>
                  {item[headerItem.key]}
                </TableCell>
              ) : headerItem.type === "gainer" ? (
                <TableCell style={{ color: "#0AAC1A" }}>
                  {item[headerItem.key]}
                </TableCell>
              ) : headerItem.type === "loser" ? (
                <TableCell style={{ color: "#E33126" }}>
                  {item[headerItem.key]}
                </TableCell>
              ) : (
                <TableCell>
                  <DynamicChart data={item[headerItem.key]} />
                </TableCell>
              )
            )}
          </TableRow>
        ))}
      </TableBody>
      {showPagination ? (
        <tfoot>
          <TableRow>
            <TablePagination
              colSpan={6} // Number of columns in the table
              count={totalLength?.totalLength} // Total number of items
              rowsPerPage={itemsPerPage}
              page={currentPage - 1} // Page number starts from 0
              onPageChange={(event: any, newPage: any) => paginate(newPage + 1)} // Event handler for page change
              rowsPerPageOptions={[]} // Hide rows per page options
            />
          </TableRow>
        </tfoot>
      ) : null}
    </Table>
  );
};

export default ListingTrackTable;
