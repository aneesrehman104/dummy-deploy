import styles from "./merger-pipeline.module.css";
import React from "react";
import GrapevineGraveyard from "./GrapevineGraveyard/grapevine-graveyard.component";
import LatestAnnouncedMergers from "./LatestAnnouncedMergers/latest-announced-mergers.component";
import LatestClosedMergers from "./LatestClosedMergers/latest-closed-mergers.component";
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
      </section>
    </main>
  );
};

export default MergerPipeline;
