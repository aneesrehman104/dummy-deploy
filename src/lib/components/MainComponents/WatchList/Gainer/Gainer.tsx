import React from "react";
import styles from "./gainer.module.css";
import { useState } from "react";
import MyTable from "./functions";
function Gainer() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
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
      daily: "+2.14%",
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
      daily: "+1.66%",
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
      daily: "+3.66%",
      vol: "$150M - $175M",
    },
    {
      company: "Fair Foods",
      symbol: "IPO",
      last30D: [
        500, 10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188, 10, 150, 20,
        10, 133, 188, 500, 10, 150, 20, 10,
      ],
      price: "Sept 2 ‘22",
      daily: "+2.26%",
      vol: "$150M - $175M",
    },
  ];

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Watchlist Gainers</div>
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
          <MyTable
            data={data}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  );
}

export default Gainer;
