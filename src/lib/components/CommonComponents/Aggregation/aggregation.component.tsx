import styles from "./aggregation.module.css";

const jsonResponse = "application/json";

const CardContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.card}>{children}</div>;
};

const CardTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.cardheader}>
      <span className={styles.listingtrack}>{title}</span>
    </div>
  );
};

const CardRowInfo: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.cardrowinfo}>{children}</div>;
};

const CardRowHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.cardrowheader}>
      <div className={styles.head}>{title}</div>
    </div>
  );
};

const InformationTitle: React.FC<{ title: string }> = ({ title }) => {
  return <div className={styles.ytdWithSpacsContainer}>{title}</div>;
};

const InformationValue: React.FC<{ value: string }> = ({ value }) => {
  return <div className={styles.div}>{value}</div>;
};

interface IAggregation {
  value: string | number;
  title: string;
  id: string;
}

export const AggregationCard: React.FC<{
  title: string;
  data: Record<string, Array<IAggregation>>;
}> = ({ title, data }) => {
  return (
    <CardContainer>
      <CardTitle title={title} />

      {Object.keys(data).map((key, card_index) => {
        return (
          <CardRowInfo key={card_index.toString() + key}>
            <CardRowHeader title={key} />
            <div className={styles.frameParent}>
              {data[key].map((item) => {
                return (
                  <div key={item.id}>
                    <InformationValue value={item.value.toString()} />
                    <InformationTitle title={item.title} />
                  </div>
                );
              })}
            </div>
          </CardRowInfo>
        );
      })}
    </CardContainer>
  );
};
