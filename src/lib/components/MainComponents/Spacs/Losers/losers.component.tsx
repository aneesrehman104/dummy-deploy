import React from "react";
import styles from "./losers.module.css";
import { LoserInterFace } from "@/lib/ts/interface";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
const Losers = (props: LoserInterFace) => {
  const paginate = (pageNumber: number) => {
    props.setSpacsTradingLoserDataCurrentPage(pageNumber);
  };

  const handleTabClick = (tabIndex: any) => {
    props.setSpacsTradingLoserDataSelectedTab(tabIndex);
    props.setSpacsTradingLoserDataCurrentPage(1);
  };
  const tabData = [
    { label: "Daily", index: 0 },
    { label: "Weekly", index: 1 },
    { label: "Since Merger Closing", index: 2 },
  ];

  const headerDailyTradingArray = [
    {
      name: "Company",
      key: "company",
      type: "string",
    },
    {
      name: "Symbol",
      key: "symbol",
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
      key: "daily",
      type: "loser",
    },
    {
      name: "Vol",
      key: "vol",
      type: "string",
    },
  ];
  const headerWeeklyTradingArray = [
    {
      name: "Company",
      key: "company",
      type: "string",
    },
    {
      name: "Symbol",
      key: "symbol",
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
      key: "weekly",
      type: "loser",
    },
    {
      name: "Vol",
      key: "vol",
      type: "string",
    },
  ];
  const headerMonthlyTradingArray = [
    {
      name: "Company",
      key: "company",
      type: "string",
    },
    {
      name: "Symbol",
      key: "symbol",
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
      name: "Since Merger Closing",
      key: "merger_closing",
      type: "string",
    },
    {
      name: "Vol",
      key: "vol",
      type: "string",
    },
  ];
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>{props.title}</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          {tabData.map(({ label, index }) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${styles.headerCell} ${
                props.spacsTradingLoserDataSelectedTab === index &&
                styles.selectedHeader
              }`}
            >
              {label}
            </div>
          ))}
        </div>
        <div style={{ overflow: "auto" }}>
          {props.isLoadingLooser ? (
            <SkeltonTable />
          ) : (
            props?.data && (
              <ListingTrackTable
                data={props?.data?.dataset}
                headerArray={
                  props.spacsTradingLoserDataSelectedTab === 0
                    ? headerDailyTradingArray
                    : props.spacsTradingLoserDataSelectedTab === 1
                    ? headerWeeklyTradingArray
                    : headerMonthlyTradingArray
                }
                itemsPerPage={props.itemsPerPage}
                currentPage={props.spacsTradingLoserDataCurrentPage}
                paginate={paginate}
                totalLength={props?.data?.additional_dataset}
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Losers;
