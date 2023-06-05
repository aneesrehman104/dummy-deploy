import styles from "./spacscreeners.module.css";
import React from "react";
import CardElements from "./CardElements/CardElements";
const SpacsScreener = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>spac screeners</div>
        </div>
      </div>
      <CardElements/>
    </>
  );
};

export default SpacsScreener;
