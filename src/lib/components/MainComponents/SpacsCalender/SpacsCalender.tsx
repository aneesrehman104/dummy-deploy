import styles from "./SpacsCalender.module.css";
import React from "react";
import SpacsEventCalender from "./SpacsEventCalendar/SpacsEventCalender";
import SpacsIpoCalendar from "./SpacsIpoCalendar/SpacsIpoCalendar";
const SpacsCalender = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>SPAC Event Calendar</div>
        </div>
      </div>
      <SpacsEventCalender/>
      <SpacsIpoCalendar/>
    </>
  );
};

export default SpacsCalender;
