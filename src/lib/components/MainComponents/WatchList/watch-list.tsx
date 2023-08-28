import styles from "./watchlist.module.css";
import React, { useState } from "react";
import WatchListFirstTable from "./CardElements/watch-list-ipo-spac-merger";
import IPOsGainer from "../IPOSHub/Gainer/ipo-hub-gainer.component";
import IPOsLoser from "../IPOSHub/Losers/ipohub-loser.component";
import MergersGainer from "../MergerHub/Gainer/gainer.component";
import MergersLoser from "../MergerHub/Losers/losers.component";
import SpacsTrending from "../Spacs/Trading/trading.component";
import IPOsNews from "../IPOS/News/iponews.component";
import MergerNews from "../MergerHub/News/news.component";
import SpacsNews from "../Spacs/News/news.component";
import IPOsPressReleases from "../IPOS/PressReleases/ipo-pressreleases.component";
import MergerPressReleases from "../MergerNews/PressReleases/press-releases.component";
import SpacsPressReleases from "../SpacsNews/PressReleases/press-releases.component";
const WatchListComponet = () => {
  const tabs = [
    { id: 0, label: "IPO Watchlist" },
    { id: 1, label: "Merger Watchlist" },
    { id: 2, label: "SPAC Watchlist" },
  ];

  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
  };
  return (
    <>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Watch List</div>
        </div>
      </header>

      <main className={styles.calenderTabs}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`${styles.headerCell} ${
              selectedTab === tab.id ? styles.selectedHeader : ""
            }`}
          >
            {tab.label}
          </div>
        ))}
      </main>

      <WatchListFirstTable selectedTab={selectedTab} />

      {selectedTab === 0 ? (
        <>
          <IPOsGainer />
          <IPOsLoser />
          <IPOsNews />
          <IPOsPressReleases />
        </>
      ) : selectedTab === 1 ? (
        <>
          <MergersGainer />
          <MergersLoser />
          <MergerNews />
          <MergerPressReleases />
        </>
      ) : (
        <>
          <SpacsTrending />
          <SpacsNews />
          <SpacsPressReleases />
        </>
      )}
    </>
  );
};

export default WatchListComponet;
