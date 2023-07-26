import React, { Fragment, useEffect } from "react";
import styles from "./IposFilling.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";

function IposFilling() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [IposFillingData, setIposFillingData] =
    useState<any>({
      dataset: [],
      additional_dataset: { totalLength: 20 },
    });
  const [itemsPerPage] = useState(5);

  const getIposFillingData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(`${URLs.iposGainer}`);
    if (response.status === 200 && response.data !== null) {
      setIposFillingData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIposFillingData();
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Latest Filings", index: 0 },
    { label: "Latest Amended Filings", index: 1 },
    { label: "Withdrawn", index: 2 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  const headerArrayLatestFilings = [
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
      name: "Exchange",
      key: "Exchange",
      type: "string",
    },
    {
      name: "Filing Date",
      key: "FilingDate",
      type: "string",
    },
    {
      name: "Proposed Price",
      key: "ProposedPrice",
      type: "string",
    },
    {
      name: "Offer Size (M)",
      key: "OfferSize",
      type: "string",
    },
  ];

  const headerArrayLatestAmendedFilings = [
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
      name: "Exchange",
      key: "Exchange",
      type: "string",
    },
    {
      name: "Amended Filing Date",
      key: "AmendedFilingDate",
      type: "string",
    },
    {
      name: "Proposed Price",
      key: "ProposedPrice",
      type: "string",
    },
    {
      name: "Offer Size (M)",
      key: "OfferSize",
      type: "string",
    },
  ];
  const headerArrayWithdrawn = [
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
      name: "Exchange",
      key: "Exchange",
      type: "string",
    },
    {
      name: "Withdrawn Date",
      key: "WithdrawnDate",
      type: "string",
    },
    {
      name: "Withdrawn Proposed Price",
      key: "WithdrawnProposedPrice",
      type: "string",
    },
    {
      name: "Withdrawn Offer Size (M)",
      key: "WithdrawnOfferSize",
      type: "string",
    },
  ];
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>IPO Filings</div>
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
            IposFillingData && (
              <ListingTrackTable
                data={IposFillingData?.dataset}
                headerArray={
                  selectedTab === 0
                    ? headerArrayLatestFilings
                    : selectedTab === 1
                    ? headerArrayLatestAmendedFilings
                    : headerArrayWithdrawn
                }
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={IposFillingData?.additional_dataset}
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default IposFilling;
