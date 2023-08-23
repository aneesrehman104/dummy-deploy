import styles from "./watchlist.module.css";
import React, { useState } from "react";
import CardElements from "./CardElements/card-elements.component";
import IPOsGainer from "../IPOSHub/Gainer/ipo-hub-gainer.component";
import IPOsLoser from "../IPOSHub/Losers/ipohub-loser.component";
import MergersGainer from "../MergerHub/Gainer/gainer.component";
import MergersLoser from "../MergerHub/Losers/losers.component";
import SpacsTrending from "../Spacs/Trading/trading.component";
import IPOsNews from "../IPOS/News/iponews.component"
import MergerNews from '../MergerHub/News/news.component'
import SpacsNews from '../Spacs/News/news.component'
import IPOsPressReleases from "../IPOS/PressReleases/ipo-pressreleases.component"
import MergerPressReleases from '../MergerNews/PressReleases/press-releases.component'
import SpacsPressReleases from '../SpacsNews/PressReleases/press-releases.component'
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
