import styles from "./spacsStats.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import MarketStats from "./MarketStats/MarketStats";
const SpacsStats = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Spacs Stats</div>
        </div>
      </header>
      <section>
        <EventSummary />
        <MarketStats />
        <EventSummary />
        <MarketStats />
      </section>
    </main>
  );
};

export default SpacsStats;
