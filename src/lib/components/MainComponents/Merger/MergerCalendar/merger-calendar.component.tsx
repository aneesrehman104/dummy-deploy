import styles from "./merger-calendar.module.css";
import React from "react";
import MergerCalendar from "./MergerCalendar/merger-calendar.component";
const MergerCalendarPage = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Merger Calendar</div>
        </div>
      </header>
      <section>
        <MergerCalendar />
      </section>
    </main>
  );
};

export default MergerCalendarPage;
