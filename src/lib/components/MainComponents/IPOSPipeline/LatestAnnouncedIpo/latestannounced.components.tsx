import React, { Fragment, useEffect } from "react";
import styles from "./LatestAnnouncedMergers.module.css";
import { useState } from "react";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import {headerArray} from './constants'
const itemsPerPage = 5;


interface PROPS {}
const LatestAnnouncedMergers: React.FC<PROPS> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [latestAnnouncedMergersData, setLatestAnnouncedMergersData] =
    useState<any>({
      dataset: [],
      additional_dataset: { totalLength: 20 },
    });
    
  useEffect(() => {
    const getLatestAnnouncedMergersData = async () => {
      setIsLoading(true);
      const response = await getODataWithParams(URLs.ipoOdata, {
        skip: (currentPage - 1) * itemsPerPage,
        top: itemsPerPage,
      });
      console.log(response.data);
      if (response.status === 200 && response.data !== null) {
        setLatestAnnouncedMergersData({
          dataset: response.data,
          additional_dataset: { totalLength: 10 },
        });
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    getLatestAnnouncedMergersData();
  }, [currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Latest Announced IPOs</div>
      <div className={styles.tableContainerInner}>
        <div style={{ overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            latestAnnouncedMergersData && (
              <ListingTrackTable
                data={latestAnnouncedMergersData.dataset}
                headerArray={headerArray}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={latestAnnouncedMergersData?.additional_dataset}
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestAnnouncedMergers;
