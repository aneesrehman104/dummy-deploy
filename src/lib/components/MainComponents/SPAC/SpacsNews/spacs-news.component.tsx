import styles from "./spacs-news.module.css";
import React from "react";
import News from "./News/news.component";
import CurrentUpdateFeed from "./CurrentUpdateFeed/current-update-feed.component";
import TwitterFeed from "./TwitterFeed/twitter-feed.component";
import PressReleases from "./PressReleases/press-releases.component";
const SpacsNews = () => {
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

export default SpacsNews;
