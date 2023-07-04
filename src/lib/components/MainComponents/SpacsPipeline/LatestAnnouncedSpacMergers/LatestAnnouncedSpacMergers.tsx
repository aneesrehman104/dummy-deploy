import React from "react";
import styles from "./LatestAnnouncedSpacMergers.module.css";
import { useState, useEffect } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
function LatestAnnouncedSpacMergers() {
  const [latestAnnounced, setLatestAnnounced] = useState<any>(null);
  const [isLoadingAnnounced, setIsLoadingAnnounced] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const getLatestAnnounced = async () => {
    setIsLoadingAnnounced(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=latest_announced`
    );
    if (response.status === 200) {
      setLatestAnnounced(response.data);
      setIsLoadingAnnounced(false);
    } else {
      setIsLoadingAnnounced(false);
    }
  };

  useEffect(() => {
    getLatestAnnounced();
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
        <div className={styles.tableTitle}>Latest Announced SPAC Mergers</div>
      </div>
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
          {isLoadingAnnounced ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              headerArray={headerArray}
              data={latestAnnounced?.dataset}
              totalLength={latestAnnounced?.additional_dataset}
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

export default LatestAnnouncedSpacMergers;
