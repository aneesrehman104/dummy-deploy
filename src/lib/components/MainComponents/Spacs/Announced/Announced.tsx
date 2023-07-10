import React from "react";
import styles from "./Announced.module.css";
import { useState, useEffect } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,  
} from "@/lib/components/CommonComponents";
function Announced() {
  const [latestAnnounced, setLatestAnnounced] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
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

export default Announced;
