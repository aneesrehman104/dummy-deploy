import styles from "./MergerStats.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import MergerMarketStats from "./MergerMarketStats/MergerMarketStats";
const MergerStats = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Merger Stats</div>
        </div>
      </header>
      <section>
      <EventSummary />
      <MergerMarketStats/>
      <EventSummary />
      <MergerMarketStats/>
      </section>
    </main>
  );
};

export default MergerStats;
