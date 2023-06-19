import React from "react";
import styles from "./LatestAnnouncedSpacMergers.module.css";
import { useState, useEffect } from "react";
import MyTable from "./functions";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { SkeltonTable } from "@/lib/components/CommonComponents";
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
            <MyTable
              data={latestAnnounced?.dataset}
              totalLength={latestAnnounced?.additional_dataset}
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

export default LatestAnnouncedSpacMergers;
