import styles from "./MergerPipeline.module.css";
import React from "react";
import GrapevineGraveyard from "./GrapevineGraveyard/GrapevineGraveyard";
import LatestAnnouncedMergers from "./LatestAnnouncedMergers/LatestAnnouncedMergers";
import LatestClosedMergers from "./LatestClosedMergers/LatestClosedMergers";
import MergerCalendar from "./MergerCalendar/MergerCalendar";
const MergerPipeline = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Merger pipeline</div>
        </div>
      </div>
      <LatestAnnouncedMergers/>
      <LatestClosedMergers/>
      <GrapevineGraveyard/>
      <MergerCalendar/>
    </>
  );
};

export default MergerPipeline;
