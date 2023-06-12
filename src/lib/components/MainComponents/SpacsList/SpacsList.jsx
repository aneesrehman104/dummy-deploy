import styles from "./SpacsList.module.css";
import React from "react";
import CardElements from "./CardElements/CardElements";
const SpacsList = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>spacs List</div>
        </div>
      </div>
      <CardElements/>
    </>
  );
};

export default SpacsList;
