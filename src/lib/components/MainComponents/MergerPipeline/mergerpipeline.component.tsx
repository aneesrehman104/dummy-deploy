import styles from "./MergerPipeline.module.css";
import React from "react";
import GrapevineGraveyard from "./GrapevineGraveyard/grapevinegraveyard.component";
import LatestAnnouncedMergers from "./LatestAnnouncedMergers/latestannouncedmergers.component";
import LatestClosedMergers from "./LatestClosedMergers/latestclosedmergers.component";
import MergerCalendar from "./MergerCalendar/mergercalendar.component";
const MergerPipeline = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Merger pipeline</div>
        </div>
      </header>
      <section>
        <LatestAnnouncedMergers />
        <LatestClosedMergers />
        <GrapevineGraveyard />
        <MergerCalendar />
      </section>
    </main>
  );
};

export default MergerPipeline;
