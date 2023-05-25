import styles from "./dashboard-header.module.css";
import React from "react";
import EventSummary from "./EventSummary/EventSummary";
import TableTitleSection from "./TableTitleSection/TableTitleSection";
import AggrecatedMiniTable from "./AggrecatedMiniTable/AggrecatedMiniTable";
import MiniTableList from "./MiniTableList/MiniTableList";

const Home = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.breadcrumb}>
          <div className={styles.link}>Home</div>
        </div>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Dashboard</div>
        </div>
      </div>
      <EventSummary />
      <TableTitleSection />
      <AggrecatedMiniTable />
      <MiniTableList />
    </>
  );
};

export default Home;
