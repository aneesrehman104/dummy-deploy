import styles from "./IpoCategory.module.css";
import React from "react";
import EventSummary from "./EventSummary/ipohubeventsummary.component";
import IpoHubGainer from "./Gainer/ipocategorygainer.component";
import IpoHubLosers from "./Losers/ipocategoryloser.component";
import IpoHubNews from "./News/iponews.component";
import IposPipelineOverview from "./IposPipelineOverview/ipopipelineoverview.component"
import IpoCategoryMarketStats from "./IpoCategoryMarketStats/ipohubmarketstats.component";
const IpoCategory = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IPOS Category</div>
        </div>
      </header>
      <section>
        <EventSummary />
        <IpoCategoryMarketStats />
        <IposPipelineOverview/>
        <IpoHubGainer />
        <IpoHubLosers />
        <IpoHubNews />
      </section>
    </main>
  );
};

export default IpoCategory;
