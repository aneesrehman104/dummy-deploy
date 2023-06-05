import React from "react";
import styles from "./gainer.module.css";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { TABLETITLESECTION } from "@/lib/ts/constants";
import dynamic from "next/dynamic";
import { GainerInterFace } from "@/lib/ts/interface";
const DynamicChart = dynamic(() => import("./EventsChart"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
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
    name: "Last 30D",
    key: "last30D",
  },
  {
    name: "Price",
    key: "price",
  },
  {
    name: "Daily",
    key: "daily",
  },
  {
    name: "Vol",
    key: "vol",
  },
];
const MyTable = ({ data, currentPage, itemsPerPage, paginate }: any) => {
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
                  {item.key !== "last30D" ? (
                    sortDirection === TABLETITLESECTION.desc &&
                    sortColumn === item.key ? (
                      <ArrowUpwardIcon fontSize="inherit" />
                    ) : (
                      <ArrowDownwardIcon fontSize="inherit" />
                    )
                  ) : null}
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
            <TableCell>{item.company}</TableCell>
            <TableCell>{item.symbol}</TableCell>
            <TableCell>
              <DynamicChart data={item.last30D} />
            </TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell style={{ color: "#0AAC1A" }}>{item.daily}</TableCell>
            <TableCell>{item.vol}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <tfoot>
        <TableRow>
          <TablePagination
            colSpan={6} // Number of columns in the table
            count={sortedData.length} // Total number of items
            rowsPerPage={itemsPerPage}
            page={currentPage - 1} // Page number starts from 0
            onPageChange={(event, newPage) => paginate(newPage + 1)} // Event handler for page change
            rowsPerPageOptions={[]} // Hide rows per page options
          />
        </TableRow>
      </tfoot>
    </Table>
  );
};
export default MyTable;
