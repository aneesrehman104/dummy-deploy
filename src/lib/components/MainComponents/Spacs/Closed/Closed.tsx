import React from "react";
import styles from "./Closed.module.css";
import { useState, useEffect } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
function Closed() {
  const [latestClosed, setLatestClosed] = useState<any>(null);
  const [isLoadingClosed, setIsLoadingClosed] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const getLatestClosed = async () => {
    setIsLoadingClosed(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=latest_closed`
    );
    if (response.status === 200) {
      setLatestClosed(response.data);
      setIsLoadingClosed(false);
    } else {
      setIsLoadingClosed(false);
    }
  };

  useEffect(() => {
    getLatestClosed();
  }, [currentPage]);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const headerArray = [
    {
      name: "Company",
      key: "company",
      type: "string",
    },
    {
      name: "Event",
      key: "event",
      type: "string",
    },
    {
      name: "Status",
      key: "status",
      type: "string",
    },
    {
      name: "Est. Pricing Date",
      key: "est_pricing_date",
      type: "string",
    },
    {
      name: "Price/range",
      key: "price",
      type: "string",
    },
    {
      name: "Proceeds/range",
      key: "proceed",
      type: "string",
    },
  ];
  return (
    <section className={styles.stockstablesection}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className={styles.tableTitle}>Latest Closed SPAC Deals</div>
      </div>
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
          {isLoadingClosed ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              headerArray={headerArray}
              data={latestClosed?.dataset}
              totalLength={latestClosed?.additional_dataset}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              paginate={paginate}
              showPagination
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Closed;
