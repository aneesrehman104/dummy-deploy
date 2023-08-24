import styles from "./ipo-news.module.css";
import React from "react";
import News from "./News/iponews.component";
import CurrentUpdateFeed from "./CurrentUpdateFeed/current-update-feed.component";
import TwitterFeed from "./TwitterFeed/twitterfeed.component";
import PressReleases from "./PressReleases/ipo-press-release.component";
const IPONews = () => {
  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>In The News</div>
        </div>
      </header>
      <section>
        <News />
        <CurrentUpdateFeed />
        <TwitterFeed />
        <PressReleases />
      </section>
    </main>
  );
};

export default IPONews;
