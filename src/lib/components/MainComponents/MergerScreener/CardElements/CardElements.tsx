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
      <div className={styles.tableTitle}>Card Elements</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          <div
            onClick={() => setSelectedTab(0)}
            className={`${styles.headerCell} ${
              selectedTab === 0 && styles.selectedHeader
            }`}
          >
            All Active SPACs
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className={`${styles.headerCell} ${
              selectedTab === 1 && styles.selectedHeader
            }`}
          >
            Pre-Deal SPACs
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className={`${styles.headerCell} ${
              selectedTab === 2 && styles.selectedHeader
            }`}
          >
            Announced Deals
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className={`${styles.headerCell} ${
              selectedTab === 3 && styles.selectedHeader
            }`}
          >
            De-SPACs
          </div>
        </div>
        <div className={styles.highlightStyle}>
          <span>
            Selected basked of 24 stocks up today an average of&nbsp;{" "}
          </span>
          <span className={styles.backgroundTitle}>+ 5.33%</span>&nbsp;
          <span>with an aggregate market capitalization of&nbsp;</span>
          <span className={styles.backgroundTitle}>$1.5T +$550M</span>
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
    </div>
  );
}

export default CardElements;
