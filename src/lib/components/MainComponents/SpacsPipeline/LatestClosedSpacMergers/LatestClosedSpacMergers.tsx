import React from "react";
import styles from "./LatestClosedSpacMergers.module.css";
import { useState, useEffect } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
function LatestClosedSpacMergers() {
  const [latestClosed, setLatestClosed] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
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
      name: "Target",
      key: "target",
      type: "string",
    },
    {
      name: "Acquirer",
      key: "Acquirer",
      type: "string",
    },
    {
      name: "Announced Date",
      key: "AnnouncedDate",
      type: "string",
    },
    {
      name: "Valuation",
      key: "Valuation",
      type: "string",
    },
    {
      name: "DA Link",
      key: "DALink",
      type: "string",
    },
    {
      name: "InvestorPres",
      key: "InvestorPres",
      type: "string",
    },
    {
      name: "View Deal Page",
      key: "ViewDealPage",
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
        <div className={styles.tableTitle}>Latest Closed SPAC Mergers</div>
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

export default LatestClosedSpacMergers;
