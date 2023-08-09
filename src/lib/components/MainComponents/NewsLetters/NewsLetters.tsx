import React, { useState } from "react";
import "./NewsLetters.css";
import { CommonfiButton } from "../../CommonComponents";
import Image from "next/image";
import { display } from "@mui/system";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
function NewsLetters() {
  const NewsLettersArray = [
    {
      headingName: "ListingTrack  Newsletters",
      headingBox: [
        {
          subscribe: true,
          isCheck: false,
          mainImage: "svg5.svg",
          beforeTickImage: "svg6.svg",
          sentText: "Sent in the morning of each trading day",
          title: "ListingTrack Morning Update",
          detail:
            "Start your work day with a data-driven summary of the the action in the IPO, public M&A, and SPACs.",
          plan: "No ListingTrack account necessary to subscribe",
        },
      ],
    },

    {
      headingName: "IPOs",
      headingBox: [
        {
          subscribe: false,
          isCheck: false,
          weekDays: [
            {
              text: "Premium",
            },
            {
              text: "Daily",
            },
          ],
          mainImage: "svg2.svg",
          beforeTickImage: "svg6.svg",
          sentText: "Sent in the morning of each trading day",
          title: "ListingTrack Morning Update",
          detail:
            "Start your work day with a data-driven summary of the the action in the IPO, public M&A, and SPACs.",
          plan: "No ListingTrack account necessary to subscrie",
        },

        {
          subscribe: false,
          isCheck: false,
          weekDays: [
            {
              text: "Free",
            },
            {
              text: "Weekly",
            },
          ],
          mainImage: "svg2.svg",
          beforeTickImage: "svg6.svg",
          sentText: "Sent on Monday mornings",
          title: "IPO Weekly Update",
          detail:
            "The free summary of all of the previous weeks IPO action. Get a breakdown of the previous weeks IPO activity with price performance, along with a recap of the news, upcoming IPOs, and more.",
          plan: "Free newsletter. Must have a free account on ListingTrack.io.",
        },
      ],
    },

    {
      headingName: "Mergers",
      headingBox: [
        {
          subscribe: false,
          isCheck: false,
          weekDays: [
            {
              text: "Premium",
            },
            {
              text: "Daily",
            },
          ],
          mainImage: "svg3.svg",
          sentText: "Sent in the morning of each trading day",
          title: "M&A Morning Update",
          detail:
            "Get a breakdown of the major public M&A activity in the US market, including deal announcements with deal overviews, rumored deals, and news on active deals. Covering deals $1B+.",
          plan: "For premium subscribers of ListingTrack.io only.",
        },

        {
          subscribe: false,
          isCheck: false,
          weekDays: [
            {
              text: "Free",
            },
            {
              text: "Weekly",
            },
          ],
          mainImage: "svg3.svg",
          sentText: "Sent on Monday mornings",
          title: "M&A Weekly Update",
          detail:
            "The free summary of major public M&A action in the US market from the previous week. Covering deals $1B+.",
          plan: "Free newsletter. Must have a free account on ListingTrack.io.",
        },
      ],
    },

    {
      headingName: "SPACs",
      headingBox: [
        {
          subscribe: false,
          isCheck: false,
          weekDays: [
            {
              text: "Premium",
            },
            {
              text: "Daily",
            },
          ],
          mainImage: "svg4.svg",
          sentText: "Sent in the morning of each trading day",
          title: "SPAC Morning Update",
          detail:
            "Get your SPAC fill with everything from new deals, price action, liquidations, extension updates, and more. Our first newsletter sent every trading day since early 2021!",
          plan: "For premium subscribers of ListingTrack.io only.",
        },

        {
          subscribe: false,
          isCheck: false,
          weekDays: [
            {
              text: "Free",
            },
            {
              text: "Weekly",
            },
          ],
          mainImage: "svg4.svg",
          sentText: "Sent on Monday morningsSent on Monday mornings",
          title: "SPAC Weekly Update",
          detail:
            "The free weekly summary of the key action across the SPAC world. Stay on top of the still alive-and-kicking asset class with this 1 email a week.",
          plan: "Free newsletter. Must have a free account on ListingTrack.io.",
        },
      ],
    },
  ];

  const NewsLettersProMainArray = [
    {
      heading: "5%+ Moves",
      isCheck: false,
      plans: "IPOs, Mergers, SPACs ",
    },
    {
      heading: "New Deals",
      isCheck: false,
      plans: "SPACs ",
    },
    {
      heading: "Completed Deals",
      isCheck: false,
      plans: "SPACs, Mergers",
    },
    {
      heading: "Deal Terminations",
      isCheck: false,
      plans: "SPACs, Mergers",
    },
    {
      heading: "Deal Rumors",
      isCheck: false,
      plans: "SPACs, Mergers",
    },
    {
      heading: "Liquidations",
      isCheck: false,
      plans: "SPACs",
    },
  ];
  const [newsletters, setNewsletters] = useState(NewsLettersArray);
  const [newsLettersProArray, setNewsLettersProArray] =
    useState(NewsLettersProMainArray);

  const handleAddCircleClick = (
    headingIndex: number,
    subHeadingIndex: number
  ) => {
    const updatedNewsLetters = [...newsletters];
    updatedNewsLetters[headingIndex].headingBox[subHeadingIndex].isCheck = true;
    setNewsletters(updatedNewsLetters);
  };

  const handleToggle = (index: number) => {
    let updatedNewsletters2 = [...newsLettersProArray];
    updatedNewsletters2[index].isCheck = true;
    setNewsLettersProArray(updatedNewsletters2);
  };

  return (
    <section className="sectionNewsLetters">
      <div className="mainContainerNewsLetters">
        <div className="firstMainInnerDivNewsLetters">
          <div className="firstInnerDivHeightNewsLetters">
            <div className="mainHeadingFirstDivNewsLetters">
              <div className="mainHeadingStyleNewsLetters">
                ListingTracks Newsletters
              </div>
              <div className="mainHeadingTextNewsLetters">
                Daily and weekly newsletters covering IPOs, M&A, SPACs, and more
              </div>
            </div>
            <div className="mainHeadingSecondDivNewsLetters">
              <Image src={"svg1.svg"} alt="svg5" width={180} height={340} />
            </div>
          </div>
        </div>
        <div className="secondMainDivNewsLetters">
          {newsletters.map((item: any, headingIndex: number) => {
            return (
              <div key={item.headingName} style={{ marginBottom: 50 }}>
                <div
                  style={{
                    marginTop: 20,
                    paddingBottom: 20,
                    borderBottom: "2px solid black",
                    fontSize: 18,
                    fontWeight: 400,
                    fontFamily: "Barlow Condensed",
                  }}
                >
                  {item.headingName}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {item.headingBox.map(
                    (subHeading: any, subHeadingIndex: number) => {
                      return (
                        <div
                          key={subHeading.title}
                          style={{
                            marginRight: 20,
                            width: 300,
                            padding: 15,
                            border: "2px solid gray",
                            height: 360,
                            marginTop: 30,
                            borderRadius: 10,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                          }}
                        >
                          {subHeading.subscribe ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Image
                                src={subHeading.mainImage}
                                alt="svg5"
                                width={180}
                                height={50}
                              />
                              {subHeading.isCheck ? (
                                <Image
                                  src={"true.svg"}
                                  alt="svg5"
                                  width={30}
                                  height={30}
                                  style={{ cursor: "pointer" }}
                                />
                              ) : (
                                <Image
                                  src={subHeading.beforeTickImage}
                                  alt="svg5"
                                  width={100}
                                  height={50}
                                  style={{ cursor: "pointer" }}
                                  onClick={() =>
                                    handleAddCircleClick(
                                      headingIndex,
                                      subHeadingIndex
                                    )
                                  }
                                />
                              )}
                            </div>
                          ) : (
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                              >
                                {subHeading.isCheck ? (
                                  <Image
                                    src={"true.svg"}
                                    alt="svg5"
                                    width={30}
                                    height={30}
                                    style={{ cursor: "pointer" }}
                                  />
                                ) : (
                                  <Image
                                    src={"plus.svg"}
                                    alt="svg5"
                                    width={30}
                                    height={30}
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      handleAddCircleClick(
                                        headingIndex,
                                        subHeadingIndex
                                      )
                                    }
                                  />
                                )}
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Image
                                  src={subHeading.mainImage}
                                  alt="svg5"
                                  width={40}
                                  height={40}
                                  style={{
                                    cursor: "pointer",
                                  }}
                                />
                                {subHeading?.weekDays?.map(
                                  (weekDaysItem: any) => {
                                    return (
                                      <div
                                        key={weekDaysItem.text}
                                        style={{
                                          color: "white",
                                          width: 90,
                                          background: "#263C6F",
                                          height: 25,
                                          borderRadius: "20px",
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginLeft: 15,
                                          fontSize: 12,
                                        }}
                                      >
                                        {weekDaysItem.text}
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          )}

                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 400,
                              fontFamily: "Barlow Condensed",
                            }}
                          >
                            {subHeading.sentText}
                          </div>
                          <div
                            style={{
                              fontSize: 20,
                              fontWeight: 500,
                              fontFamily: "Barlow Condensed",
                            }}
                          >
                            {subHeading.title}
                          </div>
                          <div
                            style={{
                              fontSize: 16,
                              fontWeight: 400,
                              fontFamily: "Barlow Condensed",
                              lineHeight: "27px",
                            }}
                          >
                            {subHeading.detail}
                          </div>
                          <div
                            style={{
                              fontSize: 16,
                              fontWeight: 400,
                              fontFamily: "Barlow Condensed",
                              lineHeight: "27px",
                            }}
                          >
                            {subHeading.plan}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}

          <div
            style={{
              marginTop: 20,
              paddingBottom: 20,
              borderBottom: "2px solid black",
              fontSize: 18,
              fontWeight: 400,
              fontFamily: "Barlow Condensed",
            }}
          >
            Watchlist Alerts (for Pro subscribers only)
          </div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {newsLettersProArray.map((item: any, index: number) => {
              return (
                <div
                  style={{
                    marginRight: 20,
                    width: 300,
                    padding: 10,
                    border: "2px solid gray",
                    height: 50,
                    marginTop: 30,
                    borderRadius: 10,
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 500,
                        fontFamily: "Barlow Condensed",
                      }}
                    >
                      {item.heading}
                    </div>
                    {item.isCheck ? (
                      <Image
                        src={"true.svg"}
                        alt="svg5"
                        width={30}
                        height={30}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <Image
                        src={"plus.svg"}
                        alt="svg5"
                        width={30}
                        height={30}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleToggle(index)}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      fontFamily: "Barlow Condensed",
                      marginRight: 25,
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: 10,
                    }}
                  >
                    {item.plans}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetters;
