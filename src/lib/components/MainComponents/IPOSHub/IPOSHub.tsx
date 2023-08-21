import styles from "./IPOSHub.module.css";
import React from "react";
import EventSummary from "./EventSummary/ipohubeventsummary.component";
import Gainer from "./Gainer/ipohubgainer.component";
import Losers from "./Losers/ipohubloser.component";
import News from "./News/iponews.component";
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
        <Gainer />
        <Losers />
        <News />
      </section>
    </main>
  );
};

export default IPOSHub;
