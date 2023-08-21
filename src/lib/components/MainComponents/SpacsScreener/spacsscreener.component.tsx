import styles from "./spacscreeners.module.css";
import React from "react";
import CardElements from "./CardElements/cardelements.component";
const SpacsScreener = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>spac screeners</div>
        </div>
      </header>
      <section>
      <CardElements/>
      </section>
    </main>
  );
};

export default SpacsScreener;
