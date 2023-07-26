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

  const getGrapevineGraveyardData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(`${URLs.iposGainer}`);
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
      key: "CompanyName",
      type: "string",
    },
    {
      name: "Rumored Date",
      key: "RumoredDate",
      type: "string",
    },
    {
      name: "Rumored Market Cap (M)",
      key: "RumoredMarketCap",
      type: "string",
    },
    {
      name: "Rumored IPO Offering Size (M)",
      key: "RumoredIPOOfferingSize",
      type: "string",
    },
    {
      name: "Rumor Source",
      key: "RumorSource",
      type: "string",
    },
    {
      name: "Rumor Link",
      key: "RumorLink",
      type: "string",
    },
  ];

  const headerArrayStalledIPOs = [
    {
      name: "Company Name",
      key: "CompanyName",
      type: "string",
    },
    {
      name: "IPO Stalled Status",
      key: "IPOStalledStatus",
      type: "string",
    },
    {
      name: "Stalled Date",
      key: "StalledDate",
      type: "string",
    },
    {
      name: "Offering Size (M)",
      key: "OfferingSize",
      type: "string",
    },
    {
      name: "Proposed Price Range",
      key: "ProposedPriceRange",
      type: "string",
    },
    {
      name: "Proposed Market Cap (M)",
      key: "ProposedMarketCap",
      type: "string",
    },
  ];
  const headerArrayWishlistIPOs = [
    {
      name: "Company Name",
      key: "CompanyName",
      type: "string",
    },
    {
      name: "Wishlist Rank",
      key: "WishlistRank",
      type: "string",
    },
    {
      name: "Industry",
      key: "Industry",
      type: "string",
    },
    {
      name: "Last Private Valuation (M)",
      key: "LastPrivateValuation",
      type: "string",
    },
    {
      name: "Last Raise Date",
      key: "LastRaiseDate",
      type: "string",
    },
    {
      name: "Last Private Raise (M)",
      key: "LastPrivateRaise",
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
