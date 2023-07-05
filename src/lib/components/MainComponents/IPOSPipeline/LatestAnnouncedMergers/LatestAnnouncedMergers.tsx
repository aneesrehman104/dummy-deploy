import React from "react";
import styles from "./LatestAnnouncedMergers.module.css";
import { useState } from "react";
import MyTable from "./functions";
function LatestAnnouncedMergers() {
  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage] = useState(5);
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
      <div className={styles.tableTitle}>Latest IPOs</div>
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
    </section>
  );
}

export default LatestAnnouncedMergers;
