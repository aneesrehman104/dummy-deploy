import styles from "./IPOSPipeline.module.css";
import React from "react";
import GrapevineGraveyard from "./GrapevineGraveyard/GrapevineGraveyard";
import LatestAnnouncedMergers from "./LatestAnnouncedMergers/LatestAnnouncedMergers";
import LatestClosedMergers from "./LatestClosedMergers/LatestClosedMergers";
import MergerCalendar from "./MergerCalendar/MergerCalendar";
const IPOSPipeline = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IPOS pipeline</div>
        </div>
      </header>
      <section>
      <LatestAnnouncedMergers/>
      <LatestClosedMergers/>
      <GrapevineGraveyard/>
      <MergerCalendar/>
      </section>
    </main>
  );
};

export default IPOSPipeline;
