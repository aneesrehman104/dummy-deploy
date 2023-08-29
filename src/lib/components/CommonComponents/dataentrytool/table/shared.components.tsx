import Image from "next/image";
import React from "react";
import FilterSvg from "@public/filter.svg";
import { Tooltip } from "@mui/material";

export const colorsMapper = {
  red: " bg-red-500 hover:bg-red-400",
  green: " bg-green-500 hover:bg-green-400",
  blue: " bg-blue-500 hover:bg-blue-400",
  indigo:
    " dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500",
  checked: " text-emerald-500 bg-emerald-100/60 dark:bg-gray-800",
  wrong: " text-red-500 bg-red-100/60 dark:bg-gray-800",
  pending: " text-gray-500 bg-gray-100/60 dark:bg-gray-800",
};

export const ColumnNames: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="inline-block whitespace-nowrap min-w-48">{text}</span>
  );
};

{
}
export const headerNames = [
  {
    name: "",
    id: "e1021mxsla23332900",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <span></span>,
    Component: (
      status: string | boolean,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => (
      <RowCheckbox
        status={typeof status === "boolean" && status}
        onClick={onClick}
      />
    ),
  },

  {
    name: "Company Id",
    id: "e1021mxsla23332901",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => (
      <div className="flex items-center gap-x-3 whitespace-nowrap">
        <ColumnButton name={text} color="green" />
      </div>
    ),
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Company Name",
    id: "e1021mxsla23332902",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => (
      <div className="inline-flex items-center gap-x-3">
        <span className="font-medium text-gray-700 dark:text-gray-200">
          {text}
        </span>
      </div>
    ),
  },
  {
    name: "Company Description",
    id: "e1021mxsla23332915",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SP500",
    id: "e1021mxsla23332916",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "DJIA",
    id: "e1021mxsla23332917",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Fortune 500",
    id: "e1021mxsla23332918",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "CEO",
    id: "e1021mxsla23332919",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Delisting Date",
    id: "e1021mxsla23332920",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Delisting Type",
    id: "e1021mxsla23332921",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Delisting Description",
    id: "e1021mxsla23332922",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Bankruptcy Acquirer",
    id: "e1021mxsla23332923",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Sub Industry",
    id: "e1021mxsla23332924",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "CommonFI Business Model Tags",
    id: "e1021mxsla23332925",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Clean Tech Industry Tags",
    id: "e1021mxsla23332926",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Infotech and Tech Enabled Growth Industry Tags",
    id: "e1021mxsla23332927",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Tech Business Model Tags",
    id: "e1021mxsla23332928",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Emerging Tech Industry Tags",
    id: "e1021mxsla23332929",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Logistics Sub-Industry Tags",
    id: "e1021mxsla23332930",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Fintech Sub-Industry Tags",
    id: "e1021mxsla23332931",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Mobility Sub-Industry Tags",
    id: "e1021mxsla23332932",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Investment Theme",
    id: "e1021mxsla23332933",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Company Tags",
    id: "e1021mxsla23332934",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Capital Raised Pre-IPO",
    id: "e1021mxsla23332935",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest 10-Q Link",
    id: "e1021mxsla23332936",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "CIK",
    id: "e1021mxsla23332937",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Company Name",
    id: "e1021mxsla23332938",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Company Status",
    id: "e1021mxsla23332939",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Symbol",
    id: "e1021mxsla23332940",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "CUSIP",
    id: "e1021mxsla23332941",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Domicile",
    id: "e1021mxsla23332942",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Employees",
    id: "e1021mxsla23332943",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Exchange",
    id: "e1021mxsla23332944",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Headquarters",
    id: "e1021mxsla23332945",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Industry",
    id: "e1021mxsla23332946",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Last Private Raise",
    id: "e1021mxsla23332947",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Last Private Valuation",
    id: "e1021mxsla23332948",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Last Raise Date",
    id: "e1021mxsla23332949",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Last Valuation Date",
    id: "e1021mxsla23332950",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Liquidation Announcement Link",
    id: "e1021mxsla23332951",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Liquidation Date",
    id: "e1021mxsla23332952",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Listing Status",
    id: "e1021mxsla23332953",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Logo",
    id: "e1021mxsla23332954",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Post Merger CUSIP",
    id: "e1021mxsla23332955",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Prev Year Net Income",
    id: "e1021mxsla23332956",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Prev Year Revenue",
    id: "e1021mxsla23332957",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Prev Year EBITDA",
    id: "e1021mxsla23332958",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Region",
    id: "e1021mxsla23332959",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Registration Domicile",
    id: "e1021mxsla23332960",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Sector",
    id: "e1021mxsla23332961",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Cumilative Stock Split Factor",
    id: "e1021mxsla23332962",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Split Adjustment for Latest Share Count",
    id: "e1021mxsla23332963",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest 10-Q File Date",
    id: "e1021mxsla23332964",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Super 8-K Link",
    id: "e1021mxsla23332965",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Super 8-K File Date",
    id: "e1021mxsla23332966",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Going Concern Latest Earnings",
    id: "e1021mxsla23332904",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Rough Times Tags",
    id: "e1021mxsla23332967",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Pre IPO Company Shares",
    id: "e1021mxsla23332968",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Post IPO Company Shares",
    id: "e1021mxsla23332969",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Green Shoe Shares",
    id: "e1021mxsla23332970",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Pre IPO Backing",
    id: "e1021mxsla23332971",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Prominent Pre-IPO VC Backers",
    id: "e1021mxsla23332972",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Prominent Pre-IPO PE Backers",
    id: "e1021mxsla23332973",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Last Startup Round Valuation",
    id: "e1021mxsla23332974",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Premium at IPO Pricing from Last Startup Round",
    id: "e1021mxsla23332975",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Lockup Expiration Date",
    id: "e1021mxsla23332976",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Quiet Period Expiration Date",
    id: "e1021mxsla23332977",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Expected IPO Date",
    id: "e1021mxsla23332978",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Expected IPO Price High",
    id: "e1021mxsla23332979",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Expected IPO Price Low",
    id: "e1021mxsla23332980",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Expected IPO Shares",
    id: "e1021mxsla23332981",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Initial S1 Link",
    id: "e1021mxsla23332982",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Date",
    id: "e1021mxsla23332983",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Closing Date",
    id: "e1021mxsla23332984",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Exchange",
    id: "e1021mxsla23332985",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Lead Left Underwriter",
    id: "e1021mxsla23332986",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Marketcap",
    id: "e1021mxsla23332987",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Size",
    id: "e1021mxsla23332988",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Price",
    id: "e1021mxsla23332989",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Rumor Date",
    id: "e1021mxsla23332990",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Rumor Publication",
    id: "e1021mxsla23332991",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Rumor Source Link",
    id: "e1021mxsla23332992",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Shares Offered",
    id: "e1021mxsla23332993",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Stall Date",
    id: "e1021mxsla23332994",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Stall Link",
    id: "e1021mxsla23332995",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Stall Publication",
    id: "e1021mxsla23332996",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Status",
    id: "e1021mxsla23332999",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Type",
    id: "e1021mxsla23332997",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "IPO Sub Underwriters",
    id: "e1021mxsla23332998",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Listing Method",
    id: "e1021mxsla233329100",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Rumored IPO Market Cap",
    id: "e1021mxsla233329101",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Rumored IPO Offering Size",
    id: "e1021mxsla233329102",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Rumored IPO Price High",
    id: "e1021mxsla233329103",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },
  {
    name: "Rumored IPO Price High",
    id: "e1021mxsla233329104",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Rumored IPO Price Low",
    id: "e1021mxsla233329105",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "S-1 Initial Filing Date",
    id: "e1021mxsla233329106",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "S-1 Latest Withdrawal Date",
    id: "e1021mxsla233329107",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Amended S-1 Filing Date",
    id: "e1021mxsla233329108",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest S-1 Link",
    id: "e1021mxsla233329109",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Adjusted IPO Price",
    id: "e1021mxsla233329110",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Liquidation Announcement Date",
    id: "e1021mxsla233329111",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC IPO Units",
    id: "e1021mxsla233329112",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Warrant Coverage",
    id: "e1021mxsla233329113",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC IPO Rights",
    id: "e1021mxsla233329114",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC IPO Subunits",
    id: "e1021mxsla233329115",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Warrant Conversion Ratio",
    id: "e1021mxsla233329116",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Warrant Exercise Price",
    id: "e1021mxsla233329117",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Initial Deadline Months",
    id: "e1021mxsla233329118",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Extension Months",
    id: "e1021mxsla233329119",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Shares Redeemed at Merger Vote",
    id: "e1021mxsla233329120",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Shares Redeemed Latest Extension Vote",
    id: "e1021mxsla233329121",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC IPO Date",
    id: "e1021mxsla233329122",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Progress Status with Merger Partner",
    id: "e1021mxsla233329123",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Announced Transaction Overview Slide",
    id: "e1021mxsla233329124",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Comparable Landscape Slide",
    id: "e1021mxsla233329125",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Competitive Valuation Benchmarking Slide",
    id: "e1021mxsla233329126",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "De-SPAC Closing Date",
    id: "e1021mxsla233329127",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Estimated Trust Value per Share",
    id: "e1021mxsla233329128",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Latest Extension Vote Ex-Red Date",
    id: "e1021mxsla233329129",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Latest Extension Vote Red Deadline Date",
    id: "e1021mxsla233329130",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Latest Extension Vote Date",
    id: "e1021mxsla233329131",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Latest Extension Vote Notes",
    id: "e1021mxsla233329132",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Latest Extension Vote Proposal",
    id: "e1021mxsla233329133",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Latest Extension Vote Proxy Link",
    id: "e1021mxsla233329134",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Latest Extension Details",
    id: "e1021mxsla233329135",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Financial Historicals Slide from Investor Deck",
    id: "e1021mxsla233329136",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Financial Projections Slide from Investor Deck",
    id: "e1021mxsla233329137",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Initial SPAC Deadline Date",
    id: "e1021mxsla233329138",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest Post-SPAC Merger Share Registration S-1 Link",
    id: "e1021mxsla233329139",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Liquidation Redemption Price",
    id: "e1021mxsla233329140",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Liquidation Trust Value",
    id: "e1021mxsla233329141",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Merger Vote Ex-Redemption Date",
    id: "e1021mxsla233329142",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Merger Vote Redemption Deadline Date",
    id: "e1021mxsla233329143",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Operational Benchmarking Slide",
    id: "e1021mxsla233329144",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Peer Landscape Slide",
    id: "e1021mxsla233329145",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Post-Close S-1 Filed Date",
    id: "e1021mxsla233329146",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Post-Close S-1 Eff Date",
    id: "e1021mxsla233329147",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Post-SPAC Merger Warrant Exercise Deadline Date",
    id: "e1021mxsla233329148",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Prominent Leaders",
    id: "e1021mxsla233329149",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Desired Target Focus",
    id: "e1021mxsla233329150",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Progress Status",
    id: "e1021mxsla233329151",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Active Status",
    id: "e1021mxsla233329152",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Estimated Split Date",
    id: "e1021mxsla233329153",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Trust PS at IPO",
    id: "e1021mxsla233329154",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Trust per Share at Latest 10-Q",
    id: "e1021mxsla233329155",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Trust per Share at Latest Filing",
    id: "e1021mxsla233329156",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Trust Per Share Date",
    id: "e1021mxsla233329157",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Trust per Share Source Link",
    id: "e1021mxsla233329158",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Trust Value at Latest 10-Q",
    id: "e1021mxsla233329159",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Unit Symbol",
    id: "e1021mxsla233329160",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Valuation Comps Slide",
    id: "e1021mxsla233329161",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Warrant Symbol",
    id: "e1021mxsla233329162",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest Transaction Overview Slide",
    id: "e1021mxsla233329163",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "SPAC Percent Shares Redeemed Prior to Merger",
    id: "e1021mxsla233329164",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Est Shares Remaining Pre-Close",
    id: "e1021mxsla233329165",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Est SPAC Deadline Date",
    id: "e1021mxsla233329166",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Est Trust Value from Latest Filing",
    id: "e1021mxsla233329167",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },
];
export const mergerTableHeaderName = [
  {
    name: "Solicitation",
    id: "e1021mxsla233329168",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Alternative Merger Strategy Tags",
    id: "e1021mxsla233329169",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "CommonFi Merger Tags",
    id: "e1021mxsla233329170",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest Merger Description",
    id: "e1021mxsla233329171",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Additional Equity Investors",
    id: "e1021mxsla233329172",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Transaction Fees",
    id: "e1021mxsla233329173",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Announced Deal Offer Description",
    id: "e1021mxsla233329174",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest Deal Offer Description",
    id: "e1021mxsla233329175",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Announced Minimum Cash Closing Condition",
    id: "e1021mxsla233329176",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest Minimum Cash Closing Condition",
    id: "e1021mxsla233329177",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Post-Merger Exchange",
    id: "e1021mxsla233329178",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Post-Merger Symbol",
    id: "e1021mxsla233329179",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest Merger Offer Price per Share",
    id: "e1021mxsla233329180",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest Merger Offer Price Total",
    id: "e1021mxsla233329181",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest S-4 Filing Date",
    id: "e1021mxsla233329182",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest S-4 Link",
    id: "e1021mxsla233329183",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Acquirer Definitive Merger Vote Proxy Link",
    id: "e1021mxsla233329184",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Acquirer Merger Vote Notes",
    id: "e1021mxsla233329185",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Acquirer Prelim Merger Vote Proxy Link",
    id: "e1021mxsla233329186",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Target Premium at Merger Offer Price per Share",
    id: "e1021mxsla233329187",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Official Talks Date",
    id: "e1021mxsla233329188",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Official Talks Link",
    id: "e1021mxsla233329189",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Status with Status Date",
    id: "e1021mxsla233329190",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Status Link",
    id: "e1021mxsla233329191",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Rumored Merger Valuation",
    id: "e1021mxsla233329192",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Rumored Merger Valuation Detail",
    id: "e1021mxsla233329193",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Rumored Valuation Type",
    id: "e1021mxsla233329194",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Combined Pro-forma Equity Valuation",
    id: "e1021mxsla233329195",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Combined Pro-forma Enterprise Valuation",
    id: "e1021mxsla233329196",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },
  {
    name: "Target Pre-Money Equity Valuation",
    id: "e1021mxsla233329197",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Acquirer Merger Vote Date",
    id: "e1021mxsla233329198",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Additional Merger Financing",
    id: "e1021mxsla233329199",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Additional Merger Valuation",
    id: "e1021mxsla233329200",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Announced Merger Valuation Detail",
    id: "e1021mxsla233329201",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Announced Merger Valuation Type",
    id: "e1021mxsla233329202",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Announced PIPE Investors",
    id: "e1021mxsla233329203",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Combined Company Name",
    id: "e1021mxsla233329204",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Combined Company Symbol",
    id: "e1021mxsla233329205",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Current Target Premium from Merger Offer Price per Share",
    id: "e1021mxsla233329206",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Deal Name",
    id: "e1021mxsla233329207",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Expected Merger Closing Date",
    id: "e1021mxsla233329208",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Expected Symbol Change Date",
    id: "e1021mxsla233329209",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Funding Summary",
    id: "e1021mxsla233329210",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Announced BCA Link",
    id: "e1021mxsla233329211",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest Investor Presentation Link",
    id: "e1021mxsla233329212",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest BCA Link",
    id: "e1021mxsla233329213",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest Merger Valuation",
    id: "e1021mxsla233329214",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest Merger Valuation Detail",
    id: "e1021mxsla233329215",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Latest Valuation Type",
    id: "e1021mxsla233329216",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Announcement Date",
    id: "e1021mxsla233329217",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Announcement Link",
    id: "e1021mxsla233329218",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Closing Announcement Link",
    id: "e1021mxsla233329219",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Closing Date",
    id: "e1021mxsla233329220",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Description",
    id: "e1021mxsla233329221",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Endgame",
    id: "e1021mxsla233329222",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Listing Type",
    id: "e1021mxsla233329223",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Announced Merger Offer Price per Share",
    id: "e1021mxsla233329224",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Announced Merger Offer Total Price",
    id: "e1021mxsla233329225",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Rumor Date",
    id: "e1021mxsla233329226",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Rumor Publication",
    id: "e1021mxsla233329227",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Rumor Source Link",
    id: "e1021mxsla233329228",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Stall Date",
    id: "e1021mxsla233329229",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Status",
    id: "e1021mxsla233329230",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
  },

  {
    name: "Merger Strategy",
    id: "e1021mxsla233329231",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Talks Failed Date",
    id: "e1021mxsla233329232",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Talks Failed Publication",
    id: "e1021mxsla233329233",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
  },

  {
    name: "Merger Talks Failed Source Link",
    id: "e1021mxsla233329234",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Talks Failed Status",
    id: "e1021mxsla233329235",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Type",
    id: "e1021mxsla233329236",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Merger Active Status",
    id: "e1021mxsla233329237",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Outside Date",
    id: "e1021mxsla233329238",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "PIPE Equity Proceeds",
    id: "e1021mxsla233329239",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
  },

  {
    name: "Post-Merger CIK",
    id: "e1021mxsla233329240",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Premium to Target Price at Deal Announcement",
    id: "e1021mxsla233329241",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Initial S-4 Filing Date",
    id: "e1021mxsla233329242",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
  },

  {
    name: "Target Merger Vote Date",
    id: "e1021mxsla233329243",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Target Prelim Merger Vote Proxy Link",
    id: "e1021mxsla233329244",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
  },

  {
    name: "Terminated Date",
    id: "e1021mxsla233329245",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Terminated Link",
    id: "e1021mxsla233329246",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Terminated Reason",
    id: "e1021mxsla233329247",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Terminated Source",
    id: "e1021mxsla233329248",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
  },

  {
    name: "Announced Investor Presentation Link",
    id: "e1021mxsla233329249",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
    Component: (
      text: string,
      onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ) => <TableText text={text} />,
  },

  {
    name: "Acquirer Percent Change Return from Merger Closing Date",
    id: "e1021mxsla233329250",
    filter: false,
    sort: false,
    ColumnComponent: (text: string) => <ColumnNames text={text} />,
  },
];

export const ColumnButton: React.FC<{
  name: string;
  color: "red" | "blue" | "green" | "indigo";
}> = ({ name, color }) => {
  return (
    <button
      className={
        "flex items-center p-2 cursor-pointer duration-200 ease-in text-white border-none rounded-md gap-x-2" +
        colorsMapper[color]
      }
    >
      <span>{name}</span>
      <Image src={FilterSvg} alt="svg" />
    </button>
  );
};

export const RowCheckbox: React.FC<{
  status: boolean;
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ status, onClick }) => {
  return (
    <input
      type="checkbox"
      checked={status}
      onChange={onClick}
      className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
    />
  );
};

export const PaginationButton: React.FC<{
  name: string;
  type: "previous" | "next";
}> = ({ name, type }) => {
  return (
    <a
      href="#"
      className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      {type === "previous" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 rtl:-scale-x-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 rtl:-scale-x-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      )}

      <span>{name}</span>
    </a>
  );
};

export const TableHeader: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  return (
    <th
      scope="col"
      className="py-3.5 px-4 w-full text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      {children}
    </th>
  );
};

export const TableHead: React.FC<{ type: "merger" | "company" }> = ({
  type,
}) => {
  return (
    <thead className="bg-gray-50 dark:bg-gray-800">
      <tr>
        {type === "company"
          ? headerNames.map((header) => {
              return (
                <TableHeader key={header.id}>
                  {header.ColumnComponent(header.name)}
                </TableHeader>
              );
            })
          : mergerTableHeaderName.map((header) => {
              return (
                <TableHeader key={header.id}>
                  {header.ColumnComponent(header.name)}
                </TableHeader>
              );
            })}
      </tr>
    </thead>
  );
};

export const ActionButton: React.FC<{
  name: string;
  color: "red" | "blue" | "green" | "indigo";
}> = ({ name, color }) => {
  return (
    <button
      className={
        "text-gray-500 transition-colors duration-200 p-2 border-none rounded-md cursor-pointer focus:outline-none" +
        colorsMapper[color]
      }
    >
      {name}
    </button>
  );
};

export const StatusChip: React.FC<{
  name: string;
  type: "checked" | "pending" | "wrong";
}> = ({ name, type }) => {
  return (
    <div
      className={
        "inline-flex items-center px-3 py-1 rounded-full gap-x-2" +
        colorsMapper[type]
      }
    >
      {type === "checked" ? (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3L4.5 8.5L2 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : type === "pending" ? (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10"
            stroke="#667085"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 3L3 9M3 3L9 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      <h2 className="text-sm font-normal">{name}</h2>
    </div>
  );
};

export const TableText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Tooltip title="Last Updated @Nick">
      <span className="text-sm text-gray-500 dark:text-gray-300">{text}</span>
    </Tooltip>
  );
};

export const TableData: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <td className="cursor-pointer px-4 py-4 text-sm whitespace-nowrap">
      {children}
    </td>
  );
};

export const CompanyProfile: React.FC = () => {
  return (
    <img
      className="object-cover w-8 h-8 rounded-full"
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      alt="company-logo"
    />
  );
};
