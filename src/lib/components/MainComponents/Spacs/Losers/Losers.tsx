import React from "react";
import styles from "./losers.module.css";
import { LoserInterFace } from "@/lib/ts/interface";
import MyTable from "./functions";
import { SkeltonTable } from "@/lib/components/CommonComponents";
function Losers(props: LoserInterFace) {
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
              <MyTable
                data={props?.data?.dataset}
                itemsPerPage={props.itemsPerPage}
                currentPage={props.spacsTradingLoserDataCurrentPage}
                paginate={paginate}
                spacsTradingLoserDataSelectedTab={
                  props.spacsTradingLoserDataSelectedTab
                }
                totalLength={props?.data?.additional_dataset}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Losers;
