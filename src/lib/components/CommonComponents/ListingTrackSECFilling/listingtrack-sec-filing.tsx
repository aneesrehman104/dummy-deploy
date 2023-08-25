import React from "react";
import styles from "./sec-filing.module.css";
import Skeleton from "@mui/material/Skeleton";
import { FilingComponent, NotFiledComponent } from "./components";


const ListingTrackSECFilling = ({
  isLoading,
  title,
  dataArray,
  isFilling,
}: any) => {
  return !isFilling ? (
    <FilingComponent
      title={title}
      isLoading={isLoading}
      dataArray={dataArray}
    />
  ) : (
    <div className={styles.sectionlistnewscontainer}>
      <div className={styles.aggregatedMiniTables}>{title}</div>
      {isLoading ? (
        <Skeleton
          variant="rounded"
          height={200}
          width={"100%"}
          style={{ marginTop: 15 }}
        />
      ) : (
        <NotFiledComponent dataArray={dataArray} />
      )}
    </div>
  );
};

export default ListingTrackSECFilling;
