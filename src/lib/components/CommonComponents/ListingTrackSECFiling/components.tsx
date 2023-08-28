import React from "react";
import styles from "./sec-filing.module.css";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import Vector4 from "@public/vector4.svg";
import Vector3 from "@public/vector3.svg";

export const FilingComponent: React.FC<{
    isLoading: boolean;
    dataArray: any;
    title: string;
  }> = ({ isLoading, dataArray, title }) => {
    return (
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
          dataArray?.map((item: any, index: number) => {
            return (
              <div className={styles.paper2} key={index}>
                <div className={styles.tablerow}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.customTableCustomCell4}>
                      <div className={styles.vectorWrapper}>
                        <Image
                          src={Vector3}
                          alt="vector3"
                          width={18}
                          height={18}
                        />
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.headlineCallOut}>{item.news}</div>
                        <div className={styles.siteName}>{item.sitename}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chevronRight}>
                    <Image src={Vector4} alt="vector4" width={6} height={11} />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  };
  
export const NotFiledComponent: React.FC<{ dataArray: any }> = ({ dataArray }) => {
    return dataArray?.map((item: any, index: number) => {
      return (
        <div className={styles.paper2} key={index}>
          <div className={styles.tablerow}>
            <div className={styles.frameWrapper}>
              <div className={styles.customTableCustomCell4}>
                <div className={styles.vectorWrapper}>
                  <Image src={Vector3} alt="vector3" width={18} height={18} />
                </div>
                <div className={styles.frameWrapper}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "98%",
                    }}
                  >
                    <div className={styles.headlineCallOut}>{item.heading}</div>
                    <div className={styles.headlineCallOut}>{item.date}</div>
                  </div>
                  <div className={styles.siteName}>{item.sitename}</div>
                </div>
              </div>
            </div>
            <div className={styles.chevronRight}>
              <Image src={Vector4} alt="vector4" width={6} height={11} />
            </div>
          </div>
        </div>
      );
    });
  };