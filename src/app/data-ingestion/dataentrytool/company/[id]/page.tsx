"use client";
import { Subtitle } from "@/lib/components/CommonComponents/dataentrytool/Subtitle/subtitle.component";
import { Tag } from "@/lib/components/CommonComponents/dataentrytool/Tags/tags.component";
import { Title } from "@/lib/components/CommonComponents/dataentrytool/Title/title.component";
import { ChipTag } from "@/lib/components/CommonComponents/dataentrytool/chip/chip.component";
import { Box, CircularProgress, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";

const FlexContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex flex-row items-center my-2 space-x-4">{children}</div>;
};

const Label: React.FC<{ name: string }> = ({ name }) => {
  return <div className="font-medium text-base mr-2">{name}</div>;
};

const chipBackgroundMapper = {
  automated: "#fecaca",
  entered: "#d1fae5",
  formula: "#f3e8ff",
};

export default function DataEntryToolPage(props: any) {
  console.log(props);
  const [search_type, setSearchType] = useState<
    "ticker" | "cusip" | "cik" | "id"
  >("ticker");
  const [table_type, setTableType] = useState<"company" | "ipo">("company");
  const [isLoading, setLoading] = useState<boolean>(false);
  // const [] = useState<>

  useEffect(() => {}, [props.params.id, props.searchParams]);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />

      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <section className="flex flex-col w-[98%] mt-8 mx-auto p-4 border-red-100 border-1">
          <Title title="Company Profile" />
          <div className="flex flex-row items-center my-2 justify-between">
            <Subtitle content="Microsoft" />
            <Subtitle content="9:00AM EST 2022/10/11" />
          </div>

          <div className="flex flex-row items-center my-2 space-x-2">
            <label className="font-bold text-lg mr-2">Linked Deals: </label>
            <Tag name="Microsoft" type="acquirer" />
            <Tag name="Activision" type="target" />
          </div>

          <div className="my-2">
            <Subtitle content="Field Filters" />
            <div className="flex space-x-1 my-1">
              {[
                { name: "All", id: "e102ckslwpqo120" },
                { name: "Entered", id: "e102ckslwpqo121" },
                { name: "Formula", id: "e102ckslwpqo122" },
                { name: "Automated", id: "e102ckslwpqo123" },
                { name: "API", id: "e102ckslwpqo124" },
              ].map((item) => {
                return (
                  <ChipTag
                    hover_bg="#e8e8e8"
                    background_color="transparent"
                    border={true}
                    label={item.name}
                    color="gray"
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
          <div className="my-2">
            <Subtitle content="Company Profile" />
            <main className="my-4">
              {["dl;sd;l", "sdfsdfsdf", "sdfsdf", "sdfddfdsswefs"].map((item) => (
                <FlexContainer key={item}>
                  <ChipTag
                    hover_bg=""
                    border={false}
                    background_color={chipBackgroundMapper.automated}
                    label="Automated"
                    color="#333"
                  />
                  <Label name="Name" />
                </FlexContainer>
              ))}
            </main>
          </div>

          <div className="my-2">
            <Subtitle content="IPO Profile" />
            <main className="my-4">
              {["dlwowo;sd;l", "sqwowowdfsdfsdf"].map((item) => (
                <FlexContainer key={item}>
                  <ChipTag
                    hover_bg=""
                    border={false}
                    background_color={chipBackgroundMapper.automated}
                    label="Automated"
                    color="#333"
                  />
                  <Label name="Name" />
                </FlexContainer>
              ))}
            </main>
          </div>

          <div className="my-2">
            <Subtitle content="SPAC Profile" />
            <main className="my-4">
              {["dlwowo302;sd;l", "sqwowo20wdfsdfsdf"].map((item) => (
                <FlexContainer key={item}>
                  <ChipTag
                    hover_bg=""
                    border={false}
                    background_color={chipBackgroundMapper.automated}
                    label="Automated"
                    color="#333"
                  />
                  <Label name="Name" />
                </FlexContainer>
              ))}
            </main>
          </div>
        </section>
      )}
    </Box>
  );
}
