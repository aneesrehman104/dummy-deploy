import styles from "./MergerCategory.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import Gainer from "./Gainer/Gainer";
import Losers from "./Losers/Losers";
import Announced from "./Announced/Announced";
import Closed from "./Closed/Closed";
import News from "./News/News";
const MergerCategory = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>X CATEGORY MergerS</div>
        </div>
      </div>
      <EventSummary />
      <Announced />
      <Closed />
      <Gainer />
      <Losers />
      <News />
    </>
  );
};

export default MergerCategory;
