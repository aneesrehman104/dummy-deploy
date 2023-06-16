import React from "react";
import styles from "./LatestClosedSpacMergers.module.css";
import { useState, useEffect } from "react";
import MyTable from "./functions";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { SkeltonTable } from "@/lib/components/CommonComponents";
function LatestClosedSpacMergers() {
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
  return (
    <section className={styles.stockstablesection}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className={styles.tableTitle}>Latest Closed  SPAC Mergers</div>
      </div>
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
          {isLoadingClosed ? (
            <SkeltonTable />
          ) : (
            <MyTable
              data={latestClosed?.dataset}
              totalLength={latestClosed?.additional_dataset}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              paginate={paginate}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default LatestClosedSpacMergers;
