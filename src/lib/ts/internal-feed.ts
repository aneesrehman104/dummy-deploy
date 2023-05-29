// mapper for the internal feed table
// maps the internal feed table column to the internal feed table data
export const InternalFeedTableData = {
  tickers: {
    name: "Tickers",
    component: "Typography",
  },

  companies: {
    name: "Tickers",
    component: "Typography",
  },

  type: {
    name: "Type (PR, SF, News)",
    component: "Typography",
  },

  link: {
    name: "Link",
    component: "Link",
  },

  subject: {
    name: "Subject",
    component: "Typography",
  },

  source: {
    name: "Source",
    component: "Typography",
  },

  market_segments: {
    name: "Market Segment(s)",
    component: "Badge",
  },

  checked: {
    name: "Checked",
    component: "Checkbox",
  },

  key: {
    name: "Key?",
    component: "Checkbox",
  },

  attach_to_deal: {
    name: "Attach to Deal",
    component: "Autocomplete",
  },
};

// this is the data for the table columns and filter informations
export const InternalDataFeedColumns = [
  {
    name: "Tickers",
    options: {
      filter: true,
      filterList: [],
      customFilterListOptions: { render: (v: string) => `Ticker: ${v}` },
      filterOptions: {
        names: [],
      },
    },
  },
  {
    name: "Companies",
    options: {
      filter: true,
      filterList: [],
      customFilterListOptions: { render: (v: string) => `Name: ${v}` },
      filterType: "textField", // set filterType's at the column level
    },
  },
  {
    name: "Type (PR, SF, News)",
    options: {
      filter: true,
      filterList: ["PR", "SF", "News"],
      filterType: "textField", // set filterType's at the column level
    },
  },
  {
    name: "Link",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "Subject",
    options: {
      filter: false,
      sort: false,
    },
  },

  {
    name: "Source",
    options: {
      filter: true,
      customFilterListOptions: { render: (v: string) => `Salary: ${v}` },
      sort: false,
    },
  },

  {
    name: "Market Segments(s)",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Checked",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Key",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "Attach to Deal",
    options: {
      filter: true,
      sort: true,
    },
  },
];

export const InternalFeedTableDataKeys = Object.keys(InternalFeedTableData);
