import React from "react";
import styles from "./press-releases.module.css";
import Image from "next/image";
  interface PROPS {}

const PressReleases: React.FC<PROPS> = () => {
  return (
    <section className={styles.headlineslistcontainer}>
      <div className={styles.sectionlistnewscontainerParent}>
        <div className={styles.sectionlistnewscontainer}>
          <div className={styles.aggregatedMiniTables}>
            Press Releases & ListingTrack Updates
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
                    <div className={styles.siteName}>Company Press Release</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                <Image src="/vector4.svg" alt="vector4" width={6} height={11} />
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
                    <div className={styles.siteName}>ListingTrack Update</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                <Image src="/vector4.svg" alt="vector4" width={6} height={11} />
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
                    <div className={styles.siteName}>ListingTrack Update</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                <Image src="/vector4.svg" alt="vector4" width={6} height={11} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionlistnewscontainer}>
          <div className={styles.aggregatedMiniTables}>SEC FIlings</div>

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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "98%",
                      }}
                    >
                      <div className={styles.headlineCallOut}>
                        Microsoft Corp. -- 8-K
                      </div>
                      <div>05/01/2023 8:05AM</div>
                    </div>
                    <div className={styles.siteName}>SEC</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                <Image src="/vector4.svg" alt="vector4" width={6} height={11} />
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "98%",
                      }}
                    >
                      <div className={styles.headlineCallOut}>
                        Microsoft Corp. -- 8-K
                      </div>
                      <div>05/01/2023 8:05AM</div>
                    </div>
                    <div className={styles.siteName}>SEC</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                <Image src="/vector4.svg" alt="vector4" width={6} height={11} />
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "98%",
                      }}
                    >
                      <div className={styles.headlineCallOut}>
                        Microsoft Corp. -- 8-K
                      </div>
                      <div>05/01/2023 8:05AM</div>
                    </div>
                    <div className={styles.siteName}>SEC</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                <Image src="/vector4.svg" alt="vector4" width={6} height={11} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PressReleases;
