import styles from "./spacs.module.css";
import React from "react";
import SpacsEventSummary from "./EventSummary/spacs-event-summary.component";
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
        <SpacsEventSummary />
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
