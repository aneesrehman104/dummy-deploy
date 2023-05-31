import { createTheme } from "@mui/material/styles";
import { TableDataInterface } from "@/lib/interfaces";

// mapper for the internal feed table
// maps the internal feed table column to the internal feed table data
export const InternalFeedTableData = {
  source_link: {
    name: "Source Link",
    component: "Link",
  },

  date_time_est: {
    name: "Date and Time EST",
    component: "Typography",
  },

  company: {
    name: "Company(s)",
    component: "Typography",
  },

  tickers: {
    name: "Ticker(s)",
    component: "Typography",
  },

  material_type: {
    name: "Type of Material (Sec, PR, News)",
    component: "Typography",
  },

  source: {
    name: "Source",
    component: "Typography",
  },

  sec_form: {
    name: "Type of SEC Form",
    component: "Typography",
  },

  description: {
    name: "Description",
    component: "Typography",
  },

  source_material_body: {
    name: "Body of Source Material",
    component: "Typography",
  },

  our_keywords_found: {
    name: "Our Keywords Found",
    component: "Typography",
  },

  entry_unit: {
    name: "Entry Unit (Deal/Company)",
    component: "Autocomplete",
  },

  attach_to_record: {
    name: "Attach to Record",
    component: "Autocomplete",
  },

  data_category: {
    name: "Data Category",
    component: "Autocomplete",
  },

  key_event: {
    name: "Key Event(Y/N)",
    component: "Autocomplete",
  },

  relevant_writeup: {
    name: "Relevant Writeup Sentence Suggestions Based on Data Category",
    component: "Typography",
  },

  writeup_key_events: {
    name: "Writeup for Key Events / Newsletter",
    component: "Typography",
  },

  relevant_data_suggestion: {
    name: "Relevant Data Points Suggestions Based on Data Category",
    component: "Typography",
  },

  format_for_export: {
    name: "Format for Export to Newsletter / Key Event",
    component: "Typography",
  },

  submit_to_keyfeed: {
    name: "Submit to Key Feed and Newsletter tool",
    component: "Checkbox",
  },

  reviewed: {
    name: "Reviewed",
    component: "Checkbox",
  },
};

// this is the data for the table columns and filter informations

export const InternalDataFeedColumns = [
  {
    name: "Source Link",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Date and Time EST",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Company(s)",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Ticker(s)",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Type of Material (Sec, PR, News)",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Source",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Type of SEC Form",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Description",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Body of Source Material",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Our Keywords Found",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Entry Unit (Deal/Company)",
    options: {
      filter: true,
      sort: false,
      width: 400,
    },
  },

  {
    name: "Attach to Record",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Data Category",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Key Event(Y/N)",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Relevant Writeup Sentence Suggestions Based on Data Category",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Writeup for Key Events / Newsletter",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Relevant Data Points Suggestions Based on Data Category",
    options: {
      filter: true,
      sort: false,
      width: 400,
    },
  },

  {
    name: "Format for Export to Newsletter / Key Event",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Submit to Key Feed and Newsletter tool",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Reviewed",
    options: {
      filter: true,
      sort: false,
    },
  },
];

export const options = {
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

export const getMuiTheme = () =>
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

// TODO remove, this demo shouldn't need to reset the theme.
export const defaultTheme = createTheme();
export const title_name = "Internal Feed";
export const initialState: Array<Array<TableDataInterface>> = [];
export const limit: number = 10;
