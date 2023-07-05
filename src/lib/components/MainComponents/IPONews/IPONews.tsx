import styles from "./IPONews.module.css";
import React from "react";
import News from "./News/News";
import CurrentUpdateFeed from "./CurrentUpdateFeed/CurrentUpdateFeed";
import TwitterFeed from "./TwitterFeed/TwitterFeed";
import PressReleases from "./PressReleases/PressReleases";
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
