import styles from "./WatchList.module.css";
import React from "react";
import CardElements from "./CardElements/CardElements";
import Gainer from "./Gainer/Gainer";
import Losers from "./Losers/Losers";
import News from './News/News'
import SpacsEventCalendar from "./SpacsEventCalendar/SpacsEventCalendar";
const WatchList = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Watch List</div>
        </div>
      </div>
      <CardElements />
      <Gainer />
      <Losers />
      <News/>
      <SpacsEventCalendar/>
    </>
  );
};

export default WatchList;
