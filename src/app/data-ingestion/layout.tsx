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
  DataCategoryNesting,
  defaultTheme,
  getMuiTheme,
  initialState,
  limit,
  title_name,
} from "@/lib/ts/internal-feed";
import {
  Checkbox,
  TextareaAutosize,
  Autocomplete,
  TextField,
  Chip,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import { reducer } from "@/lib/reducers/internal-feed";
import { serializeData } from "@/lib/utils/data-ingestion";
import { IResponseSchema } from "@/lib/ts";

export default function RootLayout(children: JSX.Element | JSX.Element[]) {
  const [open, setOpen] = React.useState(true);
  const [current_section, setCurrentSection] = useState<string>(
    "Source Material Feed"
  );
  const [offset, setOffset] = useState<number>(0);
  const [dataset, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setLoading] = useState<boolean>(true);
  const table_columns = [
    {
      name: "Source Link",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any) => {
          return (
            <Link
              href={value}
              style={{
                textDecoration: "underline",
                color: "blue",
              }}
            >
              {value}
            </Link>
          );
        },
      },
    },

    {
      name: "Date & Time EST",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Typography>{value}</Typography>
        ),
      },
    },

    {
      name: "Company(s)",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Typography>{value}</Typography>
        ),
      },
    },

    {
      name: "Ticker(s)",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Typography>{value}</Typography>
        ),
      },
    },

    {
      name: "Material Type",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Typography>{value}</Typography>
        ),
      },
    },

    {
      name: "Source",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Typography>{value}</Typography>
        ),
      },
    },

    {
      name: "SEC Form",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Typography>{value}</Typography>
        ),
      },
    },

    {
      name: "Description",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Typography>{value}</Typography>
        ),
      },
    },

    {
      name: "Keywords Found",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Typography>{value}</Typography>
        ),
      },
    },

    {
      name: "Entry Unit",
      options: {
        filter: true,
        sort: false,
        width: 400,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Autocomplete
            disablePortal
            size="small"
            value={value}
            options={["Deal", "Company"]}
            sx={{ width: 250 }}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option}>
                  {option}
                </li>
              );
            }}
            renderTags={(tagValue, getTagProps) => {
              return tagValue.map((option, index) => (
                <Chip {...getTagProps({ index })} key={option} label={option} />
              ));
            }}
            onChange={(event: any, newValue: any) => {
              updateValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        ),
      },
    },

    {
      name: "Attach to Record",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            size="small"
            value={value}
            options={[]}
            sx={{ width: 250 }}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option}>
                  {option}
                </li>
              );
            }}
            renderTags={(tagValue, getTagProps) => {
              return tagValue.map((option, index) => (
                <Chip {...getTagProps({ index })} key={option} label={option} />
              ));
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        ),
      },
    },

    {
      name: "Data Category",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          return (
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              size="small"
              value={value}
              options={Object.keys(DataCategoryNesting)}
              sx={{ width: 250 }}
              onChange={(event, newValue) => {
                updateValue(newValue);
              }}
              renderOption={(props, option) => {
                return (
                  <li {...props} key={option}>
                    {option}
                  </li>
                );
              }}
              renderTags={(tagValue, getTagProps) => {
                return tagValue.map((option, index) => (
                  <Chip
                    {...getTagProps({ index })}
                    key={option}
                    label={option}
                  />
                ));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          );
        },
      },
    },

    {
      name: "Sub-Category",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          const dataCategory = tableMeta.rowData[11];
          if (!dataCategory) return <Typography>No options</Typography>;
          if (Object.keys(DataCategoryNesting).includes(dataCategory) === false)
            return <Typography>No options</Typography>;
          // @ts-ignore
          if ( DataCategoryNesting[dataCategory] === undefined || DataCategoryNesting[dataCategory] === null )
            return <Typography>No options</Typography>;
          // @ts-ignore
          const subCategories = Object.keys(DataCategoryNesting[dataCategory]);
          return (
            <Autocomplete
              disablePortal
              size="small"
              value={value}
              options={subCategories}
              sx={{ width: 250 }}
              onChange={(event, newValue) => {
                updateValue(newValue);
              }}
              renderOption={(props, option) => {
                return (
                  <li {...props} key={option}>
                    {option}
                  </li>
                );
              }}
              renderTags={(tagValue, getTagProps) => {
                return tagValue.map((option, index) => (
                  <Chip
                    {...getTagProps({ index })}
                    key={option}
                    label={option}
                  />
                ));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          );
        },
      },
    },

    {
      name: "Sentence Suggestions",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          const row_data = [...tableMeta.rowData];
          const dataCategory = row_data[11];
          if (!dataCategory) return <Typography>No options</Typography>;
          if (Object.keys(DataCategoryNesting).includes(dataCategory) === false)
            return <Typography>No suggestions</Typography>;
          // @ts-ignore
          if (DataCategoryNesting[dataCategory] === undefined ||DataCategoryNesting[dataCategory] === null)
            return <Typography>No =suggestions</Typography>;
          // @ts-ignore
          const subCategories = DataCategoryNesting[dataCategory];
          if (
            Object.keys(subCategories).includes(row_data[12]) === false ||
            subCategories[row_data[12]] === null
          )
            return <Typography>No suggestions</Typography>;

          const options = subCategories[row_data[12]];
          if (options.sentence_suggestions === null)
            return <Typography>No suggestions</Typography>;

          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {options.sentence_suggestions.map((item: any, i: number) => {
                return (
                  <Typography
                    style={{
                      marginTop: "2px",
                      padding: 2,
                      backgroundColor: "#e0e0e0",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      copyToClipboard(item);
                    }}
                    key={item + i.toString()}
                  >
                    {item}
                  </Typography>
                );
              })}
            </div>
          );
        },
      },
    },

    {
      name: "Write-up",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <TextareaAutosize
            value={value}
            onChange={(event) => updateValue(event.target.value)}
            style={{ padding: 8, width: 300, height: 100 }}
          />
        ),
      },
    },

    {
      name: "Data Points Suggestions",
      options: {
        filter: true,
        sort: false,
        width: 400,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          const row_data = [...tableMeta.rowData];
          const dataCategory = row_data[11];
          if (!dataCategory) return <Typography>No options</Typography>;
          if (Object.keys(DataCategoryNesting).includes(dataCategory) === false)
            return <Typography>No suggestions</Typography>;
          // @ts-ignore
          if (DataCategoryNesting[dataCategory] === undefined ||DataCategoryNesting[dataCategory] === null)
            return <Typography>No =suggestions</Typography>;
          // @ts-ignore
          const subCategories = DataCategoryNesting[dataCategory];
          if (
            Object.keys(subCategories).includes(row_data[12]) === false ||
            subCategories[row_data[12]] === null
          )
            return <Typography>No suggestions</Typography>;

          const options = subCategories[row_data[12]];
          if (options.data_point_suggestions === null)
            return <Typography>No suggestions</Typography>;

          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {options.data_point_suggestions.map((item: any, i: number) => {
                return (
                  <Typography
                    style={{
                      marginTop: "2px",
                      padding: 2,
                      backgroundColor: "#e0e0e0",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      copyToClipboard(item);
                    }}
                    key={item + i.toString()}
                  >
                    {item}
                  </Typography>
                );
              })}
            </div>
          );
        },
      },
    },

    {
      name: "Newsletter Format",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          const row_data = tableMeta.rowData;
          const sentence = `${row_data[2]} [$${row_data[3]}] write-up. (${row_data[5]})`;
          return (
            <Typography
              onClick={() => copyToClipboard(sentence)}
              sx={{
                cursor: "pointer",
              }}
            >
              {sentence}
            </Typography>
          );
        },
      },
    },

    {
      name: "Key Event",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Autocomplete
            disablePortal
            size="small"
            value={value}
            options={["Yes", "No"]}
            onChange={(_, newValue) => {
              updateValue(newValue);
            }}
            sx={{ width: 200 }}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option}>
                  {option}
                </li>
              );
            }}
            renderTags={(tagValue, getTagProps) => {
              return tagValue.map((option, index) => (
                <Chip {...getTagProps({ index })} key={option} label={option} />
              ));
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        ),
      },
    },

    {
      name: "Submit to Key Feed",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Checkbox checked={value} onChange={() => updateValue(!value)} />
        ),
      },
    },

    {
      name: "Reviewed",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Checkbox checked={value} onChange={() => updateValue(!value)} />
        ),
      },
    },

    {
      name: "Shares Redeemed",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <TextField
            value={value}
            size="small"
            onChange={(event) => {
              updateValue(event.target.value);
            }}
          />
        ),
      },
    },

    {
      name: "NAV P.S.",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          return (
            <TextField
              value={value}
              size="small"
              onChange={(event) => {
                updateValue(event.target.value);
              }}
            />
          );
        },
      },
    },

    {
      name: "Shares Before",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Typography>{value}</Typography>
        ),
      },
    },

    {
      name: "Percent Redeemed",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          const calculation = (
            tableMeta.rowData[20] / tableMeta.rowData[22]
          ).toFixed(2);
          return <Typography>{calculation}</Typography>;
        },
      },
    },

    {
      name: "Shares Left",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          const calculation = (
            tableMeta.rowData[22] - tableMeta.rowData[20]
          ).toFixed(2);
          return <Typography>{calculation}</Typography>;
        },
      },
    },

    {
      name: "Left in Trust",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          const calculation = (
            (tableMeta.rowData[22] - tableMeta.rowData[20]) *
            tableMeta.rowData[21]
          ).toFixed(2);
          return <Typography>{calculation}</Typography>;
        },
      },
    },

    {
      name: "Redemption Sentence",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          const row_data = [...tableMeta.rowData];
          row_data[23] = (row_data[19] / row_data[21]).toFixed(2);
          row_data[25] = ((row_data[21] - row_data[19]) * row_data[20]).toFixed(
            2
          );
          const parsed_sentence = `Shareholders redeemed ${row_data[20]} shares or ${row_data[23]}% of the public SPAC shares, leaving $${row_data[25]} in trust, prior to potential reversals.`;
          return (
            <div onClick={() => copyToClipboard(parsed_sentence)}>
              <Typography
                sx={{
                  cursor: "pointer",
                }}
              >
                {parsed_sentence}
              </Typography>
            </div>
          );
        },
      },
    },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const switchSelection = (section_name: string) => {
    setCurrentSection(section_name);
  };

  const copyToClipboard = (text: string) => {
    window.navigator.clipboard.writeText(text).then(() => {
      alert("copied to clipboard");
    });
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
      try {
        const response = await fetch(
          // `http://localhost:3000/api/dataset?limit=${limit * 3}&offset=${offset}`
          "http://127.0.0.1:5500/internal-feed.json"
        );
        const data: IResponseSchema = await response.json();
        const serializedData = serializeData(data.source.dataset);
        if (serializedData.length > 0) {
          // we need to change the payload later
          dispatch({ type: "replace", payload: serializedData });
        }
      } catch {
        console.log("error while fetching data information");
      }
      setLoading(false);
    };

    GetDataset();
  }, []);

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

    const dummy = [...dataset].map((row) =>
      [...row].map((col) => ({ ...col }))
    );
    const start_time = new Date().getTime();
    if (dummy.length > 0) {
      const main_data: Array<Array<React.ReactNode>> = [];
      dummy.forEach((inner_arr, outer_index: number) => {
        const nested_arr: Array<string | React.ReactNode | boolean> = [];
        inner_arr.forEach((item: any, i: number) => {
          switch (item.component) {
            case "Typography":
              if (item.options.length > 1) {
                nested_arr.push(item.options);
              } else {
                nested_arr.push(item.text_value);
              }
              break;

            case "Checkbox":
              nested_arr.push(item.checkbox_state);
              break;

            case "Link":
              nested_arr.push(item.text_value);
              break;

            case "Textarea":
              nested_arr.push(item.text_value);
              break;

            case "Autocomplete":
              nested_arr.push(item.autocomplete_curr_state);
              break;

            default:
              nested_arr.push(item.text_value);
              break;
          }
        });
        main_data.push(nested_arr);
      });
      const end_time = new Date().getTime();
      console.log(end_time - start_time);
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
              title={
                <Typography variant="h6">
                  Internal Feed
                  {isLoading && (
                    <CircularProgress
                      size={24}
                      style={{ marginLeft: 15, position: "relative", top: 4 }}
                    />
                  )}
                </Typography>
              }
              data={final_data}
              columns={table_columns}
              options={{
                pagination: true,
                tableId: "internal_feed",
                filter: true,
                search: true,
                filterType: "dropdown",
                rowsPerPageOptions: [10],
                rowsPerPage: 10,
              }}
            />
          </ThemeProvider>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
