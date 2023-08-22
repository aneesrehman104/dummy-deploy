import styles from "./dashboard-header.module.css";
import React from "react";
import LatestAnnouncedSpacMergers from "./LatestAnnouncedSpacMergers/latestannouncedspacmergers.component";
import LatestClosedSpacMergers from "./LatestClosedSpacMergers/latestclosedspacmergers.component";
import SpacEventCalendar from "./SpacEventCalendar/spaceventcalendar.component";
import GrapevineGraveyard from "./GrapevineGraveyard/grapevinegraveyard.component";
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
