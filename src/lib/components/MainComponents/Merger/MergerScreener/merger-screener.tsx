import styles from "./merger-screener.module.css";
import React from "react";
import CardElements from "./CardElements/merger-screener.component";
const MergerScreener = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Merger screeners</div>
        </div>
      </header>
      <section>
      <CardElements/>
      </section>
    </main>
  );
};

export default MergerScreener;
