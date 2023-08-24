import styles from "./spacs-calender.module.css";
import React from "react";
import SpacsEventCalender from "./SpacEventCalendar/spac-event-calendar.component"
import SpacsIpoCalendar from "./SpacsIpoCalendar/spacs-ipo-calendar.component";
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
