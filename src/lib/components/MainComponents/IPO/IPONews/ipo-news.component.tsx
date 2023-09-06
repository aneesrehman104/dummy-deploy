import styles from "./ipo-news.module.css";
import React, { useState } from "react";
import News from "./News/iponews.component";
import CurrentUpdateFeed from "./CurrentUpdateFeed/current-update-feed.component";
import TwitterFeed from "./TwitterFeed/twitterfeed.component";
import PressReleases from "./PressReleases/ipo-press-release.component";
import SecFilling from './SecFilling/ipo-sec-filling.component'
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";

const IPONews = () => {
  const [value, setValue] = useState<string>("1");
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabData1 = [
    { label: "News", index: 0 },
    { label: "Press Releases", index: 1 },
    { label: "SEC Filings", index: 2 },
  ];
  const tabData2 = [
    { label: "Our Curated Feed", index: 3 },
    { label: "Our X Feed", index: 4 },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
  };

  const Tabs: React.FC<{
    tabData: Array<{ label: string; index: number }>;
    handleTabClick: (index: number) => void;
    selectedTab: number;
  }> = ({ tabData, handleTabClick, selectedTab }) => {
    return (
      <div
        style={{
          borderBottom: "1px solid #d2ecf9",
          display: "flex",
          width: "100%",
        }}
      >
        {tabData.map(({ label, index }) => (
          <div
            key={index + "ee20401322"}
            onClick={() => handleTabClick(index)}
            className={`${styles.headerCell} ${
              selectedTab === index && styles.selectedHeader
            }`}
          >
            {label}
          </div>
        ))}
      </div>
    );
  };
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IPO News</div>
        </div>
      </header>
      <section>
        <Tabs
          tabData={tabData1}
          handleTabClick={handleTabClick}
          selectedTab={selectedTab}
        />
        <Tabs
          tabData={tabData2}
          handleTabClick={handleTabClick}
          selectedTab={selectedTab}
        />
        {selectedTab == 0 ? (
          <News />
        ) : selectedTab == 1 ? (
          <PressReleases />
        ) : selectedTab == 2 ? (
          <SecFilling />
        ) : selectedTab == 3 ? (
          <CurrentUpdateFeed />
        ) : (
          <TwitterFeed />
        )}
      </section>
    </main>
  );
};

export default IPONews;
