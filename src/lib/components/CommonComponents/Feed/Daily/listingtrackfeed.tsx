import React from "react";
import styles from "../feed.module.css";
import { patternListingTrack, patternMerger } from "@/lib/ts/newsletter-feed";
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

export const ListingtrackFeed: React.FC<{
  type: string;
  data: patternListingTrack | null;
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
          <Title title={data.marketNews.title} />
          {data.marketNews.points.map((point, point_index) => (
            <Point key={point_index.toString() + point} point={point} />
          ))}
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.ipos.title} />
          <SubSectionWrapper>
            <SubTitle sub_title={data.ipos.news.title} />
            {data.ipos.news.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.ipos.pricings.title} />
            {data.ipos.pricings.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.ipos.gainersLosers.title} />
            {data.ipos.gainersLosers.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.ipos.theBestOfTheNet.title} />
            {data.ipos.theBestOfTheNet.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.mergers.title} />
          <SubSectionWrapper>
            <SubTitle sub_title={data.mergers.news.title} />
            {data.mergers.news.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.mergers.pricings.title} />
            {data.mergers.pricings.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.mergers.gainersLosers.title} />
            {data.mergers.gainersLosers.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.mergers.theBestOfTheNet.title} />
            {data.mergers.theBestOfTheNet.points.map(
              (point, point_index) => (
                <Point key={point_index.toString() + point} point={point} />
              )
            )}
          </SubSectionWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.spacs.title} />
          <SubSectionWrapper>
            <SubTitle sub_title={data.spacs.news.title} />
            {data.spacs.news.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.spacs.pricings.title} />
            {data.spacs.pricings.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.spacs.gainersLosers.title} />
            {data.spacs.gainersLosers.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.spacs.theBestOfTheNet.title} />
            {data.spacs.theBestOfTheNet.points.map((point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            ))}
          </SubSectionWrapper>
        </SectionWrapper>
      </article>
    </main>
  );
};
