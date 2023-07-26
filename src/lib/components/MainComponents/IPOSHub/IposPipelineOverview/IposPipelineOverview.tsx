import React, { Fragment, useEffect } from "react";
import styles from "./IposPipelineOverview.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";

function IposPipelineOverview() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [iPOSTradingIposPipelineOverviewData, setIPOSTradingIposPipelineOverviewData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState(5);

  const getIPOSTradingIposPipelineOverviewData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.iposGainer}?page=${currentPage}&offset=${itemsPerPage}&period=${
        selectedTab === 0 ? "daily" : selectedTab === 1 ? "weekly" : "sinceIPO"
      }&gainOrLoser=gain`
    );
    if (response.status === 200 && response.data !== null) {
      setIPOSTradingIposPipelineOverviewData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIPOSTradingIposPipelineOverviewData();
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Upcoming IPOs", index: 0 },
    { label: "Latest Priced", index: 1 },
    { label: "Recently Filed", index: 2 },
    { label: "Rumored", index: 3 },

  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  const headerArrayUpcomingIPOs = [
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
      name: "Exchange",
      key: "Exchange",
      type: "string",
    },
    {
      name: "Est. Pricing Date",
      key: "EstPricingDate",
      type: "string",
    },
    {
      name: "Price Range",
      key: "PriceRange",
      type: "string",
    },
    {
      name: "Offer Size (M)",
      key: "OfferSize",
      type: "string",
    }
  ];

  const headerArrayLatestPriced = [
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
      name: "Price Date",
      key: "PriceDate",
      type: "string",
    },
    {
      name:"Price",
      key:"price",
      type:"string"
    },
    {
      name: "Offer Size (M)",
      key: "OfferSize",
      type: "string",
    },
    {
      name:"Return from IPO",
      key:"ReturnfromIPO",
      type:"string"
    }
  ];
  const headerArrayRecentlyFiled = [
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
    }
  ];


  const headerArrayRumored = [
    {
      name: "Company Name",
      key: "CompanyName",
      type: "string",
    },
    {
      name: "Rumor Status",
      key: "RumorStatus",
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
  ];
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>IPO Pipeline Overview</div>
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
            iPOSTradingIposPipelineOverviewData && (
              <ListingTrackTable
                data={iPOSTradingIposPipelineOverviewData?.dataset}
                headerArray={
                  selectedTab === 0 ? headerArrayUpcomingIPOs : selectedTab === 1 ? headerArrayLatestPriced : selectedTab === 2 ? headerArrayRecentlyFiled: headerArrayRumored
                }
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={iPOSTradingIposPipelineOverviewData?.additional_dataset}
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default IposPipelineOverview;
