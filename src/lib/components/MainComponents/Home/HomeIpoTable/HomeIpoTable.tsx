import React, { Fragment, useState, useEffect } from "react";
import styles from "./HomeIpoTable.module.css";
import { homeConstants } from "@/lib/ts/constants";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";

const jsonResponse = "application/json";

function TableTitle() {
  return (
    <div className={styles.tableTitle}>{homeConstants.IPOPipeline.title}</div>
  );
}
function HomeIpoTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [iPOPipelineData, setIPOPipelineData] = useState([]);

  const headerArray = [
    {
      name: "Company Name",
      key: "companyName",
      type: "string",
    },
    {
      name: "Ticker",
      key: "companySymbol",
      type: "string",
    },
    {
      name: "IPO Type",
      key: "ipoType",
      type: "string",
    },
    {
      name: "Status",
      key: "ipoStatus",
      type: "string",
    },
    {
      name: "Exchange",
      key: "exchange",
      type: "string",
    },
    {
      name: "Date or Exp. Date",
      key: "expectedIpoDate",
      type: "string",
    },
    {
      name: "Price",
      key: "expectedIpoPrice",
      type: "string",
    },
    {
      name: "Offer Size (M) ",
      key: "ipoOfferingSize",
      type: "string",
    },
  ];

  useEffect(() => {
    const getIPOPipelineData = async () => {
      setIsLoading(true);
      const response = await getODataWithParams(URLs.ipoOdata, {
        top: 5,
        orderby: [{ field: "companyName", direction: "desc" }]
      });
      console.log(response);
      if (response.status === 200 && response.data !== null) {
        setIPOPipelineData(jsonResponse === "application/json" ? response.data : response.data.source.dataset);
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
              headerArray={headerArray}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeIpoTable;
