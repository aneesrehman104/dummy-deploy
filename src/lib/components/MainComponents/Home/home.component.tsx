"use client";
import styles from "./dashboard-header.module.css";
import React from "react";
import HomeEventSummary from "./HomeEventSummary/homeeventsummary.component"
import HomeIpoTable from "./HomeIpoTable/homeipotable.component";
import HomeMergerTable from "./HomeMergerTable/home-merger-pipeline.component";
import AggrecatedMiniTable from "./AggrecatedMiniTable/aggrecatedminitable.component";
import MiniTableList from "./MiniTableList/minitablelist.component";
import { homeConstants } from "@/lib/ts/constants";
const Home = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>{homeConstants.title}</div>
        </div>
      </header>
      <section>
        <HomeEventSummary />
        <HomeIpoTable />
        <HomeMergerTable />
        <AggrecatedMiniTable />
        <MiniTableList />
      </section>
    </main>
  );
};

export default Home;
