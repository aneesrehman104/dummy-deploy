import styles from "./spacsStats.module.css";
import React from "react";
import EventSummary from "./EventSummary/eventsummary.component";
import MarketStats from "./MarketStats/marketstats.component";
import ReturnsByTargetIndustry from "./ReturnsByTargetIndustry/returnsbytargetindustry.component";
import ReturnsByClosingYearVintage from "./ReturnsByClosingYearVintage/returnsbyclosingyearvintage.component";
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
