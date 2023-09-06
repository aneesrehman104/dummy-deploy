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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import dynamic from "next/dynamic";
import Skeleton from "@mui/material/Skeleton";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import newsImage from "@public/newsImage.svg";
import { styled } from "@mui/material/styles";
import styles from "./listing-table.module.css";

const DynamicChart = dynamic(() => import("./events-chart.component"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});

interface PROPS {
  data: any;
  headerArray: any;
  currentPage: number;
  itemsPerPage: number;
  paginate: (pagenumber: any) => void;
  totalLength: number;
  showPagination: boolean;
  setItemPerPage: any;
  isUser: boolean;
  options: boolean;
  isRemoveAble: boolean;
  setRemoveRow: any;
}

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
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<string>("asc");
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  // Dropdown open state variable
  const PaginationuseStyles = styled(Pagination)({
    ul: {
      flexWrap: "nowrap",
      marginTop: "15px",
    },
  });
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

  const sortedData = Array.isArray(data)
    ? [...data].sort((a, b) => {
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
      })
    : [];

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log("===============value", value);
    paginate(value);
  };
  return (
    <>
      <Table style={{ width: "100%" }}>
        <TableHead style={{ width: "100%" }}>
          <TableRow>
            {/* {isRemoveAble ? <TableCell /> : null} */}
            {/* <TableCell>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: 600,
                cursor: "pointer",
                minWidth: 135,
              }}
            >
              {" "}
              Company Logo{" "}
            </div>{" "}
          </TableCell> */}
            {headerArray.map((item: any) => {
              return (
                <TableCell key={item.key} onClick={() => handleSort(item.key)}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: 600,
                      fontSize: "13px",
                      cursor: "pointer",
                      minWidth: "90px",
                      // minWidth: 135,
                    }}
                    className={styles.tableHeadingStyle}
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
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {headerItem.key === "companyName" && "company" ? (
                          <Image
                            src={newsImage}
                            alt="newsImage"
                            width={38}
                            height={38}
                          />
                        ) : (
                          ""
                        )}
                        &nbsp;&nbsp;{item[headerItem.key]}
                      </div>
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
      </Table>
      {showPagination ? (
        <tfoot>
          {options ? (
            <TablePagination
              count={totalLength} // Total number of items
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
            <>
              <Stack spacing={1}>
                <PaginationuseStyles
                  // aria-colspan={1}
                  count={totalLength / itemsPerPage}
                  page={currentPage}
                  onChange={handleChange}
                  color="primary"
                  sx={{
                    "& .Mui-selected": {
                      backgroundColor: "white !important",
                      color: "#1991AC !important",
                      border: "1px solid #1991AC !important",
                      marginRight: "10px !important",
                      minWidth: "26px !important",
                      height: "26px !important",
                      width: "26px !important",
                      fontFamily:"Barlow !important",
                      fontSize:'11px'
                    },
                  }}
                />
              </Stack>
            </>
          )}
        </tfoot>
      ) : null}
    </>
  );
};

export default ListingTrackTable;
