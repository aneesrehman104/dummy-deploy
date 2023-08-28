import React from "react";
import styles from "../feed.module.css";
import { patternIPO, patternSPAC } from "@/lib/ts/newsletter-feed";
import {
  Header,
  Point,
  PointTitle,
  SectionWrapper,
  SubHeader,
  SubSectionWrapper,
  SubTitle,
  Title,
} from "../common";

export const IpoFeed: React.FC<{
  type: string;
  data: patternIPO | null;
}> = ({ type, data }) => {
  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.mainContainer}>
      <Header title={data.title} />
      <SubHeader sub_title={data.subtitle} />

      <article className={styles.articleContainer}>
        <SectionWrapper>
          <Title title={data.ipoNews.title} />
          <SubSectionWrapper>
            <SubTitle sub_title={data.ipoNews.rumors.title} />
            {data.ipoNews.rumors.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.ipoNews.marketNews.title} />
            {data.ipoNews.marketNews.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.launchAction.title} />
          {data.launchAction.points.map((point, point_index) => (
            <Point key={point_index.toString() + point} point={point} />
          ))}
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.ipoUpdates.title} />
          <SubSectionWrapper>
            <SubTitle sub_title={data.ipoUpdates.newFilings.title} />
            {data.ipoUpdates.newFilings.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.ipoUpdates.amendments.title} />
            {data.ipoUpdates.amendments.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.ipoUpdates.withdrawals.title} />
            {data.ipoUpdates.withdrawals.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.ipoCalendar.title} />
          {data.ipoCalendar.points.map((point, point_index) => (
            <Point key={point_index.toString() + point} point={point} />
          ))}
        </SectionWrapper>
      </article>
    </main>
  );
};
