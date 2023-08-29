import React from "react";
import styles from "./feed.module.css";
import { patternSPAC } from "@/lib/ts/newsletter-feed";

export const Feed: React.FC<{
  type: string;
  data: patternSPAC | null;
}> = ({ type, data }) => {
  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.header}>{data.title}</div>
      <div className={styles.subHeader}>{data.subtitle}</div>
      <article className={styles.articleContainer}>
        <div>{data.deals.title}</div>
        {data.deals.attr.map((deal, index) => {
          return (
            <section
              key={index.toString() + deal.title}
              className={styles.dealContainer}
            >
              <div className={styles.dealTitle}>{deal.title}</div>
              {deal.points.map((point, index2) => {
                return (
                  <div
                    key={index.toString() + point + index2.toString()}
                    className={styles.dealAttrValue}
                  >
                    {point}
                  </div>
                );
              })}
            </section>
          );
        })}

        <section>
          <div>{data.spacUpdates.title}</div>
          <main>
            <div>{data.spacUpdates.liquidationsTerminations.title}</div>
            {data.spacUpdates.liquidationsTerminations.points.map(
              (point, index) => {
                return (
                  <div
                    key={index.toString() + point}
                    className={styles.dealAttrValue}
                  >
                    {point}
                  </div>
                );
              }
            )}
          </main>

          <main>
            <div>{data.spacUpdates.liquidationsTerminations.title}</div>
            {data.spacUpdates.liquidationsTerminations.points.map(
              (point, index) => {
                return (
                  <div
                    key={index.toString() + point}
                    className={styles.dealAttrValue}
                  >
                    {point}
                  </div>
                );
              }
            )}
          </main>

          <main>
            <div>{data.spacUpdates.mergerVotesCompletion.title}</div>
            {data.spacUpdates.mergerVotesCompletion.points.map(
              (point, index) => {
                return (
                  <div
                    key={index.toString() + point}
                    className={styles.dealAttrValue}
                  >
                    {point}
                  </div>
                );
              }
            )}
          </main>

          <main>
            <div>{data.spacUpdates.dealCompletion.title}</div>
            {data.spacUpdates.dealCompletion.points.map((point, index) => {
              return (
                <div
                  key={index.toString() + point}
                  className={styles.dealAttrValue}
                >
                  {point}
                </div>
              );
            })}
          </main>
        </section>

        <section>
          <div>{data.otherSpacUpdates.title}</div>
          {data.otherSpacUpdates.attr.map((deal, index) => {
            return (
              <section
                key={index.toString() + deal.title}
                className={styles.dealContainer}
              >
                <div className={styles.dealTitle}>{deal.title}</div>
                {deal.points.map((point, index2) => {
                  return (
                    <div
                      key={index.toString() + point + index2.toString()}
                      className={styles.dealAttrValue}
                    >
                      {point}
                    </div>
                  );
                })}
              </section>
            );
          })}
        </section>

        <section>
          <div>{data.listings.title}</div>
          <div>{data.listings.ipoNewS1RegistrationWithdrawals.title}</div>
          {data.listings.ipoNewS1RegistrationWithdrawals.points.map(
            (item, i) => {
              return <div key={item + i.toString()}>{item}</div>;
            }
          )}
        </section>

        <section>
          <div>{data.keyFilings.title}</div>
          <div>{data.keyFilings.extensions.title}</div>
          {data.keyFilings.extensions.points.map((item, i) => {
            return <div key={item + i.toString()}>{item}</div>;
          })}

          <div>{data.keyFilings.s4Filings.title}</div>
          {data.keyFilings.s4Filings.points.map((item, i) => {
            return <div key={item + i.toString()}>{item}</div>;
          })}

          <div>{data.keyFilings.postMergerS1Filings.title}</div>
          {data.keyFilings.postMergerS1Filings.points.map((item, i) => {
            return <div key={item + i.toString()}>{item}</div>;
          })}
        </section>
      </article>
    </main>
  );
};
