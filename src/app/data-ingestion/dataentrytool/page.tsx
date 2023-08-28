"use client";
import { SpacFeed } from "@/lib/components/CommonComponents/Feed/Daily/spacfeed";
import AutocompleteInputField from "@/lib/components/CommonComponents/dataentrytool/Autocomplete/autocomplete.component";
import { Subtitle } from "@/lib/components/CommonComponents/dataentrytool/Subtitle/subtitle.component";
import { Tag } from "@/lib/components/CommonComponents/dataentrytool/Tags/tags.component";
import { TextFieldIcon } from "@/lib/components/CommonComponents/dataentrytool/TextFieldIcon/textfieldicon.component";
import InputField from "@/lib/components/CommonComponents/dataentrytool/Textfield/textfield.component";
import { Title } from "@/lib/components/CommonComponents/dataentrytool/Title/title.component";
import { StatusBadge } from "@/lib/components/CommonComponents/dataentrytool/badge/badge.component";
import { Button } from "@/lib/components/CommonComponents/dataentrytool/button/button.component";
import { ChipTag } from "@/lib/components/CommonComponents/dataentrytool/chip/chip.component";
import { DateInput } from "@/lib/components/CommonComponents/dataentrytool/datepicker/datepicker.component";
import SearchBar from "@/lib/components/CommonComponents/dataentrytool/searchbar/searchbar.component";
import { DataentryTable } from "@/lib/components/CommonComponents/dataentrytool/table/table.component";
import { Box, CircularProgress, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function DataEntryToolPage() {
  const [search_type, setSearchType] = useState<"ticker" | "cusip" | "cik" | "id">("ticker"); 
  const [table_type, setTableType] = useState<"company" | "merger">("company");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [search_value, setSearchValue] = useState<string>("");

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
        <>
          <section className="flex flex-col w-[98%] mt-8 mx-auto p-4 border-red-100 border-1">
            <nav className="flex flex-row space-x-4 items-center">
              <SearchBar
                value={search_value}
                changeHandler={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchValue(event.target.value);
                }}
                label="Search"
                placeholder={`Search for ${search_type}...`}
                submit_button_name="Search"
              />
              <AutocompleteInputField
                value={search_type}
                options={["ticker", "cusip", "cik", "id"]}
                changeHandler={(to: string) =>
                  setSearchType(to as "ticker" | "cusip" | "cik" | "id")
                }
              />
            </nav>
            <main className="flex flex-row my-3 space-x-2">
              {[
                { name: "New", id: "e1021mxsla2910" },
                { name: "Edit", id: "e1021mxsla2911" },
                { name: "Duplicate", id: "e1021mxsla2912" },
                { name: "Delete", id: "e1021mxsla2913" },
              ].map((item) => {
                return (
                  <Button
                    name={item.name}
                    key={item.id}
                    className={`w-20 border-none ${
                      item.id === "e1021mxsla2913"
                        ? "bg-red-500 text-white hover:bg-red-400"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  />
                );
              })}
              <AutocompleteInputField
                value={table_type}
                options={["company", "merger"]}
                changeHandler={(to: string) =>
                  setTableType(to as "company" | "merger")
                }
              />
            </main>

            <DataentryTable type={table_type}/>

            {/* <ChipTag background_color="" color="#ff385c" label="My chip" width={100} />
            <Button name="Edit" className="w-24" />
            <InputField
              label="Title"
              error_status={false}
              helperText=""
              hiddenLabel={false}
              placeholder="Enter title..."
              name="title"
            />
            <DateInput/>
            <Badge badgeContent={4} color="primary"></Badge>
            <StatusBadge/>
            <TextFieldIcon
              placeholder="Test"
              label="Test"
              name="test"
              error_status={false}
              type="text"
              icon_click_handler={() => {}}
              show_password={false}
            />
            <Title title="Hello world"/>
            <Subtitle content="This is a subtitle"/>
            <Tags></Tags> */}
          </section>
        </>
      )}
    </Box>
  );
}
