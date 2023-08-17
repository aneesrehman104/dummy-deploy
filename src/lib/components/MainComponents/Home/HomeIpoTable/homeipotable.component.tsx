import React, { useState, useEffect } from "react";
import styles from "./HomeIpoTable.module.css";
import { homeConstants } from "@/lib/ts/constants";
import { getODataWithParams } from "@/lib/ts/api";
import { IpoPipelineInterface } from "@/lib/ts/interface";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import { headerArrayHomeIpoTable } from "./constants";
const jsonResponse = "application/json";
interface PROPS {}
const TableTitle = () => (
  <div className={styles.tableTitle}>{homeConstants.IPOPipeline.title}</div>
);
const HomeIpoTable: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [iPOPipelineData, setIPOPipelineData] = useState<
    IpoPipelineInterface[]
  >([]);

  useEffect(() => {
    const getIPOPipelineData = async () => {
      setIsLoading(true);
      const response = await getODataWithParams(URLs.ipoOdata, {
        top: 5,
        orderby: [{ field: "companyName", direction: "desc" }],
      });
      if (response.status === 200 && response.data !== null) {
        setIPOPipelineData(
          jsonResponse === "application/json"
            ? response.data
            : response.data.source.dataset
        );
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };
    getIPOPipelineData();
  }, []);

  return (
    <section className={styles.stockstablesection}>
      <TableTitle />
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              data={iPOPipelineData}
              headerArray={headerArrayHomeIpoTable}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeIpoTable;
