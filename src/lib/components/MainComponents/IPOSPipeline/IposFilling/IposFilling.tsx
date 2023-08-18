import React, { Fragment, useEffect } from "react";
import styles from "./IposFilling.module.css";
import { useState } from "react";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import { get } from "http";

function getDateDaysAgo(daysAgo: number): string {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - daysAgo);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}

const headerArrayLatestFilings = [
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
    name: "Exchange",
    key: "exchange",
    type: "string",
  },
  {
    name: "Filing Date",
    key: "s1InitialFilingDate",
    type: "string",
  },
  {
    name: "Proposed Price",
    key: "expectedIpoPrice",
    type: "string",
  },
  {
    name: "Offer Size (M)",
    key: "ipoOfferingSize",
    type: "string",
  },
];

const headerArrayLatestAmendedFilings = [
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
    name: "Exchange",
    key: "exchange",
    type: "string",
  },
  {
    name: "Amended Filing Date",
    key: "amendedS1FilingDate",
    type: "string",
  },
  {
    name: "Proposed Price",
    key: "expectedIpoPrice",
    type: "string",
  },
  {
    name: "Offer Size (M)",
    key: "ipoOfferingSize",
    type: "string",
  },
];
const headerArrayWithdrawn = [
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
    name: "Exchange",
    key: "exchange",
    type: "string",
  },
  {
    name: "Withdrawn Date",
    key: "s1WithdrawalDate",
    type: "string",
  },
  {
    name: "Withdrawn Proposed Price",
    key: "expectedIpoPrice",
    type: "string",
  },
  {
    name: "Withdrawn Offer Size (M)",
    key: "ipoOfferingSize",
    type: "string",
  },
];

const Mapper = {
  latest: "Filed",
  amended: "Filed",
  withdrawn: "Withdrawn",
}

const NameMapper = {
  latest: `s1InitialFilingDate ge '${getDateDaysAgo(90)}'`,
  amended: `amendedS1FilingDate ge '${getDateDaysAgo(90)}'`,
  withdrawn: `s1WithdrawalDate ge '${getDateDaysAgo(90)}'`,
}

function IposFilling() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [IposFillingData, setIposFillingData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState(5);
  const tabValues: { [key: number]: "latest" | "amended" | "withdrawn" } = {
    0: "latest",
    1: "amended",
    2: "withdrawn",
  };
  const getIposFillingData = async () => {
    setIsLoading(true);
    const response = await getODataWithParams(URLs.ipoOdata, {
      skip: (currentPage - 1) * itemsPerPage,
      top: itemsPerPage,
      filter: `ipoStatus eq '${Mapper[tabValues[selectedTab]]}' and ${NameMapper[tabValues[selectedTab]]} `,
    });
    if (response.status === 200 && response.data !== null) {
      setIposFillingData({dataset: response.data, additional_dataset: { totalLength: 10 }});
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIposFillingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
