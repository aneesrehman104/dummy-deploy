import styles from "./merger-category.module.css";
import React from "react";
import EventSummary from "./EventSummary/event-summarymerger.component";
import Gainer from "./Gainer/gainer.component";
import Losers from "./Losers/losers.component";
import Announced from "./Announced/announced.component";
import Closed from "./Closed/closed.component";
import News from "./News/news.component";
const MergerCategory = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>X CATEGORY MergerS</div>
        </div>
      </header>
      <section>
      <EventSummary />
      <Announced />
      <Closed />
      <Gainer />
      <Losers />
      <News />
      </section>
    </main>
  );
};

export default MergerCategory;
