import styles from "./IPOSStats.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import MarketStats from "./MarketStats/MarketStats";
import ReturnsByTargetIndustry from "./ReturnsByTargetIndustry/ReturnsByTargetIndustry";
import ReturnsByClosingYearVintage from "./ReturnsByClosingYearVintage/ReturnsByClosingYearVintage";
const IPOSStats = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IPOS Stats</div>
        </div>
      </header>
      <section>
        <EventSummary />
        <MarketStats />
        {/* <ReturnsByTargetIndustry /> */}
        <ReturnsByClosingYearVintage />
      </section>
    </main>
  );
};

export default IPOSStats;
