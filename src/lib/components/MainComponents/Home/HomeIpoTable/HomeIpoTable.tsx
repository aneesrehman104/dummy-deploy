import React from "react";
import styles from "./HomeIpoTable.module.css";
import { homeConstants } from "@/lib/ts/constants";
import { ListingTrackTable } from "@/lib/components/CommonComponents";
function TableTitle() {
  return (
    <div className={styles.tableTitle}>{homeConstants.IPOPipeline.title}</div>
  );
}
function HomeIpoTable() {
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
      name: "Company",
      key: "company",
      type: "strings",
    },
    {
      name: "Event",
      key: "event",
      type: "strings",
    },
    {
      name: "Status",
      key: "status",
      type: "strings",
    },
    {
      name: "Est. Pricing Date",
      key: "pricingDate",
      type: "strings",
    },
    {
      name: "Price/range",
      key: "priceRange",
      type: "strings",
    },
    {
      name: "Proceeds/range",
      key: "proceedsRange",
      type: "strings",
    },
  ];

  return (
    <section className={styles.stockstablesection}>
      <TableTitle />
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
          <ListingTrackTable data={data} headerArray={headerArray} />
        </div>
      </div>
    </section>
  );
}

export default HomeIpoTable;
