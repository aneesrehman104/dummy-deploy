import styles from "./spacs.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import Trading from "./Trading/Trading";
import Announced from "./Announced/Announced";
import Closed from "./Closed/Closed";
import News from "./News/News";
const Spacs = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>SPACs</div>
        </div>
      </div>
      <EventSummary />
      <Trading />
      <Announced />
      <Closed />
      <News />
    </>
  );
};

export default Spacs;
