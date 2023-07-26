import React from "react";
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
import CloseIcon from "@mui/icons-material/Close";
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
  setItemPerPage,
  isUser,
  options,
  isRemoveAble,
  setRemoveRow,
}: any) => {
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isSelectOpen, setIsSelectOpen] = useState(false); // Dropdown open state variable

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
    // setCurrentPage(currentPage);
  };

  const handleSelectOpen = () => {
    setIsSelectOpen(true);
  };

  const handleSelectClose = () => {
    setIsSelectOpen(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <Table style={{ width: "100%" }}>
      <TableHead style={{ width: "100%" }}>
        <TableRow>
          {isRemoveAble ? <TableCell /> : null}
          {headerArray.map((item: any) => {
            return (
              <TableCell key={item.key} onClick={() => handleSort(item.key)}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 600,
                    cursor: "pointer",
                    minWidth: 135,
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
        {sortedData.map((item: any, index: number) => (
          <>
            <TableRow key={index}>
              {isRemoveAble ? (
                <TableCell>
                  <CloseIcon
                    sx={{ fontSize: 40, color: "red" }}
                    onClick={() => {
                      setRemoveRow(item.id);
                    }}
                  />
                </TableCell>
              ) : null}
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
          </>
        ))}
      </TableBody>
      {showPagination ? (
        <tfoot>
          <TableRow>
            {options ? (
              <TablePagination
                // colSpan={6} // Number of columns in the table
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
            ) : (
              <TablePagination
                // colSpan={6} // Number of columns in the table
                count={totalLength?.totalLength} // Total number of items
                rowsPerPage={itemsPerPage}
                page={currentPage - 1} // Page number starts from 0
                onPageChange={(event: any, newPage: any) =>
                  paginate(newPage + 1)
                } // Event handler for page change
                rowsPerPageOptions={[]} // Hide rows per page options
              />
            )}
          </TableRow>
        </tfoot>
      ) : null}
    </Table>
  );
};

export default ListingTrackTable;
