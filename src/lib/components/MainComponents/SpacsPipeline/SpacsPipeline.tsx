import styles from "./dashboard-header.module.css";
import React from "react";
import LatestAnnouncedSpacMergers from "./LatestAnnouncedSpacMergers/LatestAnnouncedSpacMergers";
import LatestClosedSpacMergers from "./LatestClosedSpacMergers/LatestClosedSpacMergers";
import GrapevineGraveyard from "./GrapevineGraveyard/GrapevineGraveyard";
const SpacsPipeline = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>spac pipeline</div>
        </div>
      </div>
      <LatestAnnouncedSpacMergers />
      <LatestClosedSpacMergers />
      <GrapevineGraveyard/>
    </>
  );
};

export default SpacsPipeline;
