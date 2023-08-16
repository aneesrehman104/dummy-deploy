import React, { Fragment, useEffect } from "react";
import styles from "./LatestAnnouncedMergers.module.css";
import { useState } from "react";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
const itemsPerPage = 5;
const headerArray = [
  {
    name: "Company Name",
    key: "companyName",
    type: "string",
  },
  {
    name: "Ticker",
    key: "companySymbol",
    type: "string",
  },
  {
    name: "IPO Type",
    key: "ipoType",
    type: "string",
  },
  {
    name: "Pricing Date",
    key: "expectedIpoDate",
    type: "string",
  },
  {
    name: "Price",
    key: "expectedIpoPrice",
    type: "string",
  },
  {
    name: "Offer Size (M)",
    key: "ipoOfferingSize",
    type: "string",
  },
  // {
  //   name: "Return from IPO",
  //   key: "returnFromIpo",
  //   type: "string",
  // },
];

function LatestAnnouncedMergers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
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
        setLatestAnnouncedMergersData(response.data);
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
                data={latestAnnouncedMergersData}
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
}

export default LatestAnnouncedMergers;
