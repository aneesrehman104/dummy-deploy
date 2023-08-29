import React from "react";
import styles from "../feed.module.css";
import { patternMerger } from "@/lib/ts/newsletter-feed";
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

export const MergerFeed: React.FC<{
  type: string;
  data: patternMerger | null;
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
          <Title title={data.mergerNews.title} />
          <SubSectionWrapper>
            <SubTitle sub_title={data.mergerNews.rumors.title} />
            {data.mergerNews.rumors.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.mergerNews.marketNews.title} />
            {data.mergerNews.marketNews.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.mergerAnnouncements.title} />
          {data.mergerAnnouncements.points.map((point, point_index) => (
            <Point key={point_index.toString() + point} point={point} />
          ))}
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.mergerUpdates.title} />
          <SubSectionWrapper>
            <SubTitle sub_title={data.mergerUpdates.mergerVotes.title} />
            {data.mergerUpdates.mergerVotes.points.map(
              (point, point_index) => (
                <Point key={point_index.toString() + point} point={point} />
              )
            )}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.mergerUpdates.terminations.title} />
            {data.mergerUpdates.terminations.points.map(
              (point, point_index) => (
                <Point key={point_index.toString() + point} point={point} />
              )
            )}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.mergerUpdates.dealAmendments.title} />
            {data.mergerUpdates.dealAmendments.points.map(
              (point, point_index) => (
                <Point key={point_index.toString() + point} point={point} />
              )
            )}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.mergerUpdates.s4Filings.title} />
            {data.mergerUpdates.s4Filings.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.mergerCalender.title} />
          {data.mergerCalender.points.map((point, point_index) => (
            <Point key={point_index.toString() + point} point={point} />
          ))}
        </SectionWrapper>
      </article>
    </main>
  );
};
