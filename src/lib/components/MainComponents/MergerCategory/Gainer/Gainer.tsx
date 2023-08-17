import React, { Fragment, useEffect } from "react";
import styles from "./gainer.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";

  interface PROPS {}

const Gainer: React.FC<PROPS> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mergersTradingLoserData, setMergersTradingLoserData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(5);

  const getMergersTradingLoserData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.mergerGainer}?page=${currentPage}&offset=${itemsPerPage}&period=${
        selectedTab === 0 ? "daily" : selectedTab === 1 ? "weekly" : "sinceMerger"
      }&gainOrLoser=gain`
    );
    if (response.status === 200 && response.data !== null) {
      setMergersTradingLoserData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMergersTradingLoserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Daily", index: 0 },
    { label: "Weekly", index: 1 },
    { label: "Since Merger Closing", index: 2 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  const headerArrayDaily = [
    {
      name: "Deal Name",
      key: "dealName",
      type: "string",
    },
    {
      name: "Company",
      key: "company",
      type: "string",
    },
    {
      name: "Last 30D",
      key: "last30D",
      type: "graph",
    },
    {
      name: "Price",
      key: "price",
      type: "string",
    },
    {
      name: "Daily",
      key: "dailyChange",
      type: "gainer",
    },
    {
      name: "Vol",
      key: "volume",
      type: "string",
    },
  ];

  const headerArrayWeekly = [
    {
      name: "Deal Name",
      key: "dealName",
      type: "string",
    },
    {
      name: "Company",
      key: "company",
      type: "string",
    },
    {
      name: "Last 30D",
      key: "last30D",
      type: "graph",
    },
    {
      name: "Price",
      key: "price",
      type: "string",
    },
    {
      name: "Weekly",
      key: "weeklyChange",
      type: "gainer",
    },
    {
      name: "Vol",
      key: "volume",
      type: "string",
    },
  ];


  const headerArraysinceIpo = [
    {
      name: "Deal Name",
      key: "dealName",
      type: "string",
    },
    {
      name: "Company",
      key: "company",
      type: "string",
    },
    {
      name: "Last 30D",
      key: "last30D",
      type: "graph",
    },
    {
      name: "Price",
      key: "price",
      type: "string",
    },
    {
      name: "Since Merger",
      key: "sinceMerger",
      type: "gainer",
    },
    {
      name: "Vol",
      key: "volume",
      type: "string",
    },
  ];
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Gainers: Past Year Closed Mergers</div>
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
            mergersTradingLoserData && (
              <ListingTrackTable
                data={mergersTradingLoserData?.dataset}
                headerArray={
                  selectedTab === 0 ? headerArrayDaily : selectedTab === 1 ? headerArrayWeekly : headerArraysinceIpo
                }
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={mergersTradingLoserData?.additional_dataset}
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Gainer;
