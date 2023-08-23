import React, { useState, useEffect } from "react";
import styles from "./home-ipo-table.module.css";
import { homeConstants } from "@/lib/ts/constants";
import { getODataWithParams } from "@/lib/ts/api";
import { IpoPipelineInterface } from "@/lib/ts/interface";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import { headerArrayHomeIpoTable } from "./constants";
import axios, { AxiosError } from "axios";

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
    const source = axios.CancelToken.source();

    const getIPOPipelineData = async () => {
      setIsLoading(true);

      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          top: 5,
          filter: "ipoStatus eq 'Expected'",
          orderby: [{ field: "companyName", direction: "desc" }],
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setIPOPipelineData(
            jsonResponse === "application/json"
              ? response.data
              : response.data.source.dataset
          );
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getIPOPipelineData();

    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
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
