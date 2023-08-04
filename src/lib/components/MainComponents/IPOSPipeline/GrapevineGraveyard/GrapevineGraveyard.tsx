import React, { Fragment, useEffect } from "react";
import styles from "./GrapevineGraveyard.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";

function GrapevineGraveyard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [GrapevineGraveyardData, setGrapevineGraveyardData] =
    useState<any>({
      dataset: [],
      additional_dataset: { totalLength: 20 },
    });
  const [itemsPerPage] = useState(5);
  const tabValues: { [key: number]: string } = {
    0: "rumor",
    1: "stalledIPO",
    2: "wishlistIPO",
  };
  const getGrapevineGraveyardData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.iposPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=${tabValues[selectedTab]}`
    );
    if (response.status === 200 && response.data !== null) {
      setGrapevineGraveyardData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGrapevineGraveyardData();
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Rumored IPOs", index: 0 },
    { label: "Stalled IPOs", index: 1 },
    { label: "Wishlist IPOs", index: 2 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  const headerArrayRumoredIPOs = [
    {
      name: "Company Name",
      key: "companyName",
      type: "string",
    },
    {
      name: "Rumored Date",
      key: "rumorDate",
      type: "string",
    },
    {
      name: "Rumored Market Cap (M)",
      key: "rumorMarketCap",
      type: "string",
    },
    {
      name: "Rumored IPO Offering Size (M)",
      key: "rumorOfferingSize",
      type: "string",
    },
    {
      name: "Rumor Source",
      key: "rumorPublication",
      type: "string",
    },
    {
      name: "Rumor Link",
      key: "rumorSourceLink",
      type: "string",
    },
  ];

  const headerArrayStalledIPOs = [
    {
      name: "Company Name",
      key: "companyName",
      type: "string",
    },
    {
      name: "IPO Stalled Status",
      key: "ipoStatus",
      type: "string",
    },
    {
      name: "Stalled Date",
      key: "stalledDate",
      type: "string",
    },
    {
      name: "Offering Size (M)",
      key: "offeringSize",
      type: "string",
    },
    {
      name: "Proposed Price Range",
      key: "proposedPriceRange",
      type: "string",
    },
    {
      name: "Proposed Market Cap (M)",
      key: "expMarketCap",
      type: "string",
    },
  ];
  const headerArrayWishlistIPOs = [
    {
      name: "Company Name",
      key: "companyName",
      type: "string",
    },
    {
      name: "Wishlist Rank",
      key: "wishlistRank",
      type: "string",
    },
    {
      name: "Industry",
      key: "industry",
      type: "string",
    },
    {
      name: "Last Private Valuation (M)",
      key: "lastPrivateValuation",
      type: "string",
    },
    {
      name: "Last Raise Date",
      key: "lastRaiseDate",
      type: "string",
    },
    {
      name: "Last Private Raise (M)",
      key: "lastPrivateRaise",
      type: "string",
    },
  ];
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>IPO Grapevine</div>
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
            GrapevineGraveyardData && (
              <ListingTrackTable
                data={GrapevineGraveyardData?.dataset}
                headerArray={
                  selectedTab === 0
                    ? headerArrayRumoredIPOs
                    : selectedTab === 1
                    ? headerArrayStalledIPOs
                    : headerArrayWishlistIPOs
                }
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={GrapevineGraveyardData?.additional_dataset}
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default GrapevineGraveyard;
