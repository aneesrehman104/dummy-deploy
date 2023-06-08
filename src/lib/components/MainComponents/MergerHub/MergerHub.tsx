import styles from "./MergerHub.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import Gainer from "./Gainer/Gainer";
import Losers from "./Losers/Losers";
import Announced from "./Announced/Announced";
import Closed from "./Closed/Closed";
import News from "./News/News";
import MergerMarketStats from "./MergerMarketStats/MergerMarketStats";
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
        <Announced />
        <Closed />
        <Gainer />
        <Losers />
        <News />
      </section>
    </main>
  );
};

export default MergerHub;
