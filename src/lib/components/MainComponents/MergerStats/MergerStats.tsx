import styles from "./MergerStats.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import MarketStats from "./MarketStats/MarketStats";
const MergerStats = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Merger Stats</div>
        </div>
      </div>
      <EventSummary />
      <MarketStats/>
      <EventSummary />
      <MarketStats/>
    </>
  );
};

export default MergerStats;
