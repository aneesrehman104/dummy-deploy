import React from "react";
import styles from "./losers.module.css";
import { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { TABLETITLESECTION } from "@/lib/ts/constants";
import dynamic from "next/dynamic";
import { LoserInterFace } from "@/lib/ts/interface";

const DynamicChart = dynamic(() => import("./EventsChart"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
function Losers(props: LoserInterFace) {
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [itemsPerPage] = useState(2);
  const data = [
    {
      company: "Navia Studio",
      symbol: "NVAC",
      last30D: [
        10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188, 10, 150, 20, 10,
        133, 188, 500, 10, 150, 20, 10, 188,
      ],
      price: "$10.50",
      daily: "-2.14%",
      vol: "910.0",
    },
    {
      company: "BBC",
      symbol: "SPAC",
      last30D: [
        900, 10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188, 10, 150, 20,
        10, 133, 188, 500, 10, 150, 20, 10,
      ],
      price: "Jun 2 ‘22",
      daily: "-1.66%",
      vol: "1.1k",
    },
    {
      company: "CNN",
      symbol: "Merger",
      last30D: [
        10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188, 10, 150, 20, 10,
        133, 188, 500, 10, 150, 20, 10, 188,
      ],
      price: "May 2 ‘22",
      daily: "-3.66%",
      vol: "1.1k",
    },
    {
      company: "Fair Foods",
      symbol: "IPO",
      last30D: [
        500, 10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188, 10, 150, 20,
        10, 133, 188, 500, 10, 150, 20, 10,
      ],
      price: "Sept 2 ‘22",
      daily: "-2.26%",
      vol: "1.1k",
    },
  ];

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // useEffect(() => {
  //   setCurrentPage(1); // Reset page to 1 when sorting or changing data
  // }, [sortColumn, sortDirection, data]);

  const MyTable = ({ data }: any) => {
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
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => handleSort("company")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.company ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Company
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("symbol")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.symbol ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Symbol
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("last30D")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.last30D ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Last 30D
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("price")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.price ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Price
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("daily")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.daily ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Daily
              </div>
            </TableCell>
            <TableCell onClick={() => handleSort("vol")}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {sortDirection === TABLETITLESECTION.desc &&
                sortColumn === TABLETITLESECTION.vol ? (
                  <ArrowUpwardIcon fontSize="inherit" />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" />
                )}
                Vol
              </div>
            </TableCell>
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
              <TableCell style={{ color: "#E33126" }}>{item.daily}</TableCell>
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
  return (
    <div className={styles.stockstablesection}>
      <div className={styles.tableTitle}>{props.title}</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          <div
            onClick={() => setSelectedTab(0)}
            className={`${styles.headerCell} ${
              selectedTab === 0 && styles.selectedHeader
            }`}
          >
            Daily
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className={`${styles.headerCell} ${
              selectedTab === 1 && styles.selectedHeader
            }`}
          >
            Weekly
          </div>
          <div
            onClick={() => setSelectedTab(2)}
            className={`${styles.headerCell} ${
              selectedTab === 2 && styles.selectedHeader
            }`}
          >
            Monthly
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          <MyTable data={data} />
        </div>
      </div>
    </div>
  );
}

export default Losers;
