import React from "react";
import styles from "./gainer.module.css";
import { useState } from "react";
import { GainerInterFace } from "@/lib/ts/interface";
import MyTable from "./functions";
import Skeleton from "@mui/material/Skeleton";

function Gainer(props: GainerInterFace) {

  const paginate = (pageNumber: number) => {
    props.setSpacsTradingGainerDataCurrentPage(pageNumber);
  };
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>{props.title}</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          <div
            onClick={() => {
              props.setSpacsTradingGainerDataSelectedTab(0);
              props.setSpacsTradingGainerDataCurrentPage(1);
            }}
            className={`${styles.headerCell} ${
              props.spacsTradingGainerDataSelectedTab === 0 &&
              styles.selectedHeader
            }`}
          >
            Daily
          </div>
          <div
            onClick={() => {
              props.setSpacsTradingGainerDataSelectedTab(1);
              props.setSpacsTradingGainerDataCurrentPage(1);
            }}
            className={`${styles.headerCell} ${
              props.spacsTradingGainerDataSelectedTab === 1 &&
              styles.selectedHeader
            }`}
          >
            Weekly
          </div>
          <div
            onClick={() => {
              props.setSpacsTradingGainerDataSelectedTab(2);
              props.setSpacsTradingGainerDataCurrentPage(1);
            }}
            className={`${styles.headerCell} ${
              props.spacsTradingGainerDataSelectedTab === 2 &&
              styles.selectedHeader
            }`}
          >
            Since Merger Closing
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          {props.isLoading ? (
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
                currentPage={props.spacsTradingGainerDataCurrentPage}
                paginate={paginate}
                spacsTradingGainerDataSelectedTab={
                  props.spacsTradingGainerDataSelectedTab
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

export default Gainer;
