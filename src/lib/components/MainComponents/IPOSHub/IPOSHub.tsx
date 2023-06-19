import styles from "./IPOSHub.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import Gainer from "./Gainer/Gainer";
import Losers from "./Losers/Losers";
import News from "./News/News";
import MergerMarketStats from "./MergerMarketStats/MergerMarketStats";
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
        <MergerMarketStats />
        <Gainer />
        <Losers />
        <News />
      </section>
    </main>
  );
};

export default IPOSHub;
