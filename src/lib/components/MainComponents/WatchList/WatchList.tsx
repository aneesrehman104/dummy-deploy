import styles from "./WatchList.module.css";
import React, { useState } from "react";
import CardElements from "./CardElements/CardElements";
import IPOsGainer from "../IPOSHub/Gainer/Gainer";
import IPOsLoser from "../IPOSHub/Losers/Losers";
import MergersGainer from "../MergerHub/Gainer/Gainer";
import MergersLoser from "../MergerHub/Losers/Losers";
import SpacsTrending from "../Spacs/Trading/Trading";
import IPOsNews from "../IOPS/News/iponews.component"
import MergerNews from '../MergerHub/News/News'
import SpacsNews from '../Spacs/News/News'
import IPOsPressReleases from "../IOPS/PressReleases/ipopressreleases.component"
import MergerPressReleases from '../MergerNews/PressReleases/PressReleases'
import SpacsPressReleases from '../SpacsNews/PressReleases/PressReleases'
const WatchList = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Watch List</div>
        </div>
      </div>
      <div className={styles.calenderTabs}>
        <div
          onClick={() => setSelectedTab(0)}
          className={`${styles.headerCell} ${
            selectedTab === 0 && styles.selectedHeader
          }`}
        >
          IPO Watchlist
        </div>
        <div
          onClick={() => setSelectedTab(1)}
          className={`${styles.headerCell} ${
            selectedTab === 1 && styles.selectedHeader
          }`}
        >
          Merger Watchlist
        </div>
        <div
          onClick={() => setSelectedTab(2)}
          className={`${styles.headerCell} ${
            selectedTab === 2 && styles.selectedHeader
          }`}
        >
          SPAC Watchlist
        </div>
      </div>

      <CardElements selectedTab={selectedTab} />

      {selectedTab === 0 ? (
        <>
          <IPOsGainer />
          <IPOsLoser />
          <IPOsNews/>
          <IPOsPressReleases/>
        </>
      ) : selectedTab === 1 ? (
        <>
          <MergersGainer />
          <MergersLoser />
          <MergerNews/>
          <MergerPressReleases/>
        </>
      ) : (
        <>
          <SpacsTrending />
          <SpacsNews/>
          <SpacsPressReleases/>
        </>
      )}

    </>
  );
};

export default WatchList;
