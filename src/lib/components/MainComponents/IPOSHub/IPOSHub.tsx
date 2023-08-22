import styles from "./IPOSHub.module.css";
import React from "react";
import EventSummary from "./EventSummary/ipohubeventsummary.component";
import IpoHubGainer from "./Gainer/ipohubgainer.component";
import IpoHubLosers from "./Losers/ipohubloser.component";
import IpoHubNews from "./News/iponews.component";
import IposPipelineOverview from "./IposPipelineOverview/ipopipelineoverview.component"
import IpoHubMarketStats from "./IpoHubMarketStats/ipohubmarketstats.component";
const IPOSHub = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IPOS Hub</div>
        </div>
      </header>
      <section>
        <EventSummary />
        <IpoHubMarketStats />
        <IposPipelineOverview/>
        <IpoHubGainer />
        <IpoHubLosers />
        <IpoHubNews />
      </section>
    </main>
  );
};

export default IPOSHub;
