import styles from "./spacs.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import Gainer from "./Gainer/Gainer";
import Losers from "./Losers/Losers";
import Screeners from "./Screeners/Screeners";
const Spacs = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>SPACs</div>
        </div>
      </div>
      <EventSummary />
      <Gainer />
      <Losers />
      <Screeners />
    </>
  );
};

export default Spacs;
