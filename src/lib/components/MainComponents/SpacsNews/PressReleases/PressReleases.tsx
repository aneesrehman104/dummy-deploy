import React from "react";
import styles from "./PressReleases.module.css";
import Image from "next/image";
function PressReleases() {
  return (
    <div className={styles.headlineslistcontainer}>
      <div className={styles.sectionlistnewscontainerParent}>
        <div className={styles.sectionlistnewscontainer}>
          <div className={styles.aggregatedMiniTables}>Press Releases</div>

          <div className={styles.paper2}>
            <div className={styles.tablerow}>
              <div className={styles.frameWrapper}>
                <div className={styles.customTableCustomCell4}>
                  <div className={styles.vectorWrapper}>
                    <Image
                      src="/vector3.svg"
                      alt="vector3"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.headlineCallOut}>
                      Headline call out goes here, truncate at 54 charact..
                    </div>
                    <div className={styles.siteName}>Site name</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                 <Image
                      src="/vector4.svg"
                      alt="vector4"
                      width={6}
                      height={11}
                    />
              </div>
            </div>
          </div>
          <div className={styles.paper2}>
            <div className={styles.tablerow}>
              <div className={styles.frameWrapper}>
                <div className={styles.customTableCustomCell4}>
                  <div className={styles.vectorWrapper}>
                    <Image
                      src="/vector3.svg"
                      alt="vector3"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.headlineCallOut}>
                      Headline call out goes here, truncate at 54 charact..
                    </div>
                    <div className={styles.siteName}>Site name</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                 <Image
                      src="/vector4.svg"
                      alt="vector4"
                      width={6}
                      height={11}
                    />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionlistnewscontainer}>
          <div className={styles.aggregatedMiniTables}>SEC Filings</div>

          <div className={styles.paper2}>
            <div className={styles.tablerow}>
              <div className={styles.frameWrapper}>
                <div className={styles.customTableCustomCell4}>
                  <div className={styles.vectorWrapper}>
                    <Image
                      src="/vector3.svg"
                      alt="vector3"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.headlineCallOut}>
                      Headline call out goes here, truncate at 54 charact..
                    </div>
                    <div className={styles.siteName}>Site name</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                 <Image
                      src="/vector4.svg"
                      alt="vector4"
                      width={6}
                      height={11}
                    />
              </div>
            </div>
          </div>
          <div className={styles.paper2}>
            <div className={styles.tablerow}>
              <div className={styles.frameWrapper}>
                <div className={styles.customTableCustomCell4}>
                  <div className={styles.vectorWrapper}>
                    <Image
                      src="/vector3.svg"
                      alt="vector3"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.headlineCallOut}>
                      Headline call out goes here, truncate at 54 charact..
                    </div>
                    <div className={styles.siteName}>Site name</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                 <Image
                      src="/vector4.svg"
                      alt="vector4"
                      width={6}
                      height={11}
                    />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressReleases;
