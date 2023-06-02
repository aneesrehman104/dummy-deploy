import React from "react";
import styles from "./GrapevineGraveyard.module.css";
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
import Image from "next/image";

const DynamicChart = dynamic(() => import("./EventsChart"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
function GrapevineGraveyard() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [itemsPerPage] = useState(2);
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

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // useEffect(() => {
  //   setCurrentPage(1); // Reset page to 1 when sorting or changing data
  // }, [sortColumn, sortDirection, data]);

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
                    sortColumn === TABLETITLESECTION.company ? (
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
      <div className={styles.tableTitle}>SPAC Merger Grapevine & Graveyard</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          <div
            onClick={() => setSelectedTab(0)}
            className={`${styles.headerCell} ${
              selectedTab === 0 && styles.selectedHeader
            }`}
          >
            Rumored Mergers
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className={`${styles.headerCell} ${
              selectedTab === 1 && styles.selectedHeader
            }`}
          >
            Latest Failed Mergers
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          <MyTable data={data} />
        </div>
      </div>
    </div>
  );
}

export default GrapevineGraveyard;
