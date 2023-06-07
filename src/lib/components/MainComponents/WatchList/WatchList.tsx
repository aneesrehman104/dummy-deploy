import styles from "./WatchList.module.css";
import React from "react";
import CardElements from "./CardElements/CardElements";
const WatchList = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Watch List</div>
        </div>
      </div>
      <CardElements/>
    </>
  );
};

export default WatchList;
