import styles from "./SpacsNews.module.css";
import React from "react";
import News from "./News/News";
import CurrentUpdateFeed from "./CurrentUpdateFeed/CurrentUpdateFeed";
import TwitterFeed from "./TwitterFeed/TwitterFeed";
import PressReleases from "./PressReleases/PressReleases";
const SpacsNews = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>In The News</div>
        </div>
      </div>
      <News />
      <CurrentUpdateFeed />
      <TwitterFeed/>
      <PressReleases/>
    </>
  );
};

export default SpacsNews;
