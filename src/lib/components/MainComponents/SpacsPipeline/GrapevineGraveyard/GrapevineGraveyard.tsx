import React, { useEffect, useState } from "react";
import styles from "./GrapevineGraveyard.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
function GrapevineGraveyard() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [grapevineGraveyardData, setGrapevineGraveyardData] = useState<any>();
  const [itemsPerPage] = useState(5);

  const tabData = [
    { label: "Rumored Mergers", index: 0 },
    { label: "Latest Failed Mergers", index: 1 },
    { label: "Latest Talks Ended", index: 2 },
  ];
  const tabValues: { [key: number]: string } = {
    0: "rumor",
    1: "latest_failed",
    2: "other",
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

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  const getLatestClosed = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=grapevine&subtype=${tabValues[selectedTab]}`
    );
    if (response.status === 200) {
      setGrapevineGraveyardData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLatestClosed();
  }, [selectedTab, currentPage]);

  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>SPAC Merger Grapevine & Graveyard</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          {tabData.map(({ label, index }) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${styles.headerCell} ${
                selectedTab === index && styles.selectedHeader
              }`}
            >
              {label}
            </div>
          ))}
        </div>
        <div style={{ overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              headerArray={headerArray}
              data={grapevineGraveyardData?.dataset}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              paginate={paginate}
              totalLength={grapevineGraveyardData?.additional_dataset}
              showPagination
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default GrapevineGraveyard;
