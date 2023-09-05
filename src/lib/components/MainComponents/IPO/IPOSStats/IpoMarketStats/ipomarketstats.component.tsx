import React, { useEffect, useRef, useState } from "react";
import styles from "./ipomarketstats.module.css";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { homeConstants } from "@/lib/ts/constants";
import { URLs } from "@/lib/ts/apiUrl";
import { getApiWithoutAuthDefault } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
import { IpoMarketStatsDto } from "@/lib/ts/interface";
import { ipoMarketStatsInitialState } from "@/lib/ts/initialState";
interface PROPS {}

const IpoMarketStats: React.FC<PROPS> = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#0aac85",
            },
        },
    });

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [ipoStatsData, setIpoStatsData] = useState<IpoMarketStatsDto>(
        ipoMarketStatsInitialState
    );

    useEffect(() => {
        const source = axios.CancelToken.source();
        const getIpoStatsData = async () => {
            setIsLoading(true);
            try {
                const response = await getApiWithoutAuthDefault(
                    URLs.ipoMarketStats,
                    {
                        cancelToken: source.token,
                    }
                );

                if (response.status === 200 && response.data !== null) {
                    setIpoStatsData(response.data);
                }
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log(
                        "Request cancelled:",
                        (error as AxiosError).message
                    );
                } else {
                    console.error(
                        "An error occurred:",
                        (error as AxiosError).message
                    );
                }
            } finally {
                setIsLoading(false);
            }
        };

        getIpoStatsData();

        return () => {
            source.cancel("Request cancelled due to component unmount");
        };
    }, []);

    const dataArray = [
        {
            heading: "Overview",
            showSpac: true,
            innerHadding: [
                {
                    title: "IPOs",

                    data: [
                        {
                            value: ipoStatsData.overview.withSpacs.iposYTD,
                            change: "YTD",
                        },
                        {
                            value: ipoStatsData.overview.withSpacs.iposPrevYear,
                            change: "prev year",
                        },
                        {
                            value: `${
                                ipoStatsData.overview.withSpacs
                                    .iposYearlyChangePercentage * 100
                            }%`,
                            change: "yearly Chg % ",
                        },
                    ],
                },
                {
                    title: "UPCOMING",
                    data: [
                        {
                            value: ipoStatsData.overview.withSpacs.iposFiled,
                            change: "FILED",
                        },
                        {
                            value: ipoStatsData.overview.withSpacs
                                .iposScheduled,
                            change: "SCHEDULED",
                        },
                    ],
                },
                {
                    title: "WITHDRAWN",
                    data: [
                        {
                            value: ipoStatsData.overview.withSpacs
                                .iposWithdrawnYTD,
                            change: "YTD",
                        },
                    ],
                },
            ],
        },
        {
            heading: "Pricings YTD",
            showSpac: true,
            innerHadding: [
                {
                    title: "VALUATIONS",
                    data: [
                        { value: "200", change: "OVER $1B" },
                        { value: "$500M", change: "AVG. MKT CAP" },
                        { value: "$250M", change: "MEDIAN MKT CAP" },
                    ],
                },
                {
                    title: "PROCEEDS",
                    data: [
                        { value: "12", change: "OVER $500M" },
                        { value: "$10M", change: "AVG. PROCEEDS" },
                        { value: "$250M", change: "MEDIAN PROCEEDS" },
                    ],
                },
                {
                    title: "LEAD LEFT UNDERWRITERS",
                    data: [
                        { value: "12(5%)", change: "GOLDMAN" },
                        { value: "6(2.5%)", change: "CREDIT SUISSE" },
                        { value: "2(1%)", change: "EF HUTTON" },
                    ],
                },
            ],
        },
        {
            heading: "Average Returns ",
            showSpac: true,
            innerHadding: [
                {
                    title: "From IPO Price",
                    data: [
                        { value: "50%", change: "above ipo price" },
                        { value: "50%", change: "AVG. PREMIUM" },
                        { value: "44%", change: "MEDIAN PREMIUM" },
                    ],
                },
                {
                    title: "Day of IPO",
                    data: [
                        { value: "50%", change: "closed above" },
                        { value: "50%", change: "AVG. return at close" },
                        { value: "22%", change: "MEDIAN return at close" },
                    ],
                },
            ],
        },
    ];
    return (
        <section className={styles.minitables}>
            <div className={styles.aggregatedMiniTables}>IPO Market Stats</div>
            <div className={styles.cardscontainer}>
                {dataArray.map((item) => {
                    return (
                        <div className={styles.card} key={item.heading}>
                            <div className={styles.cardheader}>
                                <div>{item.heading} </div>
                                {item.showSpac ? (
                                    <div className={styles.showSpacsParent}>
                                        <div className={styles.showSpacs}>
                                            Include SPACs
                                        </div>
                                        <ThemeProvider theme={theme}>
                                            <Switch
                                                defaultChecked
                                                color="primary"
                                            />
                                        </ThemeProvider>
                                    </div>
                                ) : null}
                            </div>
                            {item.innerHadding?.map((innerData) => {
                                return (
                                    <div
                                        className={styles.cardrowinfo}
                                        key={innerData.title}
                                    >
                                        <div className={styles.cardrowheader}>
                                            <div className={styles.head}>
                                                {innerData.title}
                                            </div>
                                        </div>
                                        <div className={styles.frameParent}>
                                            {innerData.data.map((value) => {
                                                return (
                                                    <div key={value.change}>
                                                        <div
                                                            className={
                                                                styles.div
                                                            }
                                                        >
                                                            {value.value}
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.ytdWithSpacsContainer
                                                            }
                                                        >
                                                            {value.change}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default IpoMarketStats;
