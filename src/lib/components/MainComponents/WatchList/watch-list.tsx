import styles from "./watchlist.module.css";
import React, { useState } from "react";
import WatchListFirstTable from "./CardElements/watch-list-ipo-spac-merger";
import IPOsGainer from "../IPO/IPOSHub/Gainer/ipo-hub-gainer.component";
import IPOsLoser from "../IPO/IPOSHub/Losers/ipohub-loser.component";
import MergersGainer from "../Merger/MergerHub/Gainer/gainer.component";
import MergersLoser from "../Merger/MergerHub/Losers/losers.component";
import SpacsTrending from "../SPAC/Spacs/Trading/trading.component";
import IPOsNews from "../IPO/IPOS/News/iponews.component";
import MergerNews from "../Merger/MergerHub/News/news.component";
import SpacsNews from "../SPAC/Spacs/News/news.component";
import IPOsPressReleases from "../IPO/IPOS/PressReleases/ipo-pressreleases.component";
import MergerPressReleases from "../Merger/MergerNews/PressReleases/press-releases.component";
import SpacsPressReleases from "../SPAC/SpacsNews/PressReleases/press-releases.component";
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
