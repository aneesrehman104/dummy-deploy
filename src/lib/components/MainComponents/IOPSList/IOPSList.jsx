import styles from "./IOPSList.module.css";
import React from "react";
import CardElements from "./CardElements/CardElements";
const IOPSList = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IOPS List</div>
        </div>
      </div>
      <CardElements/>
    </>
  );
};

export default IOPSList;
