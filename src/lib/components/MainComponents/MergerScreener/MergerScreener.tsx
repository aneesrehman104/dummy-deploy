import styles from "./MergerScreener.module.css";
import React from "react";
import CardElements from "./CardElements/mergerscreener.component";
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
