import React, { Fragment, useEffect } from "react";
import styles from "./LatestAnnouncedMergers.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";

function LatestAnnouncedMergers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [latestAnnouncedMergersData, setLatestAnnouncedMergersData] =
    useState<any>({
      dataset: [],
      additional_dataset: { totalLength: 20 },
    });
  const [itemsPerPage] = useState(5);

  const getLatestAnnouncedMergersData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(`${URLs.iposGainer}`);
    if (response.status === 200) {
      setLatestAnnouncedMergersData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLatestAnnouncedMergersData();
  }, [currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Rumored IPOs", index: 0 },
    { label: "SPAC Mergers", index: 1 },
    { label: "All Mergers", index: 2 },
  ];

  const headerArray = [
    {
      name: "Company Name",
      key: "CompanyName",
      type: "string",
    },
    {
      name: "Ticker",
      key: "Ticker",
      type: "string",
    },
    {
      name: "IPO Type",
      key: "IPOType",
      type: "string",
    },
    {
      name: "Pricing Date",
      key: "PricingDate",
      type: "string",
    },
    {
      name: "Price",
      key: "Price",
      type: "string",
    },
    {
      name: "Offer Size (M)",
      key: "OfferSize",
      type: "string",
    },
    {
      name: "Return from IPO",
      key: "ReturnfromIPO",
      type: "string",
    },
  ];

  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Latest Announced Mergers</div>
      <div className={styles.tableContainerInner}>
        <div style={{ overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            latestAnnouncedMergersData && (
              <ListingTrackTable
                data={latestAnnouncedMergersData?.dataset}
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
