import React, { Fragment, useState, useEffect } from "react";
import styles from "./HomeIpoTable.module.css";
import { homeConstants } from "@/lib/ts/constants";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";

function TableTitle() {
  return (
    <div className={styles.tableTitle}>{homeConstants.IPOPipeline.title}</div>
  );
}
function HomeIpoTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [iPOPipelineData, setIPOPipelineData] = useState([])

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
      key: "ipoPrice",
      type: "string",
    },
    {
      name: "Offer Size (M) ",
      key: "ipoOfferingSize",
      type: "string",
    },
  ];

  const getIPOPipelineData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth("ipo");
    if (response.status === 200 && response.data !== null) {
      setIPOPipelineData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
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
