"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React, { useEffect, useMemo, useReducer, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
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
import { AppBar, Drawer } from "@/lib/material/styled.components";
import {
  InternalDataFeedColumns,
  defaultTheme,
  getMuiTheme,
  initialState,
  limit,
  options,
  title_name,
} from "@/lib/ts/internal-feed";
import {
  Switch,
  Checkbox,
  TextareaAutosize,
  Autocomplete,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { reducer } from "@/lib/reducers/internal-feed";
import { serializeData } from "@/lib/utils/data-ingestion";
import { IResponseSchema } from "@/lib/ts";
import next from "next/types";

// reducer function dummy

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

  const copyToClipboard = (text: string) => {
    console.log(text);
    window.navigator.clipboard.writeText(text).then(() => {
      console.log("copied to clipboard");
      alert("copied to clipboard");
    });
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
          // `http://localhost:3000/api/dataset?limit=${limit}&offset=${offset}`
          "http://127.0.0.1:5500/internal-feed.json"
        );
        const data: IResponseSchema = await response.json();
        const serializedData = serializeData(data.source.dataset);
        console.log(serializedData, "serialized data");
        if (serializedData.length > 0) {
          // we need to change the payload later
          dispatch({ type: "replace", payload: serializedData });
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
      const main_data: Array<Array<React.ReactNode>> = [];
      dummy.forEach((inner_arr) => {
        const nested_arr: Array<string | React.ReactNode> = [];
        inner_arr.forEach((item: any, i: number) => {
          console.log(inner_arr, "inner_arr");
          switch (item.component) {
            case "Typography":
              if (item.options.length > 1) {
                const nested_component = item.options.map((data: string) => {
                  return (
                    <Typography
                      key={item.component + data + i.toString()}
                      onClick={() => copyToClipboard(data)}
                      sx={{
                        cursor: "pointer",
                        backgroundColor: "#f5f5f5",
                        my: 0.5,
                      }}
                    >
                      {data}
                    </Typography>
                  );
                });
                nested_arr.push(<div style={{ maxHeight: 100, overflowY: "scroll" }} key={item.text_value + i.toString()}>{nested_component}</div>);
              } else {
                nested_arr.push(
                  <Typography
                    key={item.text_value + i.toString()}
                    onClick={item.column_name === "format_for_export" ? () => copyToClipboard(item.text_value) : undefined}
                    sx={{
                      cursor: item.column_name === "format_for_export" ? "pointer" : "default",
                    }}
                  >
                    {item.text_value}
                  </Typography>
                );
              }
              break;

            case "Checkbox":
              nested_arr.push(
                <Checkbox
                  key={
                    item.checkbox_state
                      ? "true__" + i.toString()
                      : "false__" + i.toString()
                  }
                  checked={item.checkbox_state}
                  onChange={() => handleCheckboxToggle("payload")}
                />
              );
              break;

            case "Link":
              nested_arr.push(
                <Link
                  key={item.text_value + i.toString()}
                  href={item.text_value}
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                  }}
                >
                  {item.text_value}
                </Link>
              );
              break;

            case "Textarea":
              nested_arr.push(
                <TextareaAutosize
                  minRows={2}
                  value={item.text_value}
                  key={item.text_value + i.toString()}
                  onChange={() => editTextArea("")}
                ></TextareaAutosize>
              );
              break;

            case "Autocomplete":
              nested_arr.push(
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  size="small"
                  key={item.autocomplete_curr_state + i.toString()}
                  value={item.autocomplete_curr_state}
                  options={item.options ? item.options : []}
                  sx={{ width: 250 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              );
              break;

            default:
              nested_arr.push(<Typography>{item.text_value}</Typography>);
              break;
          }
        });
        main_data.push(nested_arr);
      });

      return main_data;
    }
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
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title="Internal Feed"
              data={final_data}
              columns={InternalDataFeedColumns}
              // @ts-ignore
              options={options}
            />
          </ThemeProvider>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
