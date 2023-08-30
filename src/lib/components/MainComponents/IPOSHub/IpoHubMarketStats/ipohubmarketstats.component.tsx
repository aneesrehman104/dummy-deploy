import React, { useEffect, useState } from "react";
import styles from "./ipohub-market-stats.module.css";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { URLs } from "@/lib/ts/apiUrl";
import { IpoMarketStatsDto } from "@/lib/ts/interface";
import { ipoMarketStatsInitialState } from "@/lib/ts/initialState";
import { IpoMarketStats } from "@/lib/components/CommonComponents/Stats/IpoMarketStats";
import { getApiWithoutAuth } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
interface PROPS {}

const IpoHubMarketStats: React.FC = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#0aac85",
            },
        },
    });

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [ipoHubStatsData, setIpoHubStatsData] = useState<IpoMarketStatsDto>(
        ipoMarketStatsInitialState
    );

    useEffect(() => {
        const source = axios.CancelToken.source();
        const getIpoHubStatsData = async () => {
            setIsLoading(true);
            try {
                const response = await getApiWithoutAuth(URLs.ipoMarketStats, {
                    cancelToken: source.token,
                });

                if (response.status === 200 && response.data !== null) {
                    setIpoHubStatsData(response.data.source.dataset);
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

        getIpoHubStatsData();

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
                        { value: "50", change: "YTD" },
                        { value: "99", change: "prev year" },
                        { value: "-50%", change: "yearly Chg % " },
                    ],
                },
                {
                    title: "UPCOMING",
                    data: [
                        { value: "350", change: "FILED" },
                        { value: "5", change: "SCHEDULED" },
                    ],
                },
                {
                    title: "WITHDRAWN",
                    data: [{ value: "651", change: "YTD" }],
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
                    title: "UNDERWRITERS",
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
    return <IpoMarketStats stats={ipoHubStatsData} />;
};

export default IpoHubMarketStats;

// const IpoMarketStats: React.FC<IpoMarketStatsProps> = ({ stats }) => {
//     const dataArray = [
//         {
//             heading: "Overview",
//             showSpac: true,
//             innerHadding: [
//                 {
//                     title: "IPOs",

//                     data: [
//                         {
//                             value: stats.overview.withSpacs.IposYTD,
//                             change: "YTD",
//                         },
//                         {
//                             value: stats.overview.withSpacs.iposPrevYear,
//                             change: "prev year",
//                         },
//                         {
//                             value: `${stats.overview.withSpacs.iposYearlyChangePercentage}%`,
//                             change: "yearly Chg % ",
//                         },
//                     ],
//                 },
//                 {
//                     title: "UPCOMING",
//                     data: [
//                         { value: "350", change: "FILED" },
//                         { value: "5", change: "SCHEDULED" },
//                     ],
//                 },
//                 {
//                     title: "WITHDRAWN",
//                     data: [{ value: "651", change: "YTD" }],
//                 },
//             ],
//         },
//         {
//             heading: "Pricings YTD",
//             showSpac: true,
//             innerHadding: [
//                 {
//                     title: "VALUATIONS",
//                     data: [
//                         { value: "200", change: "OVER $1B" },
//                         { value: "$500M", change: "AVG. MKT CAP" },
//                         { value: "$250M", change: "MEDIAN MKT CAP" },
//                     ],
//                 },
//                 {
//                     title: "PROCEEDS",
//                     data: [
//                         { value: "12", change: "OVER $500M" },
//                         { value: "$10M", change: "AVG. PROCEEDS" },
//                         { value: "$250M", change: "MEDIAN PROCEEDS" },
//                     ],
//                 },
//                 {
//                     title: "UNDERWRITERS",
//                     data: [
//                         { value: "12(5%)", change: "GOLDMAN" },
//                         { value: "6(2.5%)", change: "CREDIT SUISSE" },
//                         { value: "2(1%)", change: "EF HUTTON" },
//                     ],
//                 },
//             ],
//         },
//         {
//             heading: "Average Returns ",
//             showSpac: true,
//             innerHadding: [
//                 {
//                     title: "From IPO Price",
//                     data: [
//                         { value: "50%", change: "above ipo price" },
//                         { value: "50%", change: "AVG. PREMIUM" },
//                         { value: "44%", change: "MEDIAN PREMIUM" },
//                     ],
//                 },
//                 {
//                     title: "Day of IPO",
//                     data: [
//                         { value: "50%", change: "closed above" },
//                         { value: "50%", change: "AVG. return at close" },
//                         { value: "22%", change: "MEDIAN return at close" },
//                     ],
//                 },
//             ],
//         },
//     ];

// const statArray = [
//     {
//         heading: "Overview",
//         type: "overview" as keyof typeof includeSpacs,
//         statsWithSpacs: stats.Overview.WithSpacs,
//         statsWithoutSpacs: stats.Overview.WithoutSpacs,
//     },
//     {
//         heading: "Pricing YTD",
//         type: "pricingYTD" as keyof typeof includeSpacs,
//         statsWithSpacs: stats.PricingYTD.WithSpacs,
//         statsWithoutSpacs: stats.PricingYTD.WithoutSpacs,
//     },
//     {
//         heading: "Average Returns",
//         type: "averageReturns" as keyof typeof includeSpacs,
//         statsWithSpacs: stats.AverageReturns.WithSpacs,
//         statsWithoutSpacs: stats.AverageReturns.WithoutSpacs,
//     },
// ];
// const dataArray = [
//     {
//         heading: "Overview",
//         showSpac: true,
//         innerHadding: [
//             {
//                 title: "IPOs",
//                 data: [
//                     {
//                         value: stats.overview.withSpacs.IposYTD,
//                         change: "YTD",
//                     },
//                     {
//                         value: stats.overview.withSpacs.iposPrevYear,
//                         change: "prev year",
//                     },
//                     {
//                         value: `${stats.overview.withSpacs.iposYearlyChangePercentage}%`,
//                         change: "yearly Chg % ",
//                     },
//                 ],
//             },
//             {
//                 title: "UPCOMING",
//                 data: [
//                     { value: "350", change: "FILED" },
//                     { value: "5", change: "SCHEDULED" },
//                 ],
//             },
//             {
//                 title: "WITHDRAWN",
//                 data: [{ value: "651", change: "YTD" }],
//             },
//         ],
//     },
//     {
//         heading: "Pricings YTD",
//         showSpac: true,
//         innerHadding: [
//             {
//                 title: "VALUATIONS",
//                 data: [
//                     { value: "200", change: "OVER $1B" },
//                     { value: "$500M", change: "AVG. MKT CAP" },
//                     { value: "$250M", change: "MEDIAN MKT CAP" },
//                 ],
//             },
//             {
//                 title: "PROCEEDS",
//                 data: [
//                     { value: "12", change: "OVER $500M" },
//                     { value: "$10M", change: "AVG. PROCEEDS" },
//                     { value: "$250M", change: "MEDIAN PROCEEDS" },
//                 ],
//             },
//             {
//                 title: "UNDERWRITERS",
//                 data: [
//                     { value: "12(5%)", change: "GOLDMAN" },
//                     { value: "6(2.5%)", change: "CREDIT SUISSE" },
//                     { value: "2(1%)", change: "EF HUTTON" },
//                 ],
//             },
//         ],
//     },
//     {
//         heading: "Average Returns ",
//         showSpac: true,
//         innerHadding: [
//             {
//                 title: "From IPO Price",
//                 data: [
//                     { value: "50%", change: "above ipo price" },
//                     { value: "50%", change: "AVG. PREMIUM" },
//                     { value: "44%", change: "MEDIAN PREMIUM" },
//                 ],
//             },
//             {
//                 title: "Day of IPO",
//                 data: [
//                     { value: "50%", change: "closed above" },
//                     { value: "50%", change: "AVG. return at close" },
//                     { value: "22%", change: "MEDIAN return at close" },
//                 ],
//             },
//         ],
//     },
// ];
// return (
//     <section className={styles.minitables}>
//         <div className={styles.aggregatedMiniTables}>
//             IPO Market Stats (In Development: Coco moved!!!)
//         </div>
//         <div className={styles.cardscontainer}>
//             {dataArray.map((item) => {
//                 return (
//                     <div className={styles.card} key={item.heading}>
//                         <div className={styles.cardheader}>
//                             <div>{item.heading} </div>
//                             {item.showSpac ? (
//                                 <div className={styles.showSpacsParent}>
//                                     <div className={styles.showSpacs}>
//                                         Include SPACs
//                                     </div>
//                                     <ThemeProvider theme={theme}>
//                                         <Switch
//                                             defaultChecked
//                                             color="primary"
//                                         />
//                                     </ThemeProvider>
//                                 </div>
//                             ) : null}
//                         </div>
//                         {item.innerHadding?.map((innerData) => {
//                             return (
//                                 <div
//                                     className={styles.cardrowinfo}
//                                     key={innerData.title}
//                                 >
//                                     <div className={styles.cardrowheader}>
//                                         <div className={styles.head}>
//                                             {innerData.title}
//                                         </div>
//                                     </div>
//                                     <div className={styles.frameParent}>
//                                         {innerData.data.map((value) => {
//                                             return (
//                                                 <div key={value.change}>
//                                                     <div
//                                                         className={
//                                                             styles.div
//                                                         }
//                                                     >
//                                                         {value.value}
//                                                     </div>
//                                                     <div
//                                                         className={
//                                                             styles.ytdWithSpacsContainer
//                                                         }
//                                                     >
//                                                         {value.change}
//                                                     </div>
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 );
//             })}
//         </div>
//     </section>
// );
