"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MUIDataTable from "mui-datatables";
import {
  DataCategoryNesting,
  findIndex,
  getMuiTheme,
  initialState,
  sorted_data_feed_keys,
} from "@/lib/ts/internal-feed";
import {
  Checkbox,
  TextareaAutosize,
  Autocomplete,
  TextField,
  Chip,
  CircularProgress,
  Button,
} from "@mui/material";
import Link from "next/link";
import { reducer } from "@/lib/reducers/internal-feed";
import { serializeData } from "@/lib/utils/data-ingestion";
import { IResponseSchema } from "@/lib/ts";
import { NewsletterContext } from "../layout";
import { URLs } from "@/lib/ts/apiUrl";
import {
  backEndURLWithoutAuth,
  getApiWithAuth,
  getApiWithoutAuth,
} from "@/lib/ts/api";

const detectPushTimeChanges = (prevArr: Array<any>, currArr: Array<any>) => {
  const changeIndex = [];
  const changeDict: any = {};
  for (let i = 0; i < prevArr.length; i++) {
    if (typeof currArr[i] === "object") {
      currArr[i] = currArr[i].join("\n");
    }
    // console.log(prevArr[i], currArr[i]);
    if (prevArr[i] !== currArr[i]) {
      changeDict[sorted_data_feed_keys[i]] = currArr[i];
      changeIndex.push([i, currArr[i]]);
    }
  }

  return { arr_format: changeIndex, dict_format: changeDict };
};

export default function RootLayout() {
  const [dataset, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setLoading] = useState<boolean>(true);
  const context = useContext(NewsletterContext);

  const changeDatasetToLatest = (index: any[][], row_number: number) => {
    const dummy = [...dataset].map((row) => [...row]);
    index.forEach((item) => {
      const req_dataset = dummy[row_number][item[0]];
      switch (req_dataset.component) {
        case "Typography":
          dummy[row_number][item[0]].text_value = item[1];
          break;

        case "Checkbox":
          dummy[row_number][item[0]].checkbox_state = item[1];
          break;

        case "Link":
          dummy[row_number][item[0]].text_value = item[1];
          break;

        case "Textarea":
          dummy[row_number][item[0]].text_value = item[1];
          break;

        case "Autocomplete":
          dummy[row_number][item[0]].autocomplete_curr_state = item[1];
          break;

        default:
          dummy[row_number][item[0]].text_value = item[1];
          break;
      }
    });
    console.log(dummy);
    dispatch({ type: "replace", payload: dummy });
  };

  const handleRowSubmit = async (
    rowData: Array<string | boolean | number>,
    rowIndex: number,
    tableMeta: any
  ) => {
    try {
      console.log(tableMeta);
      const reference_row_data = [...dataset[rowIndex]].map((item) => {
        switch (item.component) {
          case "Typography":
            return item.text_value;
          case "Checkbox":
            return item.checkbox_state;
          case "Link":
            return item.text_value;
          case "TextareaAutosize":
            return item.text_value;
          case "Autocomplete":
            return item.autocomplete_curr_state;
          case "TextField":
            return item.text_value;
          default:
            return item.text_value;
        }
      });
      const changeIndex = detectPushTimeChanges(reference_row_data, rowData);
      if (changeIndex.arr_format.length <= 0) {
        return;
      }
      changeDatasetToLatest(changeIndex.arr_format, rowIndex);
      context.changeSelectionRow(rowData);
      // Make the API request to submit the data
      const response = await fetch(URLs.sourceMaterialFeed, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "", // company id
          changed_dataset: changeIndex.dict_format,
        }),
      });
      if (response.ok) {
        console.log("API request successful");
        // After the successful API request, update the dataset state to mark the row as submitted
      } else {
        console.log("API request failed");
      }
    } catch (error) {
      console.log("API request failed with an exception:", error);
    }
  };

  const copyToClipboard = (text: string) => {
    window.navigator.clipboard.writeText(text).then(() => {
      alert("copied to clipboard");
    });
  };

  useEffect(() => {
    const GetDataset = async () => {
      setLoading(true); // Set isLoading to true before fetching data

      // this is a dummy data for now
      // the idea is to make this a paginated based table so that we can load the data in chunks
      // we need to make a call to the backend to get the data with limit and offset
      try {
        const response = await fetch(
          // `http://localhost:3000/api/dataset?limit=${limit * 3}&offset=${offset}`
          "https://localhost:5001" + URLs.sourceMaterialFeed
          // "http://127.0.0.1:5500/internal-feed.json"
        );
        const data: IResponseSchema = await response.json();
        const serializedData = serializeData(data.source.dataset);
        console.log(serializeData);
        if (serializedData.length > 0) {
          // we need to change the payload later
          dispatch({ type: "replace", payload: serializedData });
        }
      } catch (err) {
        console.log("error while fetching data information", err);
      }
      setLoading(false);
    };

    GetDataset();
  }, []);

  let final_data_reference: Array<any> = [];

  const final_data = useMemo(() => {
    const dummy = [...dataset].map((row) =>
      [...row].map((col) => ({ ...col }))
    );

    const start_time = new Date().getTime();
    if (dummy.length > 0) {
      const main_data: Array<Array<string | boolean>> = [];
      dummy.forEach((inner_arr, outer_index: number) => {
        const nested_arr: Array<string | boolean> = [];
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
      console.log(end_time - start_time, "Time taken to map the data");
      if (final_data_reference.length === 0) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        final_data_reference = main_data;
      }
      return main_data;
    }
    // mapped response should be 2D array with components, text or numbers as wanted
    return dataset;
  }, [dataset]);

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
          const dataCategory = tableMeta.rowData[findIndex("dataCategory")];
          if (!dataCategory) return <Typography>No options</Typography>;
          if (Object.keys(DataCategoryNesting).includes(dataCategory) === false)
            return <Typography>No options</Typography>;
          // @ts-ignore
          if (
            //@ts-ignore
            DataCategoryNesting[dataCategory] === undefined ||
            //@ts-ignore
            DataCategoryNesting[dataCategory] === null
          )
            return <Typography>No options</Typography>;
          // @ts-ignore
          const subCategories = Object.keys(DataCategoryNesting[dataCategory]);
          return (
            <Autocomplete
              disablePortal
              size="small"
              value={subCategories[0]}
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
          const dataCategory = row_data[findIndex("dataCategory")];
          if (!dataCategory) return <Typography>No options</Typography>;
          if (Object.keys(DataCategoryNesting).includes(dataCategory) === false)
            return <Typography>No suggestions</Typography>;
          // @ts-ignore
          if (
            //@ts-ignore
            DataCategoryNesting[dataCategory] === undefined ||
            //@ts-ignore
            DataCategoryNesting[dataCategory] === null
          )
            return <Typography>No =suggestions</Typography>;
          // @ts-ignore
          const subCategories = DataCategoryNesting[dataCategory];
          if (
            Object.keys(subCategories).includes(
              row_data[findIndex("subCategory")]
            ) === false ||
            subCategories[row_data[findIndex("subCategory")]] === null
          )
            return <Typography>No suggestions</Typography>;

          const options = subCategories[row_data[findIndex("subCategory")]];
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
            onChange={(event) => {
              updateValue(event.target.value);
            }}
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
          const dataCategory = row_data[findIndex("dataCategory")];
          if (!dataCategory) return <Typography>No options</Typography>;
          if (Object.keys(DataCategoryNesting).includes(dataCategory) === false)
            return <Typography>No suggestions</Typography>;
          // @ts-ignore
          if (
            //@ts-ignore
            DataCategoryNesting[dataCategory] === undefined ||
            //@ts-ignore
            DataCategoryNesting[dataCategory] === null
          )
            return <Typography>No =suggestions</Typography>;
          // @ts-ignore
          const subCategories = DataCategoryNesting[dataCategory];
          if (
            Object.keys(subCategories).includes(row_data[12]) === false ||
            subCategories[row_data[findIndex("subCategory")]] === null
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
          const sentence = `${row_data[findIndex("company")]} [$${
            row_data[findIndex("tickers")]
          }] write-up. (${row_data[findIndex("source")]})`;
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
      name: "Database Segment",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Autocomplete
            disablePortal
            size="small"
            value={value}
            options={["SPAC", "Merger", "IPO", "Listing Track"]}
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
          <Checkbox
            checked={value}
            onChange={() => {
              updateValue(!value);
            }}
          />
        ),
      },
    },

    {
      name: "Reviewed",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => (
          <Checkbox
            checked={value}
            onChange={() => {
              updateValue(!value);
            }}
          />
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
              updateValue(parseFloat(event.target.value));
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
                updateValue(parseFloat(event.target.value));
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
          const calculation = parseFloat(
            (
              tableMeta.rowData[findIndex("sharesRedeemed")] /
              tableMeta.rowData[findIndex("sharesBefore")]
            ).toFixed(2)
          );
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
          const calculation = parseFloat(
            (
              tableMeta.rowData[findIndex("sharesBefore")] -
              tableMeta.rowData[findIndex("sharesRedeemed")]
            ).toFixed(2)
          );
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
          const calculation = parseFloat(
            (
              (tableMeta.rowData[findIndex("sharesBefore")] -
                tableMeta.rowData[findIndex("sharesRedeemed")]) *
              tableMeta.rowData[findIndex("navPs")]
            ).toFixed(2)
          );
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
          console.log(row_data, "btn row data");
          row_data[findIndex("percentRedeemed")] = (
            row_data[findIndex("sharesRedeemed")] /
            row_data[findIndex("sharesBefore")]
          ).toFixed(2);
          row_data[findIndex("leftInTrust")] = (
            (row_data[findIndex("sharesBefore")] -
              row_data[findIndex("sharesRedeemed")]) *
            row_data[findIndex("navPs")]
          ).toFixed(2);
          const parsed_sentence = `Shareholders redeemed ${
            row_data[findIndex("sharesRedeemed")]
          } shares or ~ ${
            row_data[findIndex("percentRedeemed")]
          }% of the public SPAC shares, leaving $${
            row_data[findIndex("leftInTrust")]
          } in trust, prior to potential reversals.`;
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

    {
      name: "Submit",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          const dummy = [...final_data_reference][tableMeta.rowIndex];
          const row_data = [...tableMeta.rowData];
          let status = false;
          if (
            dummy[findIndex("entryUnit")] ===
              row_data[findIndex("entryUnit")] &&
            dummy[findIndex("attachToRecord")] ===
              row_data[findIndex("attachToRecord")] &&
            dummy[findIndex("writeupKeyEvents")] ===
              row_data[findIndex("writeupKeyEvents")] &&
            dummy[findIndex("keyEvent")] ===
              row_data[findIndex("keyEvent")] &&
            dummy[findIndex("submitToKeyfeed")] ===
              row_data[findIndex("submitToKeyfeed")] &&
            dummy[findIndex("reviewed")] === row_data[findIndex("reviewed")] &&
            dummy[findIndex("sharesRedeemed")] ===
              row_data[findIndex("sharesRedeemed")] &&
            dummy[findIndex("navPs")] ===
              parseInt(row_data[findIndex("navPs")])
          ) {
            status = true;
          }

          return (
            <Button
              variant="contained"
              sx={{
                backgroundColor: status === false ? "primary" : "darkgrey",
                "&:hover": {
                  backgroundColor: "darkgrey",
                },
              }}
              onClick={() =>
                handleRowSubmit(
                  tableMeta.rowData,
                  tableMeta.rowIndex,
                  tableMeta
                )
              }
            >
              Submit
            </Button>
          );
        },
      },
    },
  ];

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
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Internal Feed Table"}
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
      )}
    </Box>
  );
}
