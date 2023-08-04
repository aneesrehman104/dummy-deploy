import React, { Fragment, useEffect } from "react";
import styles from "./LatestClosedMergers.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";

function LatestClosedMergers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [LatestClosedMergersData, setLatestClosedMergersData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState(5);
  const tabValues: { [key: number]: string } = {
    0: "thisWeek",
    1: "nextWeek",
    2: "afterNextWeek",
  };
  const getLatestClosedMergersData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.iposPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=${tabValues[selectedTab]}`
    );
    if (response.status === 200 && response.data !== null) {
      setLatestClosedMergersData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLatestClosedMergersData();
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Expected This Week", index: 0 },
    { label: "Next Week", index: 1 },
    { label: "After Next Week", index: 2 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  const headerArrayExpectedThisWeek = [
    {
      name: "Company Name",
      key: "company",
      type: "string",
    },
    {
      name: "Ticker",
      key: "ticker",
      type: "string",
    },
    {
      name: "Exchange",
      key: "exchange",
      type: "string",
    },
    {
      name: "Est. Pricing Date",
      key: "extPriceDate",
      type: "string",
    },
    {
      name: "Price Range",
      key: "extPriceRange",
      type: "string",
    },
    {
      name: "Offer Size (M)",
      key: "OfferSize",
      type: "offeringSize",
    },
  ];

  const headerArrayNextWeek = [
    {
      name: "Company Name",
      key: "company",
      type: "string",
    },
    {
      name: "Ticker",
      key: "ticket",
      type: "string",
    },
    {
      name: "Exchange",
      key: "exchange",
      type: "string",
    },
    {
      name: "Est. Pricing Date",
      key: "extPriceDate",
      type: "string",
    },
    {
      name: "Price Range",
      key: "extPriceRange",
      type: "string",
    },
    {
      name: "Offer Size (M)",
      key: "offeringSize",
      type: "string",
    },
  ];
  const headerArrayAfterNextWeek = [
    {
      name: "Company Name",
      key: "company",
      type: "string",
    },
    {
      name: "Ticker",
      key: "ticket",
      type: "string",
    },
    {
      name: "Exchange",
      key: "exchange",
      type: "string",
    },
    {
      name: "Est. Pricing Date",
      key: "extPriceDate",
      type: "string",
    },
    {
      name: "Price Range",
      key: "extPriceRange",
      type: "string",
    },
    {
      name: "Offer Size (M)",
      key: "offeringSize",
      type: "string",
    },
  ];
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>IPO Calendar</div>
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
            LatestClosedMergersData && (
              <ListingTrackTable
                data={LatestClosedMergersData?.dataset}
                headerArray={
                  selectedTab === 0
                    ? headerArrayExpectedThisWeek
                    : selectedTab === 1
                    ? headerArrayNextWeek
                    : headerArrayAfterNextWeek
                }
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={LatestClosedMergersData?.additional_dataset}
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default LatestClosedMergers;
