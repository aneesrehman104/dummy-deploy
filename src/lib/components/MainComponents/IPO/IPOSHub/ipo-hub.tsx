import styles from "./ipo-hub.module.css";
import React from "react";
import EventSummary from "./EventSummary/ipohub-event-summary.component";
import IpoHubGainer from "./Gainer/ipo-hub-gainer.component";
import IpoHubLosers from "./Losers/ipohub-loser.component";
import IpoHubNews from "./News/iponews.component";
import IposPipelineOverview from "./IposPipelineOverview/ipo-pipeline-overview.component"

const IPOSHub = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IPO HUB</div>
        </div>
      </header>
      <section>
        <EventSummary />
        <IposPipelineOverview/>
        <IpoHubGainer />
        <IpoHubLosers />
        <IpoHubNews />
      </section>
    </main>
  );
};

export default IPOSHub;
