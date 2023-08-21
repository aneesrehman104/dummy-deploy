import styles from "./spacs.module.css";
import React from "react";
import EventSummary from "./EventSummary/eventsummary.component";
import SpacsMarketStats from "./SpacsMarketStats/spacsmarketstats.component";
import Trading from "./Trading/trading.component";
import Announced from "./Announced/announced.component";
import Closed from "./Closed/closed.component";
import News from "./News/news.component";
const Spacs = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>SPACs</div>
        </div>
      </header>
      <section>
        <EventSummary />
        <SpacsMarketStats />
        <Trading />
        <Announced />
        <Closed />
        <News />
      </section>
    </main>
  );
};

export default Spacs;
