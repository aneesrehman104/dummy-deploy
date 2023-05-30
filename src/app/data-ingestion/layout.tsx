"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React, { useEffect, useMemo, useReducer, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MainListItems } from "@user-interface/listitems";
import MUIDataTable from "mui-datatables";
import { TableDataInterface } from "@/lib/interfaces";
import { AppBar, Drawer } from "@/lib/material/styled.components";
import {
  InternalDataFeedColumns,
  InternalFeedTableData,
} from "@/lib/ts/internal-feed";
import { Switch, Checkbox, TextareaAutosize } from "@mui/material";
import Link from "next/link";
import { TTableColumns } from "@/lib/interfaces/data-ingestion";

function GetValuePlaceholder(value: string | boolean, component_type: string) {
  switch (component_type) {
    case "Typography":
      return { text_value: value as string };
    case "Link":
      return { text_value: value as string };
    case "Checkbox":
      return { checkbox_state: value as boolean };
    case "Switch":
      return { switch_state: value as boolean };
    case "Autocomplete":
      return { autocomplete_curr_state: value as string };
    case "Badge":
      return { text_value: value as string };
    case "Textarea":
      return { text_value: value as string };
    default:
      return { text_value: value as string };
  }
}

function serializeData(data: Array<TableResponse>) {
  if (data.length === 0) return data;
  const serializedData = data.map((item) => {
    const _elmKey = Object.keys(InternalFeedTableData).find(
      (mapper_item) => mapper_item === item.column_name
    );
    if (_elmKey) {
      const _componentType =
        InternalFeedTableData[_elmKey as TTableColumns].component;
      const value = GetValuePlaceholder(item.value, _componentType);
      return { ...item, component: _componentType, ...value };
    }
  });
  return serializedData;
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const title_name = "Internal Feed";
const initialState: Array<Array<TableDataInterface>> = [];
const limit: number = 10;

// reducer function dummy
type ReducerAction = {
  type: string;
  payload: Array<object>;
};

const reducer = (
  state: Array<TableDataInterface>,
  action: ReducerAction
): Array<any> => {
  switch (action.type) {
    case "replace":
      return [...state].map((item) => {
        return { ...item };
      });
    case "reviewed":
      // this is checkbox component
      return { ...action.payload };
    case "submit_to_keyfeed":
      // this is checkbox component
      return { ...action.payload };
    case "format_for_export":
      return state;
    case "relevant_data_suggestion":
      // dropdown
      return { ...action.payload };
    case "writeup_key_events":
      // this is a text area or an editable div
      return { ...action.payload };
    case "relevant_writeup":
      // dropdown
      return { ...action.payload };
    case "key_event":
      // this is an autocomplete component
      return { ...action.payload };
    case "data_category":
      // this is an autocomplete component
      return { ...action.payload };
    case "attach_to_record":
      // this is an autocomplete component
      return { ...action.payload };
    case "entry_unit":
      // this is an autocomplete component
      return { ...action.payload };
    // case "our_keywords_found":
    //   return state;
    // case "source_material_body":
    //   return state;
    // case "description":
    //   return state;
    // case "sec_form":
    //   return state;
    // case "source":
    //   return state;
    // case "material_type":
    //   return state;
    // case "tickers":
    //   return state;
    // case "company":
    //   return state;
    // case "date_time_est":
    //   return state;
    // case "source_link":
    //   return state;

    // when ever we add a new column where we need to manage state such as Autocomplete or Switch or Checkboxes
    // add your logic with new case: column name
    default:
      return state;
  }
};

interface TableResponse {
  column_name: string;
  value: string;
}

const options = {
  search: true,
  download: true,
  print: true,
  viewColumns: true,
  filter: true,
  filterType: "dropdown",
  responsive: "vertical",
  tableBodyHeight: "200px",
  tableBodyMaxHeight: "800px",
};

const getMuiTheme = () =>
  createTheme({
    components: {
      MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            width: "200px",
          },
        },
      },
    },
  });

export default function RootLayout(children: JSX.Element | JSX.Element[]) {
  const [open, setOpen] = React.useState(true);
  const [current_section, setCurrentSection] = useState<string>(
    "Source Material Feed"
  );
  const [offset, setOffset] = useState<number>(0);
  const [dataset, dispatch] = useReducer(reducer, initialState);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const switchSelection = (section_name: string) => {
    setCurrentSection(section_name);
  };

  const changePage = (page: number) => {
    const standard_offset = page * limit;
    const current_offset = offset;

    if (standard_offset - current_offset >= 0) {
      setOffset(standard_offset);
    }
  };

  const handleSwitchToggle = (payload: any) => {};

  const handleCheckboxToggle = (payload: any) => {};

  const editTextArea = (payload: any) => {};

  // set the open state to false when the screen is less than 600px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const GetDataset = async () => {
      // this is a dummy data for now
      // the idea is to make this a paginated based table so that we can load the data in chunks
      // we need to make a call to the backend to get the data with limit and offset
      try {
        const response = await fetch(
          `http://localhost:3000/api/dataset?limit=${limit}&offset=${offset}`
        );
        const data = await response.json();
        const serializedData = serializeData(data);
        if (serializedData.length > 0) {
          // we need to change the payload later
          dispatch({ type: "replace", payload: [] });
        }
      } catch {
        console.log("error while fetching data information");
      }
    };

    GetDataset();
  }, [offset]);

  const final_data = useMemo(() => {
    // the data schema is this
    // [
    //   {
    //     "column_name": "tickers",
    //     "component": "Typography",
    //     "state value": "for checkbox" or "for text input" or different components
    //   },
    //   {
    //     "column_name": "companies",
    //     "component": "Typography",
    //     "state value": "for checkbox" or "for text input" or different components
    //   },
    //   ...
    // ]
    const dummy = [...dataset];
    if (dummy.length > 0) {
      const main_data: Array<Array<string | React.ReactNode>> = [];
      dummy.forEach((inner_arr) => {
        const nested_arr: Array<string | React.ReactNode> = [];
        inner_arr.forEach((item: any) => {
          switch (item.component) {
            case "Typography":
              nested_arr.push(item.text_value);

            case "Switch":
              nested_arr.push(
                <Checkbox
                  value={item.checkbox_state}
                  onChange={() => handleCheckboxToggle("payload")}
                />
              );

            case "Checkbox":
              nested_arr.push(
                <Checkbox
                  value={item.checkbox_state}
                  onChange={() => handleCheckboxToggle("payload")}
                />
              );

            case "Link":
              nested_arr.push(
                <Link href={item.text_value}>{item.text_value}</Link>
              );

            case "Textarea":
              nested_arr.push(
                <TextareaAutosize
                  minRows={5}
                  value={item.text_value}
                  onChange={() => editTextArea("")}
                ></TextareaAutosize>
              );

            case "Badge":
              nested_arr.push("component");
          }
        });

        main_data.push(nested_arr);
      });

      return main_data;
    }
    // mapped response should be 2D array with components, text or numbers as wanted
    return dataset;
  }, [dataset]);

  // const data = [
  //     ['Gabby George', 'Business Analyst', 'Minneapolis', 30, 100000],
  //     ['Business Analyst', 'Business Consultant', 'Dallas', 55, 200000],
  //     ['Jaden Collins', 'Attorney', 'Santa Ana', 27, 500000],
  //     ['Franky Rees', 'Business Analyst', 'St. Petersburg', 22, 50000],
  //     ['Aaren Rose', 'Business Consultant', 'Toledo', 28, 75000],
  //     ['Blake Duncan', 'Business Management Analyst', 'San Diego', 65, 94000],
  //     ['Frankie Parry', 'Agency Legal Counsel', 'Jacksonville', 71, 210000],
  //     ['Lane Wilson', 'Commercial Specialist', 'Omaha', 19, 65000],
  //     ['Robin Duncan', 'Business Analyst', 'Los Angeles', 20, 77000],
  //     ['Mel Brooks', 'Business Consultant', 'Oklahoma City', 37, 135000],
  //     ['Harper White', 'Attorney', 'Pittsburgh', 52, 420000],
  //     ['Kris Humphrey', 'Agency Legal Counsel', 'Laredo', 30, 150000],
  //     ['Frankie Long', 'Industrial Analyst', 'Austin', 31, 170000],
  //     ['Brynn Robbins', 'Business Analyst', 'Norfolk', 22, 90000],
  //     ['Justice Mann', 'Business Consultant', 'Chicago', 24, 133000],
  //     ['Addison Navarro', 'Business Management Analyst', 'New York', 50, 295000],
  //     ['Jesse Welch', 'Agency Legal Counsel', 'Seattle', 28, 200000],
  //     ['Eli Mejia', 'Commercial Specialist', 'Long Beach', 65, 400000],
  //     ['Gene Leblanc', 'Industrial Analyst', 'Hartford', 34, 110000],
  //     ['Danny Leon', 'Computer Scientist', 'Newark', 60, 220000],
  //     ['Lane Lee', 'Corporate Counselor', 'Cincinnati', 52, 180000],
  //     ['Jesse Hall', 'Business Analyst', 'Baltimore', 44, 99000],
  //     ['Danni Hudson', 'Agency Legal Counsel', 'Tampa', 37, 90000],
  //     ['Terry Macdonald', 'Commercial Specialist', 'Miami', 39, 140000],
  //     ['Justice Mccarthy', 'Attorney', 'Tucson', 26, 330000],
  //     ['Silver Carey', 'Computer Scientist', 'Memphis', 47, 250000],
  //     ['Franky Miles', 'Industrial Analyst', 'Buffalo', 49, 190000],
  //     ['Glen Nixon', 'Corporate Counselor', 'Arlington', 44, 80000],
  //     ['Gabby Strickland', 'Business Process Consultant', 'Scottsdale', 26, 45000],
  //     ['Mason Ray', 'Computer Scientist', 'San Francisco', 39, 142000],
  // ];
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          sx={{ backgroundColor: "#180e2a" }}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              {title_name}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <List component="nav">
            <MainListItems
              current_item={current_section}
              switch_selection={switchSelection}
            />
          </List>
        </Drawer>
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
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              marginInline: "auto",
              paddingBlock: "2rem",
              backgroundColor: "red",
            }}
          > */}
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title="Internal Feed"
              data={[
                [
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "I",
                  "J",
                  "K",
                  "L",
                  "M",
                ],
              ]}
              // @ts-ignore
              columns={InternalDataFeedColumns}
              // @ts-ignore
              options={options}
            />
          </ThemeProvider>
          {/* </div> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
