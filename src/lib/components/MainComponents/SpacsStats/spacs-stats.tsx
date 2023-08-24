import styles from "./spac-stats.module.css";
import React from "react";
import EventSummary from "./EventSummary/event-summary.component";
import MarketStats from "./MarketStats/marketstats.component";
import ReturnsByTargetIndustry from "./ReturnsByTargetIndustry/returnsby-targetindustry.component";
import ReturnsByClosingYearVintage from "./ReturnsByClosingYearVintage/returnsby-closingyear-vintage.component";
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
        <ReturnsByTargetIndustry />
        <ReturnsByClosingYearVintage />
      </section>
    </main>
  );
};

export default SpacsStats;
