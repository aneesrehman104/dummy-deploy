import React from "react";
import styles from "./gainer.module.css";
import { GainerInterFace } from "@/lib/ts/interface";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import {
  headerDailyTradingArray,
  headerWeeklyTradingArray,
  headerMonthlyTradingArray,
} from "./constants";

const Gainer = (props: GainerInterFace) => {
  const paginate = (pageNumber: number) => {
    props.setSpacsTradingGainerDataCurrentPage(pageNumber);
  };
  const handleTabClick = (tabIndex: any) => {
    props.setSpacsTradingGainerDataSelectedTab(tabIndex);
    props.setSpacsTradingGainerDataCurrentPage(1);
  };

  const tabData = [
    { label: "Daily", index: 0 },
    { label: "Weekly", index: 1 },
    { label: "Since Merger Closing", index: 2 },
  ];
  return (
    <main className={styles.stockstablesection}>
      <header className={styles.tableTitle}>{props.title}</header>
      <div className={styles.tableContainerInner}>
        <section style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          {tabData.map(({ label, index }) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${styles.headerCell} ${
                props.spacsTradingGainerDataSelectedTab === index &&
                styles.selectedHeader
              }`}
            >
              {label}
            </div>
          ))}
        </section>
        <section style={{ overflow: "auto" }}>
          {props.isLoading ? (
            <SkeltonTable />
          ) : (
            props?.data && (
              <ListingTrackTable
                data={props?.data?.dataset}
                headerArray={
                  props.spacsTradingGainerDataSelectedTab === 0
                    ? headerDailyTradingArray
                    : props.spacsTradingGainerDataSelectedTab === 1
                    ? headerWeeklyTradingArray
                    : headerMonthlyTradingArray
                }
                itemsPerPage={props.itemsPerPage}
                currentPage={props.spacsTradingGainerDataCurrentPage}
                paginate={paginate}
                totalLength={props?.data?.additional_dataset?.totalLength}
                showPagination
              />
            )
          )}
        </section>
      </div>
    </main>
  );
};

export default Gainer;
