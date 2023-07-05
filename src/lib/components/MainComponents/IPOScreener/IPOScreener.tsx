import styles from "./iposscreeners.module.css";
import React from "react";
import CardElements from "./CardElements/CardElements";
const IPOScreener = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IPOS screeners</div>
        </div>
      </header>
      <section>
      <CardElements/>
      </section>
    </main>
  );
};

export default IPOScreener;
