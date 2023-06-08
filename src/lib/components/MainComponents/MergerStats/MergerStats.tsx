import styles from "./MergerStats.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import MarketStats from "./MarketStats/MarketStats";
const MergerStats = () => {
  return (
    <main>
      <divheader className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Merger Stats</div>
        </div>
      </header>
      <section>
      <EventSummary />
      <MarketStats/>
      <EventSummary />
      <MarketStats/>
      </section>
    </main>
  );
};

export default MergerStats;
