import styles from "./dashboard-header.module.css";
import React from "react";
import LatestAnnouncedSpacMergers from "./LatestAnnouncedSpacMergers/latest-announced-spac-mergers.component";
import LatestClosedSpacMergers from "./LatestClosedSpacMergers/latest-closed-spac-mergers.component";
import SpacEventCalendar from "./SpacEventCalendar/spac-event-calendar.component";
import GrapevineGraveyard from "./GrapevineGraveyard/grapevine-graveyard.component";
const SpacsPipeline = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>spac pipeline</div>
        </div>
      </header>
      <section>
        <LatestAnnouncedSpacMergers />
        <LatestClosedSpacMergers />
        <SpacEventCalendar />
        <GrapevineGraveyard />
      </section>
    </main>
  );
};

export default SpacsPipeline;
