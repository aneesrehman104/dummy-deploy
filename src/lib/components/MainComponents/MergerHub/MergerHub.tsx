import styles from "./mergerhub.module.css";
import React from "react";
import EventSummary from "./EventSummary/event-summary-merger.component";
import Gainer from "./Gainer/gainer.component";
import Losers from "./Losers/losers.component";
import LatestAnnouncedMergers from "./LatestAnnouncedMergers/latest-announced-mergers.component";
import Closed from "./Closed/closed.component";
import News from "./News/news.component";
import MergerMarketStats from "./MergerMarketStats/merger-market-stats.component";
const MergerHub = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Merger Hub</div>
        </div>
      </header>
      <section>
        <EventSummary />
        <MergerMarketStats />
        <LatestAnnouncedMergers />
        <Closed />
        <Gainer />
        <Losers />
        <News />
      </section>
    </main>
  );
};

export default MergerHub;
