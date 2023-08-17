import React from "react";
import styles from "./Closed.module.css";
import { useState, useEffect } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
  interface PROPS {}

  const Closed: React.FC<PROPS> = () => {
  const [latestClosed, setLatestClosed] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [isLoadingClosed, setIsLoadingClosed] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);

  const getLatestClosed = async () => {
    setIsLoadingClosed(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=latest_closed`
    );
    if (response.status === 200 && response.data !== null) {
      setLatestClosed(response.data);
      setIsLoadingClosed(false);
    } else {
      setIsLoadingClosed(false);
    }
  };

  useEffect(() => {
    getLatestClosed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      key: "acquirer",
      type: "string",
    },
    {
      name: "Closed Date",
      key: "closedDate",
      type: "string",
    },
    {
      name: "Valuation",
      key: "valuation",
      type: "string",
    },
    {
      name: "DA Link",
      key: "dALink",
      type: "string",
    },
    {
      name: "InvestorPres",
      key: "investorPres",
      type: "string",
    },
    {
      name: "View Deal Page",
      key: "viewDealPage",
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

export default Closed;
