import styles from "./spacs.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import SpacsMarketStats from "./SpacsMarketStats/SpacsMarketStats";
import Trading from "./Trading/Trading";
import Announced from "./Announced/Announced";
import Closed from "./Closed/Closed";
import News from "./News/News";
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
        {/* <SpacsMarketStats />
        <Trading />
        <Announced />
        <Closed />
        <News /> */}
      </section>
    </main>
  );
};

export default Spacs;
