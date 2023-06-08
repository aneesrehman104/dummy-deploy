import React, { Fragment } from "react";
import styles from "./trading.module.css";
import { useState } from "react";
import Gainer from "../Gainer/Gainer";
import Losers from "../Losers/Losers";

function Trading() {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Trading</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          <div
            onClick={() => setSelectedTab(0)}
            className={`${styles.headerCell} ${
              selectedTab === 0 && styles.selectedHeader
            }`}
          >
            All Active SPACs
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className={`${styles.headerCell} ${
              selectedTab === 1 && styles.selectedHeader
            }`}
          >
            De-SPACs
          </div>
        </div>
        {selectedTab === 0 ? (
          <Fragment>
            <Gainer title="Gainers: Active SPACs" />
            <Losers title="Losers:  Active SPACs" />
          </Fragment>
        ) : (
          <Fragment>
            <Gainer title="Gainers: De-SPACs " />
            <Losers title="Losers: De-SPACs " />
          </Fragment>
        )}
      </div>
    </section>
  );
}

export default Trading;
