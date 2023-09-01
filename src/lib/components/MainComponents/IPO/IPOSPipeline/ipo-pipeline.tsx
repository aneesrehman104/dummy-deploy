import styles from "./ipo-pipeline.module.css";
import React from "react";
import GrapevineGraveyard from "./GrapevineGraveyard/grapevine-graveyard.component";
import LatestAnnouncedIpo from "./LatestAnnouncedIpo/latest-announced.components";
import IposFilling from "./IposFilling/ipo-filing.component"
const IPOSPipeline = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IPOS pipeline</div>
        </div>
      </header>
      <section>
      <LatestAnnouncedIpo/>
      <GrapevineGraveyard/>
      <IposFilling/>
      </section>
    </main>
  );
};

export default IPOSPipeline;
