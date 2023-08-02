import styles from "./IPOSStats.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import MergerMarketStats from "./MergerMarketStats/MergerMarketStats";
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
        <MergerMarketStats />
        {/* <ReturnsByTargetIndustry /> */}
        <ReturnsByClosingYearVintage />
      </section>
    </main>
  );
};

export default IPOSStats;
