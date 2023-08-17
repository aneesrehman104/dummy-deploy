import styles from "./IPOSStats.module.css";
import React from "react";
import EventSummary from "./EventSummary/ipostatseventsummary.component";
import IpoMarketStats from "./IpoMarketStats/ipomarketstats.component";
import ReturnsByTargetIndustry from "./ReturnsByTargetIndustry/ReturnsByTargetIndustry";
import ReturnsByClosingYearVintage from "./ReturnsByClosingYearVintage/returnsbyclosingyearvintage.component";
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
        <IpoMarketStats />
        {/* <ReturnsByTargetIndustry /> */}
        <ReturnsByClosingYearVintage />
      </section>
    </main>
  );
};

export default IPOSStats;
