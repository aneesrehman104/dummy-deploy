import React, { Fragment, useEffect } from "react";
import styles from "./Closed.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
interface PROPS {}

const Closed: React.FC<PROPS> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [latestClosedMergersData, setLatestClosedMergersData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(5);

  const getLatestClosedMergersData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.mergerPipeLine}?type=closed?subtype=${
        selectedTab === 0 ? "exSpac" : selectedTab == 1 ? "Spac" : "all"
      }`
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Mergers (ex. SPACs)", index: 0 },
    { label: "SPAC Mergers", index: 1 },
    { label: "All Mergers", index: 2 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  const headerArrayMergers = [
    {
      name: "Target",
      key: "targetCompanyName",
      type: "string",
    },
    {
      name: "Acquirer",
      key: "acquirerCompanyName",
      type: "string",
    },
    {
      name: "Closed Date",
      key: "closedDate",
      type: "string",
    },
    {
      name: "Valuation",
      key: "valuation",
      type: "string",
    },
    {
      name: "Premium (at Deal)",
      key: "premDeal",
      type: "string",
    },
    {
      name: "Target Industry",
      key: "targetIndustry",
      type: "string",
    },
    {
      name: "View Deal Page",
      key: "id",
      type: "string",
    },
  ];

  const headerArraySPACMergers = [
    {
      name: "Target",
      key: "targetCompanyName",
      type: "string",
    },
    {
      name: "Acquirer",
      key: "acquirerCompanyName",
      type: "string",
    },
    {
      name: "Closed Date",
      key: "closedDate",
      type: "string",
    },
    {
      name: "Valuation",
      key: "valuation",
      type: "string",
    },
    {
      name: "DA Link",
      key: "daLink",
      type: "string",
    },
    {
      name: "Investor Pres.",
      key: "investorLink",
      type: "string",
    },
  ];
  const headerArrayAllMergers = [
    {
      name: "Target",
      key: "targetCompanyName",
      type: "string",
    },
    {
      name: "Acquirer",
      key: "acquirerCompanyName",
      type: "string",
    },
    {
      name: "Closed Date",
      key: "closedDate",
      type: "string",
    },
    {
      name: "Deal Type",
      key: "dealType",
      type: "string",
    },
    {
      name: "Valuation",
      key: "valuation",
      type: "string",
    },
    {
      name: "Premium (at Deal)",
      key: "premDeal",
      type: "string",
    },
  ];
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Latest Closed Mergers</div>
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
            latestClosedMergersData && (
              <ListingTrackTable
                data={latestClosedMergersData?.dataset}
                headerArray={
                  selectedTab === 0
                    ? headerArrayMergers
                    : selectedTab === 1
                    ? headerArraySPACMergers
                    : headerArrayAllMergers
                }
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={latestClosedMergersData?.additional_dataset}
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Closed;
