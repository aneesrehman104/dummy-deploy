import React from "react";
import styles from "./losers.module.css";
import { LoserInterFace } from "@/lib/ts/interface";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import {
  headerDailyTradingArray,
  headerWeeklyTradingArray,
  headerMonthlyTradingArray,
} from "./constants";
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

  return (
    <section className={styles.stockstablesection}>
      <header className={styles.tableTitle}>{props.title}</header>
      <div className={styles.tableContainerInner}>
        <section style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
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
        </section>
        <section style={{ overflow: "auto" }}>
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
        </section>
      </div>
    </section>
  );
};

export default Losers;
