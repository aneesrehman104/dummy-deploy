import React from "react";
import styles from "./CardElements.module.css";
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
import proSvg from "../../../../../../public/ProSvg.svg";

import Image from "next/image";

const MyTable = ({
  data,
  itemsPerPage,
  currentPage,
  paginate,
  totalLength,
  setItemPerPage,
  isUser,
  headerArray,
}: any) => {
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isSelectOpen, setIsSelectOpen] = useState(false); // Dropdown open state variable

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
        if (
          typeof a[sortColumn] === "number" &&
          typeof b[sortColumn] === "number"
        ) {
          return a[sortColumn] - b[sortColumn];
        }
        return String(a[sortColumn]).localeCompare(String(b[sortColumn]));
      } else {
        if (
          typeof a[sortColumn] === "number" &&
          typeof b[sortColumn] === "number"
        ) {
          return b[sortColumn] - a[sortColumn];
        }
        return String(b[sortColumn]).localeCompare(String(a[sortColumn]));
      }
    } else {
      return 0;
    }
  });

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItemPerPage(parseInt(event.target.value));
  };

  const handleSelectOpen = () => {
    setIsSelectOpen(true);
  };

  const handleSelectClose = () => {
    setIsSelectOpen(false);
  };

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
            {headerArray.map((headerItem:any) => (
              <TableCell key={headerItem.key}>{item[headerItem.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <tfoot>
        <TableRow>
          <TablePagination
            count={totalLength?.totalLength} // Total number of items
            rowsPerPage={itemsPerPage}
            page={currentPage - 1} // Page number starts from 0
            onPageChange={(event, newPage) => paginate(newPage + 1)} // Event handler for page change
            rowsPerPageOptions={[5, 10, 25, 50]}
            onRowsPerPageChange={handleChangeRowsPerPage} // Hide rows per page options
            SelectProps={{
              open: isUser && isSelectOpen, // Open the dropdown if paid and isSelectOpen is true
              onOpen: handleSelectOpen,
              onClose: handleSelectClose,
            }}
          />
        </TableRow>
      </tfoot>
    </Table>
  );
};
export default MyTable;
