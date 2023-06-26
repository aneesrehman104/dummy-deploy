import React, { Fragment, useEffect } from "react";
import styles from "./gainer.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import MyTable from "./functions";
import { SkeltonTable } from "@/lib/components/CommonComponents";

function Gainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [iPOSTradingGainerData, setIPOSTradingGainerData] = useState<any>();
  const [itemsPerPage] = useState(5);

  const getIPOSTradingGainerData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${
        URLs.spacTrading
      }?page=${currentPage}&offset=${itemsPerPage}&period=daily&gainOrLoser=gain&activeOrDeSPAC=${
        selectedTab === 0 ? "active" : "DeSPAC"
      }`
    );
    console.log("==============data", response);
    if (response.status === 200) {
      setIPOSTradingGainerData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIPOSTradingGainerData();
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Daily", index: 0 },
    { label: "Weekly", index: 1 },
    { label: "Since IPO", index: 2 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Past Year IPO Gainers</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          {tabData.map(({ label, index }) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${styles.headerCell} ${
                selectedTab === index && styles.selectedHeader
              }`}
            >
              {label}
            </div>
          ))}
        </div>
        <div style={{ overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            iPOSTradingGainerData && (
              <MyTable
                data={iPOSTradingGainerData?.dataset}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={iPOSTradingGainerData?.additional_dataset}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Gainer;
