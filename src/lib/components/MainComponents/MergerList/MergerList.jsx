import styles from "./MergerList.module.css";
import React from "react";
import CardElements from "./CardElements/CardElements";
const MergerList = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Merger List</div>
        </div>
      </div>
      <CardElements/>
    </>
  );
};

export default MergerList;
