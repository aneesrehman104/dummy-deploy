import styles from "./SpacsCalender.module.css";
import React from "react";
import CardElements from "./CardElements/CardElements";
const SpacsCalender = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>spac Calender</div>
        </div>
      </div>
      <CardElements/>
    </>
  );
};

export default SpacsCalender;
