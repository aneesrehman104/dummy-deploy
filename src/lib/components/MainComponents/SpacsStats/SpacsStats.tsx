import styles from "./spacsStats.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import MarketStats from "./MarketStats/MarketStats";
const SpacsStats = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Spacs Stats</div>
        </div>
      </div>
      <EventSummary />
      <MarketStats/>
      <EventSummary />
      <MarketStats/>
    </>
  );
};

export default SpacsStats;
