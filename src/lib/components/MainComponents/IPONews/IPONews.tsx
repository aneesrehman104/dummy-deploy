import styles from "./IPONews.module.css";
import React from "react";
import News from "./News/iponews.components";
import CurrentUpdateFeed from "./CurrentUpdateFeed/currentupdatefeed.component";
import TwitterFeed from "./TwitterFeed/twitterfeed.component";
import PressReleases from "./PressReleases/ipopressrelaeased.component";
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
