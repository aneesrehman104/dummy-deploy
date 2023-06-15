import React from "react";
import styles from "./losers.module.css";
import { useState } from "react";
import { LoserInterFace } from "@/lib/ts/interface";
import MyTable from "./functions";
import Skeleton from "@mui/material/Skeleton";

function Losers(props: LoserInterFace) {
  const paginate = (pageNumber: number) => {
    props.setSpacsTradingLoserDataCurrentPage(pageNumber);
  };
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>{props.title}</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          <div
            onClick={() => {
              props.setSpacsTradingLoserDataSelectedTab(0);
              props.setSpacsTradingLoserDataCurrentPage(1);
            }}
            className={`${styles.headerCell} ${
              props.spacsTradingLoserDataSelectedTab === 0 &&
              styles.selectedHeader
            }`}
          >
            Daily
          </div>
          <div
            onClick={() => {
              props.setSpacsTradingLoserDataSelectedTab(1);
              props.setSpacsTradingLoserDataCurrentPage(1);
            }}
            className={`${styles.headerCell} ${
              props.spacsTradingLoserDataSelectedTab === 1 &&
              styles.selectedHeader
            }`}
          >
            Weekly
          </div>
          <div
            onClick={() => {
              props.setSpacsTradingLoserDataSelectedTab(2);
              props.setSpacsTradingLoserDataCurrentPage(1);
            }}
            className={`${styles.headerCell} ${
              props.spacsTradingLoserDataSelectedTab === 2 &&
              styles.selectedHeader
            }`}
          >
            Since Merger Closing
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          {props.isLoadingLooser ? (
            <>
              <Skeleton
                variant="rounded"
                height={35}
                width={"100%"}
                style={{ marginTop: 15 }}
              />
              <Skeleton
                variant="rounded"
                height={35}
                width={"100%"}
                style={{ marginTop: 15 }}
              />
              <Skeleton
                variant="rounded"
                height={35}
                width={"100%"}
                style={{ marginTop: 15 }}
              />
              <Skeleton
                variant="rounded"
                height={35}
                width={"100%"}
                style={{ marginTop: 15 }}
              />
            </>
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
