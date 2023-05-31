import styles from "./dashboard-header.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import Gainer from "./Gainer/Gainer";

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
    </>
  );
};

export default Spacs;
