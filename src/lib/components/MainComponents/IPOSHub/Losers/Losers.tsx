// import React from "react";
// import styles from "./losers.module.css";
// import { useState } from "react";
// import dynamic from "next/dynamic";
// import MyTable from "./functions";
// function Losers() {
//   const [selectedTab, setSelectedTab] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(2);
//   const data = [
//     {
//       company: "Navia Studio",
//       symbol: "NVAC",
//       last30D: [
//         10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188, 10, 150, 20, 10,
//         133, 188, 500, 10, 150, 20, 10, 188,
//       ],
//       price: "$10.50",
//       daily: "-2.14%",
//       vol: "910.0",
//     },
//     {
//       company: "BBC",
//       symbol: "SPAC",
//       last30D: [
//         900, 10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188, 10, 150, 20,
//         10, 133, 188, 500, 10, 150, 20, 10,
//       ],
//       price: "Jun 2 ‘22",
//       daily: "-1.66%",
//       vol: "1.1k",
//     },
//     {
//       company: "CNN",
//       symbol: "Merger",
//       last30D: [
//         10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188, 10, 150, 20, 10,
//         133, 188, 500, 10, 150, 20, 10, 188,
//       ],
//       price: "May 2 ‘22",
//       daily: "-3.66%",
//       vol: "1.1k",
//     },
//     {
//       company: "Fair Foods",
//       symbol: "IPO",
//       last30D: [
//         500, 10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188, 10, 150, 20,
//         10, 133, 188, 500, 10, 150, 20, 10,
//       ],
//       price: "Sept 2 ‘22",
//       daily: "-2.26%",
//       vol: "1.1k",
//     },
//   ];

//   const paginate = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   // useEffect(() => {
//   //   setCurrentPage(1); // Reset page to 1 when sorting or changing data
//   // }, [sortColumn, sortDirection, data]);

//   return (
//     <section className={styles.stockstablesection}>
//       <div className={styles.tableTitle}>Losers: Past Year IPOS</div>
//       <div className={styles.tableContainerInner}>
//         <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
//           <div
//             onClick={() => setSelectedTab(0)}
//             className={`${styles.headerCell} ${
//               selectedTab === 0 && styles.selectedHeader
//             }`}
//           >
//             Daily
//           </div>
//           <div
//             onClick={() => setSelectedTab(1)}
//             className={`${styles.headerCell} ${
//               selectedTab === 1 && styles.selectedHeader
//             }`}
//           >
//             Weekly
//           </div>
//           <div
//             onClick={() => setSelectedTab(2)}
//             className={`${styles.headerCell} ${
//               selectedTab === 2 && styles.selectedHeader
//             }`}
//           >
//             Since IPOS Closing
//           </div>
//         </div>
//         <div style={{ overflow: "auto" }}>
//           <MyTable
//             data={data}
//             itemsPerPage={itemsPerPage}
//             currentPage={currentPage}
//             paginate={paginate}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Losers;



import React, { Fragment, useEffect } from "react";
import styles from "./Losers.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import MyTable from "./functions";
import { SkeltonTable } from "@/lib/components/CommonComponents";

function Losers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [iPOSTradingLosersData, setIPOSTradingLosersData] = useState<any>();
  const [itemsPerPage] = useState(5);

  const getIPOSTradingLosersData = async () => {
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
      setIPOSTradingLosersData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIPOSTradingLosersData();
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
      <div className={styles.tableTitle}>Past Year IPO Loserss</div>
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
            iPOSTradingLosersData && (
              <MyTable
                data={iPOSTradingLosersData?.dataset}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={iPOSTradingLosersData?.additional_dataset}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Losers;

