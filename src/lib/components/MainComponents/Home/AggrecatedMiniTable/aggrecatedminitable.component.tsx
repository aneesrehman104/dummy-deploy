import React, { Fragment, useState } from "react";
import styles from "../dashboard-header.module.css";
import { homeConstants } from "@/lib/ts/constants";
import { AggratedDataTitles, IAggregation, dummy_data_first, dummy_data_second, dummy_data_third } from "@/lib/components/CommonComponents/Aggregation/constants";
import { AggregationCard } from "@/lib/components/CommonComponents/Aggregation/aggregation.component";

const jsonResponse = "application/json";
const Title: React.FC<{ text: string }> = ({ text }) => {
  return <div className={styles.aggregatedMiniTables}>{text}</div>;
};

interface PROPS {}
const AggrecatedMiniTable: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [aggregatedMiniTableData, setAggregatedMiniTableData] = useState<
    Record<string, IAggregation[]>[]
  >([dummy_data_first, dummy_data_second, dummy_data_third]);

  // useEffect(() => {
  //   const source = axios.CancelToken.source();

  //   const getArrrecatedMiniTableData = async () => {
  //     setIsLoading(true);

  //     try {
  //       const response = await getODataWithParams(URLs.ipoOdata, {
  //         cancelToken: source.token,
  //       });

  //       if (response.status === 200 && response.data !== null) {
  //         setArrrecatedMiniTableData(response.data);
  //       }
  //     } catch (error) {
  //       if (axios.isCancel(error)) {
  //         console.log("Request cancelled:", (error as AxiosError).message);
  //       } else {
  //         console.error("An error occurred:", (error as AxiosError).message);
  //       }
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   getArrrecatedMiniTableData();
  //   return () => {
  //     source.cancel("Request cancelled due to component unmount");
  //   };
  // }, []);

  return (
    <section className={styles.minitables}>
      <Title text={homeConstants.AggrecatedMiniTable.title}></Title>
      <main className={styles.cardscontainer}>
        {aggregatedMiniTableData.map((item, index) => {
          return (
            <Fragment key={AggratedDataTitles[index].id}>
              <AggregationCard
                title={AggratedDataTitles[index].title}
                data={item}
              />
            </Fragment>
          );
        })}
      </main>
    </section>
  );
};

export default AggrecatedMiniTable;
