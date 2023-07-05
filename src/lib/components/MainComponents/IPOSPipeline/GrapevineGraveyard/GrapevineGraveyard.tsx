import React from "react";
import styles from "./GrapevineGraveyard.module.css";
import { useState } from "react";
import MyTable from "./functions";
function GrapevineGraveyard() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

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

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>IPO Grapevine</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          <div
            onClick={() => setSelectedTab(0)}
            className={`${styles.headerCell} ${
              selectedTab === 0 && styles.selectedHeader
            }`}
          >
            Rumored IPOs
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className={`${styles.headerCell} ${
              selectedTab === 1 && styles.selectedHeader
            }`}
          >
            Stalled IPOs
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className={`${styles.headerCell} ${
              selectedTab === 2 && styles.selectedHeader
            }`}
          >
           Audience Wishlist IPOs
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

export default GrapevineGraveyard;
