import styles from "./SpacsCalender.module.css";
import React from "react";
import SpacsEventCalender from "./SpacEventCalendar/SpacEventCalendar"
import SpacsIpoCalendar from "./SpacsIpoCalendar/SpacsIpoCalendar";
const SpacsCalender = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>SPAC Event Calendar</div>
        </div>
      </header>
      <section>
      <SpacsEventCalender/>
      <SpacsIpoCalendar/>
      </section>
    </main>
  );
};

export default SpacsCalender;
