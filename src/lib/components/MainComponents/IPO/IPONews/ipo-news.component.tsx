import styles from "./ipo-news.module.css";
import React, { useState } from "react";
import News from "./News/iponews.component";
import CurrentUpdateFeed from "./CurrentUpdateFeed/current-update-feed.component";
import TwitterFeed from "./TwitterFeed/twitterfeed.component";
import PressReleases from "./PressReleases/ipo-press-release.component";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";

const IPONews = () => {
  const [value, setValue] = useState<string>("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IPO News</div>
        </div>
      </header>
      <section>
        <TabContext value={value}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="News" value="1" />
              <Tab label="Press Releases" value="2" />
              <Tab label="SEC Filings" value="3" />
              <Tab label="Our Curated Feed" value="4" />
              <Tab label="Our X Feed" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <News />
          </TabPanel>
          <TabPanel value="2">
            <PressReleases />
          </TabPanel>
          <TabPanel value="3">
            <CurrentUpdateFeed />
          </TabPanel>
          <TabPanel value="4">
            <CurrentUpdateFeed />
          </TabPanel>
          <TabPanel value="5">
            <TwitterFeed />
          </TabPanel>
        </TabContext>
      </section>
    </main>
  );
};

export default IPONews;
