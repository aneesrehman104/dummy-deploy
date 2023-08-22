import styles from "./WatchList.module.css";
import React, { useState } from "react";
import CardElements from "./CardElements/CardElements";
import IPOsGainer from "../IPOSHub/Gainer/ipohubgainer.component";
import IPOsLoser from "../IPOSHub/Losers/ipohubloser.component";
import MergersGainer from "../MergerHub/Gainer/gainer.component";
import MergersLoser from "../MergerHub/Losers/losers.component";
import SpacsTrending from "../Spacs/Trading/trading.component";
import IPOsNews from "../IOPS/News/iponews.component"
import MergerNews from '../MergerHub/News/news.component'
import SpacsNews from '../Spacs/News/news.component'
import IPOsPressReleases from "../IOPS/PressReleases/ipopressreleases.component"
import MergerPressReleases from '../MergerNews/PressReleases/pressreleases.component'
import SpacsPressReleases from '../SpacsNews/PressReleases/pressreleases.component'
const WatchList = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
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
