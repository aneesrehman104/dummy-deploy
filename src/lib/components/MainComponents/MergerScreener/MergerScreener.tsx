import styles from "./MergerScreener.module.css";
import React from "react";
import CardElements from "./CardElements/CardElements";
const MergerScreener = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Merger screeners</div>
        </div>
      </div>
      <CardElements/>
    </>
  );
};

export default MergerScreener;
