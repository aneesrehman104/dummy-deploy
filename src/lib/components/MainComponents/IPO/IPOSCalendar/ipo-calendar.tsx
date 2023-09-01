import styles from "./ipo-calendar.module.css";
import React from "react";
import IpoCalendar from "./IpoEventCalendar/ipo-event-calendar.component";
const IPOSCalendarPage = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IPOS Calender</div>
        </div>
      </header>
      <section>
        <IpoCalendar />
      </section>
    </main>
  );
};

export default IPOSCalendarPage;
