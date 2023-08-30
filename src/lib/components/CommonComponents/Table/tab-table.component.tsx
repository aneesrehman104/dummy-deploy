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
  itemsPerPage?: number;
  currentPage?: number;
  showPagination: boolean;
  paginate: (page: number) => void;
  title: string;
  totalLength?: number;
  tabData: Array<{ label: string; index: number }>;
  handleTabClick: (index: number) => void;
  selectedTab: number;
}
const TableTitle: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.tableTitle} style={{ width: "100%" }}>
    {text}
  </div>
);

const Tabs: React.FC<{
  tabData: Array<{ label: string; index: number }>;
  handleTabClick: (index: number) => void;
  selectedTab: number;
}> = ({ tabData, handleTabClick, selectedTab }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid #d2ecf9",
        display: "flex",
        width: "100%",
      }}
    >
      {tabData.map(({ label, index }) => (
        <div
          key={index + "ee20401322"}
          onClick={() => handleTabClick(index)}
          className={`${styles.headerCell} ${
            selectedTab === index && styles.selectedHeader
          }`}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export const TabTable: React.FC<PROPS> = ({
  isLoading,
  headerArray,
  pipelineData,
  title,
  showPagination,
  paginate,
  itemsPerPage,
  currentPage,
  totalLength,
  tabData,
  handleTabClick,
  selectedTab,
}) => {
  return (
    <section className={styles.stockstablesection}>
      <TableTitle text={title} />
      <div className={styles.companiestable}>
        <Tabs
          tabData={tabData}
          handleTabClick={handleTabClick}
          selectedTab={selectedTab}
        />
        <div className={styles.tablecontent} style={{ overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              data={pipelineData}
              headerArray={headerArray}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              paginate={paginate}
              totalLength={totalLength}
              showPagination={showPagination}
            />
          )}
        </div>
      </div>
    </section>
  );
};
