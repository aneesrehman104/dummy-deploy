import React from "react";
import styles from "./SpacEventCalendar.module.css";
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
const MyTable = ({
  data,
  itemsPerPage,
  currentPage,
  paginate,
  totalLength,
}: any) => {
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

  const sortedData = [...data]?.sort((a, b) => {
    if (sortColumn) {
      if (sortDirection === TABLETITLESECTION.asc) {
        if (typeof a[sortColumn] === 'number' && typeof b[sortColumn] === 'number') {
          return a[sortColumn] - b[sortColumn];
        }
        return String(a[sortColumn]).localeCompare(String(b[sortColumn]));
      } else {
        if (typeof a[sortColumn] === 'number' && typeof b[sortColumn] === 'number') {
          return b[sortColumn] - a[sortColumn];
        }
        return String(b[sortColumn]).localeCompare(String(a[sortColumn]));
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
                  <Image src="/image.svg" alt="image" width={24} height={24} />
                </div>
                <div className={styles.activision}>{item.company}</div>
              </div>
            </TableCell>
            <TableCell>{item.event}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.est_pricing_date}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.proceed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <tfoot>
        <TableRow>
          <TablePagination
            colSpan={6} // Number of columns in the table
            count={totalLength?.totalLength} // Total number of items
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
