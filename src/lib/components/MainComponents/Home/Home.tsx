import styles from "./dashboard-header.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import HomeIpoTable from "./HomeIpoTable/HomeIpoTable";
import HomeMergerTable from "./HomeMergerTable/HomeMergerTable";
import AggrecatedMiniTable from "./AggrecatedMiniTable/AggrecatedMiniTable";
import MiniTableList from "./MiniTableList/MiniTableList";
import { homeConstants } from "@/lib/ts/constants";
const Home = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>{homeConstants.title}</div>
        </div>
      </div>
      <EventSummary />
      <HomeIpoTable />
      <HomeMergerTable />
      <AggrecatedMiniTable />
      <MiniTableList />
    </>
  );
};

export default Home;
