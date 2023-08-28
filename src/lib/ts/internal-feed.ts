import { createTheme } from "@mui/material/styles";
import { TableDataInterface } from "@/lib/interfaces";
import { SerializeDataResponse } from "../utils/data-ingestion";

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
    name: "Material Type",
    component: "Typography",
  },

  source: {
    name: "Source",
    component: "Typography",
  },

  sec_form: {
    name: "SEC Form",
    component: "Typography",
  },

  description: {
    name: "Description",
    component: "Typography",
  },

  our_keywords_found: {
    name: "Keywords Found",
    component: "Typography",
  },

  entry_unit: {
    name: "Entry Unit",
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

  sub_category: {
    name: "Sub Category",
    component: "Autocomplete",
  },
  // sub-category dynamically changes based on the data category

  relevant_writeup: {
    name: "Sentence Suggestions",
    component: "Typography",
  },

  writeup_key_events: {
    name: "Write-up",
    component: "Textarea",
  },

  relevant_data_suggestion: {
    name: "Data Points Suggestions",
    component: "Typography",
  },

  format_for_export: {
    name: "Newsletter Format",
    component: "Typography",
  },

<<<<<<< HEAD
=======
  database_segment: {
    name: "Database Segment",
    component: "Autocomplete",
  },

>>>>>>> dev
  key_event: {
    name: "Key Event",
    component: "Autocomplete",
  },

  submit_to_keyfeed: {
    name: "Submit to Key Feed",
    component: "Checkbox",
  },

  reviewed: {
    name: "Reviewed",
    component: "Checkbox",
  },

  shares_redeemed: {
    name: "Shares Redeemed",
    component: "Typography",
  },

  nav_ps: {
    name: "NAV P.S.",
    component: "Typography",
  },

  shares_before: {
    name: "Shares Before",
    component: "Typography",
  },

  percent_redeemed: {
    name: "Percent Redeemed",
    component: "Typography",
  },

  shares_left: {
    name: "Shares Left",
    component: "Typography",
  },

  left_in_trust: {
    name: "Left in Trust",
    component: "Typography",
  },

  redemption_sentence: {
    name: "Redemption Sentence",
    component: "Typography",
  },

  is_edited: {
    name: "Submitted",
    component: "Checkbox",
  }
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
<<<<<<< HEAD
=======
    name: "Database Segment",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
>>>>>>> dev
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

export const sorted_data_feed_keys = [
  "source_link",
  "date_time_est",
  "company",
  "tickers",
  "material_type",
  "source",
  "sec_form",
  "description",
  "our_keywords_found",
  "entry_unit",
  "attach_to_record",
  "data_category",
  "sub_category",
  "relevant_writeup",
  "writeup_key_events",
  "relevant_data_suggestion",
  "format_for_export",
<<<<<<< HEAD
=======
  "database_segment",
>>>>>>> dev
  "key_event",
  "submit_to_keyfeed",
  "reviewed",
  "shares_redeemed",
  "nav_ps",
  "shares_before",
  "percent_redeemed",
  "shares_left",
  "left_in_trust",
  "redemption_sentence",
  "is_edited"
];

<<<<<<< HEAD
=======
export const findIndex = (name: string) => {
  return sorted_data_feed_keys.findIndex((key) => key === name);
}

>>>>>>> dev
export const getMuiTheme = () =>
  createTheme({
    components: {
      MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            width: "300px",
          },
        },
      },

      MuiToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: "#f5f5f5",
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          head: {
            backgroundColor: "#f5f5f5 !important",
            fontWeight: "bold",
            fontSize: "18px"
          },
        },
      },
    },
<<<<<<< HEAD
  });
=======
});
>>>>>>> dev

export const DataCategoryNesting = {
  "News & De-SPAC Updates": null,
  NewsDeals: null,
  Dealupdates: {
    "Updated Deck": {
      sentence_suggestions: [
        "filed an updated investor presentation.",
        "filed an investor presentation for the deal.",
      ],
      data_point_suggestions: [
        "Updated Inv. Pres. Link",
        "Updated Inv. Pres. Date",
      ],
    },
    "Updated Financing": {
<<<<<<< HEAD
      sentence_suggestion: [
=======
      sentence_suggestions: [
>>>>>>> dev
        "entered into additional PIPE subscription agreements for an aggregate of___",
        "raise an additional $__ bringing the deal's total PIPE proceeds to ~$___.",
      ],
      data_point_suggestions: null,
    },
    "Deal Terms Ammended": {
      sentence_suggestions: [
        "filed an amendment to the merger agreement.",
        "amended the merger agreement to, among other things, extend the outside date to ___.",
      ],

      data_point_suggestions: ["Outside Date"],
    },
  },
  "Liquidations / Bankruptcies": {
    "New Liquidations / Bankruptcies": {
      sentence_suggestions: [
        "effective ___ at a redemption price per share of appx. $10.__.",
        "reports the redemption price per share will be appx. $__ and the last day of trading is expected to be ___.",
      ],
      data_point_suggestions: [
        "Liquidation Date",
        "Liquidation Ann. Date",
        "Liquidation Price",
      ],
    },
    "Liquidations/Bankruptcy Updates": null,
  },
  "Deal Closings": {
    "Deal Closings": {
      sentence_suggestions: [
        "The combined company will trade as ___ starting today.",
      ],
      data_point_suggestions: [
        "Closing Ann. Link",
        "Closing Date",
        "Ticker Change Date",
      ],
    },
  },
  "Deal Terminations": {
    "Deal Terminations": {
      sentence_suggestions: ["mutually agreed to terminate the merger"],
      data_point_suggestions: [
        "Termination Date",
        "Termination Link",
        "Termination Details",
      ],
    },
  },
  "News & De-SPAC updates": {
    "News & De-SPAC updates": {
      sentence_suggestions: ["completed a reverse stock split."],
      data_point_suggestions: [
        "Stock Split Adjustment",
        "Stock Split Date",
        "Stock Split Detail",
      ],
    },
  },
  "SPAC Extension Vote Updates": {
    "Extension Date Postponed": {
      sentence_suggestions: [
        "adjourned its meeting from yesterday to today, The deadline for reversals is today prior to ___.",
      ],
      data_point_suggestions: [
        "Ext. Vote Date",
        "Ext. Vote Time",
        "Ext. Vote Upd. Proxy",
        "Ext. Vote Proxy",
      ],
    },
    "Extension Approved": {
      sentence_suggestions: null,
      data_point_suggestions: [
        "Deadline Date",
        "Latest Red. Shares",
        "Latest Red. Link",
        "Pre-Close Shares Rem.",
        "Trust Value",
        "Ext. Details",
      ],
    },
    "Extension Funded": {
      sentence_suggestions: [
        "intends to deposit $___ into trust to fund monthly extension to ___.",
      ],
      data_point_suggestions: ["Deadline Date", "Ext. Details"],
    },
    "Extension Canceled": {
      sentence_suggestions: null,
      data_point_suggestions: [
        "Ext. Vote Date",
        "Ext. Vote Time",
        "Ext. Details",
      ],
    },
    "Non-Redemption Agreements": {
      sentence_suggestions: null,
      data_point_suggestions: ["Ext. Details"],
    },
    "Other Extension Vote Related Update": {
      sentence_suggestions: [
        "clarifies it will not use trust funds for IR excise tax liabilities.",
      ],
      data_point_suggestions: ["Ext. Details"],
    },
  },
  "Deal Plans / Rumors": {
    "Deal Plans / Rumors": {
      sentence_suggestions: ["entered into a non-binding LOI to merge with"],
      data_point_suggestions: [
        "Deal Status",
        "Deal Active Status",
        "Deal Rumor / In Talks Status",
        "Deal Rumor / In Talks Date",
        "Deal Rumor / In Talks Publication Source",
        "Deal Rumor / In Talks  Description",
      ],
    },
  },
  "Merger Vote Updates": {
    "Merger Approved": null,
    "Merger Vote Set": null,
    "SPAC Merger Redemption Results": null,
  },
  "New IPO Filings": {
    "New S-1": null,
    "New Withdrawal": null,
  },
  "IPO Updates": {
    "IPO Updates": null,
  },
  "IPO Pricings": {
    "IPO Pricings": null,
  },
  "SPAC Financials": {
    "SPAC Financials": null,
  },
  "Key Filings": {
    "Key Filings - SPAC Extensions": null,
    "Key Filings - Merger S-4": null,
    "Key Filings - Post-Merger S-1": null,
  },
  "Listing Updates": {
    "Listing Warning: Late 10-Q": null,
    "Listing Warning: Below Min. Market Value": null,
    "Listing Warning: Below Min. Holders": null,
    Delisted: {
      sentence_suggestions: ["was delisted by Nasdaq and now is trading OTC."],
    },
  },
  "All Other Updates": null,
};

// TODO remove, this demo shouldn't need to reset the theme.
export const defaultTheme = createTheme();
export const title_name = "Internal Feed";
export const initialState: Array<Array<SerializeDataResponse>> = [];
export const limit: number = 10;
