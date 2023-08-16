import React, { Fragment, useState, useEffect } from "react";
import styles from "./HomeMergerTable.module.css";
import { homeConstants } from "@/lib/ts/constants";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";

function HomeMergerTableTitle() {
  return (
    <div className={styles.tableTitle}>
      {homeConstants.MergersPipeline.title}
    </div>
  );
}

function HomeMergerTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [mergerPipelineData, setMergerPipelineData] = useState([
    {
      company: "Activision",
      event: "IPO",
      status: "Announced",
      pricingDate: "Jan 2 ‘22",
      priceRange: "$21/share",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "BBC",
      event: "SPAC",
      status: "Closed",
      pricingDate: "Jun 2 ‘22",
      priceRange: "$34/share2",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "CNN",
      event: "Merger",
      status: "Announced",
      pricingDate: "May 2 ‘22",
      priceRange: "$74/share",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "Fair Foods",
      event: "IPO",
      status: "Closed",
      pricingDate: "Sept 2 ‘22",
      priceRange: "$12/share2",
      proceedsRange: "$150M - $175M",
    },
  ]);
  const data = [
    {
      company: "Activision",
      event: "IPO",
      status: "Announced",
      pricingDate: "Jan 2 ‘22",
      priceRange: "$21/share",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "BBC",
      event: "SPAC",
      status: "Closed",
      pricingDate: "Jun 2 ‘22",
      priceRange: "$34/share2",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "CNN",
      event: "Merger",
      status: "Announced",
      pricingDate: "May 2 ‘22",
      priceRange: "$74/share",
      proceedsRange: "$150M - $175M",
    },
    {
      company: "Fair Foods",
      event: "IPO",
      status: "Closed",
      pricingDate: "Sept 2 ‘22",
      priceRange: "$12/share2",
      proceedsRange: "$150M - $175M",
    },
  ];
  const headerArray = [
    {
      name: "Target",
      key: "Target",
      type: "string",
    },
    {
      name: "Acquirer",
      key: "Acquirer",
      type: "string",
    },
    {
      name: "Status",
      key: "Status",
      type: "string",
    },
    {
      name: "Type",
      key: "Type",
      type: "string",
    },
    {
      name: "Announced Date",
      key: "AnnouncedDate",
      type: "string",
    },
    {
      name: "Valuation",
      key: "Valuation",
      type: "string",
    },
    {
      name: "View Deal Page",
      key: "ViewDealPage",
      type: "string",
    },
    
  ];
  const getIPOPipelineData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth("ipo");
    if (response.status === 200 && response.data !== null) {
      setMergerPipelineData(response.data);
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
      <HomeMergerTableTitle />
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
        {isLoading ? (
            <SkeltonTable />
          ) : (
          <ListingTrackTable data={mergerPipelineData} headerArray={headerArray} />
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeMergerTable;
