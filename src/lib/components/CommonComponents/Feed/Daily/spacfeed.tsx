import React from "react";
import styles from "../feed.module.css";
import { patternSPAC } from "@/lib/ts/newsletter-feed";
import { Header, Point, PointTitle, SectionWrapper, SubHeader, SubSectionWrapper, SubTitle, Title } from "../common";

export const SpacFeed: React.FC<{
  type: string;
  data: patternSPAC | null;
}> = ({ type, data }) => {
  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.mainContainer}>
      <Header title={data.title} />
      <SubHeader sub_title={data.subtitle} />

      <article className={styles.articleContainer}>
        <Title title={data.deals.title} />
        {data.deals.attr.map((deal, deal_index) => {
          return (
            <section
              key={deal_index.toString() + deal.title}
              className={styles.dealContainer}
            >
              <SubTitle sub_title={deal.title} />
              {deal.points.map((point, point_index) => (
                <Point key={point_index.toString() + point} point={point} />
              ))}
            </section>
          );
        })}

        <SectionWrapper>
          <Title title={data.spacUpdates.title} />
          <SubSectionWrapper>
            <SubTitle
              sub_title={data.spacUpdates.liquidationsTerminations.title}
            />
            {data.spacUpdates.liquidationsTerminations.points.map(
              (point, point_index) => (
                <Point key={point_index.toString() + point} point={point} />
              )
            )}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle
              sub_title={data.spacUpdates.liquidationsTerminations.title}
            />
            {data.spacUpdates.liquidationsTerminations.points.map(
              (point, point_index) => (
                <Point key={point_index.toString() + point} point={point} />
              )
            )}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle
              sub_title={data.spacUpdates.mergerVotesCompletion.title}
            />
            {data.spacUpdates.mergerVotesCompletion.points.map(
              (point, point_index) => (
                <Point key={point_index.toString() + point} point={point} />
              )
            )}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title={data.spacUpdates.dealCompletion.title} />
            {data.spacUpdates.dealCompletion.points.map(
              (point, point_index) => (
                <Point key={point_index.toString() + point} point={point} />
              )
            )}
          </SubSectionWrapper>

          <SubSectionWrapper>
            <SubTitle sub_title="Extensions" />
            {data.spacUpdates.extensions.title.map((title, title_index) => {
              return (
                <section
                  key={title_index.toString() + title}
                  className={styles.dealContainer}
                >
                  <PointTitle point={title} />
                  {data.spacUpdates.extensions.points[title_index].map(
                    (point, point_index) => (
                      <Point
                        key={point_index.toString() + point}
                        point={point}
                      />
                    )
                  )}
                </section>
              );
            })}
          </SubSectionWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.otherSpacUpdates.title} />
          {data.otherSpacUpdates.attr.map((deal, deal_index) => {
            return (
              <section
                key={deal_index.toString() + deal.title}
                className={styles.dealContainer}
              >
                <SubTitle sub_title={data.otherSpacUpdates.title} />
                {deal.points.map((point, point_index) => (
                  <Point
                    key={deal_index.toString() + point + point_index.toString()}
                    point={point}
                  />
                ))}
              </section>
            );
          })}
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.listings.title} />
          <SubTitle
            sub_title={data.listings.ipoNewS1RegistrationWithdrawals.title}
          />
          {data.listings.ipoNewS1RegistrationWithdrawals.points.map(
            (point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            )
          )}
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.keyFilings.title} />
          <SubTitle sub_title={data.keyFilings.extensions.title} />
          {data.keyFilings.extensions.points.map((point, point_index) => (
            <Point key={point_index.toString() + point} point={point} />
          ))}

          <SubTitle sub_title={data.keyFilings.s4Filings.title} />
          {data.keyFilings.s4Filings.points.map((point, point_index) => (
            <Point key={point_index.toString() + point} point={point} />
          ))}

          <SubTitle sub_title={data.keyFilings.postMergerS1Filings.title} />
          {data.keyFilings.postMergerS1Filings.points.map(
            (point, point_index) => (
              <Point key={point_index.toString() + point} point={point} />
            )
          )}
        </SectionWrapper>

        <SectionWrapper>
          <Title title={data.keyEventCalendar.title} />
          {data.keyEventCalendar.points.map((point, point_index) => (
            <Point key={point_index.toString() + point} point={point} />
          ))}
        </SectionWrapper>
      </article>
    </main>
  );
};
