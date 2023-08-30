import React from "react";
import styles from "./table.module.css";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";

interface PROPS {
  isLoading: boolean;
  headerArray: any;
  pipelineData: any;
  title: string;
}
const TableTitle: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.tableTitle}>{text}</div>
);
export const Table: React.FC<PROPS> = ({
  isLoading,
  headerArray,
  pipelineData,
  title,
}) => {
  return (
    <section className={styles.stockstablesection}>
      <TableTitle text={title} />
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable data={pipelineData} headerArray={headerArray} />
          )}
        </div>
      </div>
    </section>
  );
};
