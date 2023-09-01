import styles from "./spacs-calendar.module.css";
import React from "react";
import SpacEventCalendar from "./SpacEventCalendar/spac-event-calendar.component";
const SpacsPipeline = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>spac Calendar</div>
        </div>
      </header>
      <section>
        <SpacEventCalendar />
      </section>
    </main>
  );
};

export default SpacsPipeline;
