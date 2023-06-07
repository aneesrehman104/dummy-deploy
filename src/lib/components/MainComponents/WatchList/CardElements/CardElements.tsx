import React from "react";
import styles from "./CardElements.module.css";
import { useState } from "react";
import MyTable from "./functions";
function CardElements() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage] = useState(2);
  const data = [
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision3",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23T",
    },
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision3",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23T",
    },
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision3",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23T",
    },
  ];
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.stockstablesection}>
      <div className={styles.calenderTabs}>
        <div
          onClick={() => setSelectedTab(0)}
          className={`${styles.headerCell} ${
            selectedTab === 0 && styles.selectedHeader
          }`}
        >
          IPO Watchlist
        </div>
        <div
          onClick={() => setSelectedTab(1)}
          className={`${styles.headerCell} ${
            selectedTab === 1 && styles.selectedHeader
          }`}
        >
          Merger Watchlist
        </div>
        <div
          onClick={() => setSelectedTab(2)}
          className={`${styles.headerCell} ${
            selectedTab === 2 && styles.selectedHeader
          }`}
        >
          SPAC Watchlist
        </div>
      </div>
      <div className={styles.tableTitle}>
        {selectedTab == 0
          ? "IPO Watchlist"
          : selectedTab == 1
          ? "Merger Watchlist"
          : "SPAC Watchlist"}
      </div>
      <div className={styles.tableContainerInner}>
        <div style={{ overflow: "auto" }}>
          <MyTable
            data={data}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default CardElements;
