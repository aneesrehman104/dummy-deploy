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
import { InternalDataFeedColumns, InternalFeedTableData } from "@/lib/ts/internal-feed";

const options = {
  filter: true,
  onFilterChange: (changedColumn: any, filterList: any) => {
    console.log(changedColumn, filterList);
  },
  selectableRows: "multiple",
  filterType: "dropdown",
  responsive: "vertical",
  rowsPerPage: 20,
};

function GetValuePlaceholder(key: string, value: string | boolean) {
  switch (key) {
    case "tickers":
      return { text_value: value };
    case "companies":
      return { text_value: value };
    case "type":
      return value;
    case "link":
      return { text_value: value };
    case "subject":
      return { text_value: value };
    case "source":
      return { text_value: value };
    case "market_segmens":
      return { text_value: value };
    case "checked":
      return { checkbox_state: value };
    case "key":
      return { checkbox_state: value };
    case "attach_to_deal":
      return { autocomplete_curr_state: value };
    default:
      return { text_value: value };
  }
}

function serializeData(data: Array<TableResponse>) {
  const serializedData = data.map((item) => {
    const value = GetValuePlaceholder(item.column_name, item.value);
    // @ts-ignore
    return { ...item, component: InternalFeedTableData[item.name], ...value };
  });
  return serializedData;
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const title_name = "Internal Feed";
const initialState: Array<Array<TableDataInterface>> = [];
const limit: number = 10;

// reducer function dummy
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "replace":
      return [...action.payload].map((item: any) => {
        return { ...item };
      });
    case "tickers":
      return { ...action.payload };
    case "companies":
      return { ...action.payload };
    case "type":
      return { ...action.payload };
    case "link":
      return { ...action.payload };
    case "subject":
      return { ...action.payload };
    case "source":
      return { ...action.payload };
    case "market_segments":
      return { ...action.payload };
    case "checked":
      return { ...action.payload };
    case "key":
      return { ...action.payload };
    case "attach_to_deal":
      return { ...action.payload };
    default:
      return state;
  }
};

interface TableResponse {
  column_name: string;
  value: string;
}

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
      const response = await fetch(`http://localhost:3000/api/dataset?limit=${limit}&offset=${offset}`);
      const data = await response.json();
      const serializedData = serializeData(data);
      dispatch({ type: "replace", payload: serializedData });
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

    // mapped response should be 2D array with components, text or numbers as wanted
    return dataset;
  }, [dataset]);

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              margin: "auto",
              paddingBlock: "2rem",
            }}
          >
            <MUIDataTable
              title="Internal Feed"
              data={final_data}
              // @ts-ignore
              columns={InternalDataFeedColumns}
              // @ts-ignore
              options={options}
            />
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
