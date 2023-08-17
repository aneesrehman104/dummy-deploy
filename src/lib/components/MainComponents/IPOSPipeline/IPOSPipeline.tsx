import styles from "./IPOSPipeline.module.css";
import React from "react";
import GrapevineGraveyard from "./GrapevineGraveyard/grapevinegraveyard.component";
import LatestAnnouncedIpo from "./LatestAnnouncedIpo/latestannounced.components";
import LatestClosedIpo from "./LatestClosedIpo/latestclosedipo";
import IposFilling from "./IposFilling/iposfilling.component"
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
      <LatestClosedIpo/>
      <GrapevineGraveyard/>
      <IposFilling/>
      </section>
    </main>
  );
};

export default IPOSPipeline;
