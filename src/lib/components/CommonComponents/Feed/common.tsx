import styles from "./feed.module.css";

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return <div className={styles.header}>{title}</div>;
};

export const SubHeader: React.FC<{ sub_title: string }> = ({ sub_title }) => {
  return <div className={styles.subHeader}>{sub_title}</div>;
};

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return <div className={styles.title}>{title}</div>;
};

export const SubTitle: React.FC<{ sub_title: string }> = ({ sub_title }) => {
  return <div className={styles.subTitle}>{sub_title}</div>;
};

export const PointTitle: React.FC<{ point: string }> = ({ point }) => {
  return <div className={styles.pointTitle}>{point}</div>;
};

export const Point: React.FC<{ point: string }> = ({ point }) => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <div className={styles.dot}></div>
      <div className={styles.dealAttrValue}>{point}</div>
    </main>
  );
};

export const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <section className={styles.sectionContainer}>{children}</section>;
};

export const SubSectionWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <main className={styles.subSectionContainer}>{children}</main>;
};
