import React from "react";
import styles from "./LatestAnnouncedSpacMergers.module.css";
import { useState, useEffect } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
  interface PROPS {}

  const LatestAnnouncedSpacMergers: React.FC<PROPS> = () => {
  const [latestAnnounced, setLatestAnnounced] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [isLoadingAnnounced, setIsLoadingAnnounced] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);

  const getLatestAnnounced = async () => {
    setIsLoadingAnnounced(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=latest_announced`
    );
    if (response.status === 200 && response.data !== null) {
      setLatestAnnounced(response.data);
      setIsLoadingAnnounced(false);
    } else {
      setIsLoadingAnnounced(false);
    }
  };

  useEffect(() => {
    getLatestAnnounced();
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
      name: "Announced Date",
      key: "announcedDate",
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
