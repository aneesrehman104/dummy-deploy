export const TABLETITLESECTION = {
  desc: "desc",
  asc: "asc",
  company: "company",
  event: "event",
  status: "status",
  pricingDate: "pricingDate",
  priceRange: "priceRange",
  proceedsRange: "proceedsRange",
  symbol: "symbol",
  last30D: "last30D",
  price: "price",
  daily: "daily",
  vol: "vol",
  today: "today",
  marketCap: "marketCap",
};

export const FOOTER = {
  stayInTheKnow: "stay in the know",
  getFreeWeeklyUpdates: "Get free weekly updates",
  iAgreeToThe: "I agree to the ",
  termAndConditions: "Terms & Conditions ",
  ofSubscription: "of subscription",
  unlockPremiumFeatures: "unlock PREMIUM features",
  detailPremiumFeature:
    "Take advantage of all the power tools we have to offer including:",
  pointOne: "Access to all of the Pro Data",
  pointTwo: "Morning Newsletters and Activity Alerts",
  pointThree: "Export data to Excel/CSV with Pro subscription",
  pricing: "Pricing starts at $X.",
  subscribe: "SUBSCRIBE",
  unlockProAccess: "UNLOCK PRO ACCESS",
  portals: "Portals",
  support: "support",
  connectWithUs: "Connect with us",
  listingTrack: "ListingTrack",
  IPOs: "IPOs",
  mergers: "Mergers",
  SPACs: "SPACs",
  upgradePlan: "Upgrade plan",
  FAQs: "FAQs",
  policies: "Policies",
  contactUs: "Contact us",
  twitter: "Twitter",
  commonFi: "Common.fi",
  copyRights: "IPO and Public M&A Intel for All",
};

export const sidebarItem = [
  {
    name: "Home",
    pathname: "/home",
    id: "home",
    breadcrumb: "Home",
  },
  {
    name: "IPOs",
    pathname: "/ipos",
    id: "ipos",
    breadcrumb: "Home > IPOs",
    items: [
      {
        name: "HUB",
        pathname: "/ipos/hub",
        id: "ipos/hub",
        breadcrumb: "Home > IPOs > HUB",
      },
      {
        name: "STATS",
        pathname: "/ipos/stats",
        id: "ipos/stats",
        breadcrumb: "Home > IPOs > STATS",
      },
      {
        name: "PIPELINE",
        pathname: "/ipos/pipeline",
        id: "ipos/pipeline",
        breadcrumb: "Home > IPOs > PIPELINE",
      },
      {
        name: "NEWS",
        pathname: "/ipos/news",
        id: "ipos/news",
        breadcrumb: "Home > IPOs > NEWS",
      },
      {
        name: "SCREENERS",
        pathname: "/ipos/screeners",
        id: "ipos/screeners",
        breadcrumb: "Home > IPOs > SCREENERS",
      },
      {
        name: "LIST",
        pathname: "/ipos/list",
        id: "ipos/list",
        breadcrumb: "Home > IPOs > List",
      },
    ],
  },
  {
    name: "SPACs",
    pathname: "/spacs/hub",
    id: "/spacs/hub",
    breadcrumb: "Home > SPACs > HUB",
    items: [
      {
        name: "HUB",
        pathname: "/spacs/hub",
        id: "spacs/hub",
        breadcrumb: "Home > SPACs > HUB",
      },
      {
        name: "STATS",
        pathname: "/spacs/stats",
        id: "spacs/stats",
        breadcrumb: "Home > SPACs > STATS",
      },
      {
        name: "PIPELINE",
        pathname: "/spacs/pipeline",
        id: "spacs/pipeline",
        breadcrumb: "Home > SPACs > PIPELINE",
      },
      {
        name: "NEWS",
        pathname: "/spacs/news",
        id: "spacs/news",
        breadcrumb: "Home > SPACs > NEWS",
      },
      {
        name: "SCREENERS",
        pathname: "/spacs/screeners",
        id: "spacs/screeners",
        breadcrumb: "Home > SPACs > SCREENERS",
      },
      // {
      //   name: "SPAC CALENDAR",
      //   pathname: "/spacs/calendar",
      //   id: "spacs/calendar",
      //   breadcrumb: "Home > SPACs > SPAC CALENDAR",
      // },
      {
        name: "LIST",
        pathname: "/spacs/list",
        id: "spacs/list",
        breadcrumb: "Home > SPACs > List",
      },
    ],
  },
  {
    name: "MERGERS",
    pathname: "/mergers",
    id: "mergers",
    breadcrumb: "Home > MERGERS",

    items: [
      {
        name: "HUB",
        pathname: "/mergers/hub",
        id: "mergers/hub",
        breadcrumb: "Home > MERGERS > HUB",
      },
      {
        name: "STATS",
        pathname: "/mergers/stats",
        id: "mergers/stats",
        breadcrumb: "Home > MERGERS > STATS",
      },
      {
        name: "PIPELINE",
        pathname: "/mergers/pipeline",
        id: "mergers/pipeline",
        breadcrumb: "Home > MERGERS > PIPELINE",
      },
      {
        name: "NEWS",
        pathname: "/mergers/news",
        id: "mergers/news",
        breadcrumb: "Home > MERGERS > NEWS",
      },
      {
        name: "SCREENERS",
        pathname: "/mergers/screeners",
        id: "mergers/screeners",
        breadcrumb: "Home > MERGERS > SCREENERS",
      },
      {
        name: "LIST",
        pathname: "/mergers/list",
        id: "mergers/list",
        breadcrumb: "Home > MERGERS > List",
      },
    ],
  },
  {
    name: "Watchlist",
    pathname: "/watchlist",
    id: "watchlist",
    breadcrumb: "watchlist",
  },
];

export const navBarText = {
  signUp: "Sign up",
  signIn: "Sign in",
};

export const homeConstants = {
  title: "LISTINGTRACK",
  IOPS: "IPOS",
  SPACS: "SPACS",
  MERGERS: "MERGERS",
  details:
    "Lorem ipsum dolor sit amet consectetur. Turpis pretium ut elementum quisque parturie. Turpis pretium ut elementum quisque parturie.",
  COMPARISON: "COMPARISON",
  chartTitle: "2022 YTD Event Summary",
  IPOPipeline: {
    title: "IPO Pipeline",
    Company: "Company",
    Event: "Event",
    Status: "Status",
    EstPricingDate: "Est. Pricing Date",
    PriceRange: "Price/range",
    ProceedsRange: "Proceeds/range",
  },
  MergersPipeline: {
    title: "Merger Pipeline",
  },
  AggrecatedMiniTable: {
    title: "Aggregated Mini-tables",
    ListingTrack: "ListingTrack",
    MERGERs: "MERGERs (>$2B)",
    Livemergers: "Live mergers",
    withspacs: "with spacs",
    SANSspacs: "SANS spacs",
    completed: "completed",
    mergers: "mergers",
    Totalactive: "Total active",
    Searching: "Searching",
    Live: "Live",
    IPOs: "IPOs",
    IPOSWITHSPACS: "IPOS WITH SPACS",
    MERGERSWITHSPACS: "MERGERS WITH SPACS",
    MERGERSSANSSPACS: "MERGERS SANS SPACS",
    IPOSSANSSPACS: "IPOS SANS SPACS",
    YTD: "YTD",
    AVGRETURN: "AVG. RETURN",
    SPACs: "SPACs",
    ShowSPACs: "Show SPACs",
  },
};

export const weekName = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const PreDealSpacScreener = [
  {
    name: "Company",
    key: "company",
    pro: false,
  },
  {
    name: "Symbol",
    key: "symbol",
    pro: false,
  },
  {
    name: "Listing Method",
    key: "price",
    pro: false,
  },
  {
    name: "Listing Status",
    key: "status",
    pro: false,
  },
  {
    name: "Exchange",
    key: "daily",
    pro: false,
  },
  {
    name: "Market Cap",
    key: "vol",
    pro: false,
  },
  {
    name: "Region",
    key: "Region",
    pro: true,
  },
  {
    name: "Sector",
    key: "Sector",
    pro: true,
  },
  {
    name: "Industry",
    key: "Industry",
    pro: true,
  },
  {
    name: "HQ City, Country",
    key: "HQCityCountry",
    pro: true,
  },
  {
    name: "Employees",
    key: "Employees",
    pro: true,
  },
  {
    name: "IPO Status",
    key: "IPOStatus",
    pro: false,
  },
  {
    name: "IPO Type",
    key: "IPOType",
    pro: false,
  },
  {
    name: "IPO Price",
    key: "IPOPrice",
    pro: false,
  },
  {
    name: "IPO Date",
    key: "IPODate",
    pro: false,
  },
  {
    name: "IPO Proceeds",
    key: "IPOProceeds",
    pro: false,
  },
  {
    name: "IPO Underwriters",
    key: "IPOUnderwriters",
    pro: false,
  },
  {
    name: "Expected IPO Date",
    key: "ExpectedIPODate",
    pro: false,
  },
  {
    name: "ExpectedIPOShares",
    key: "ExpectedIPOShares",
    pro: false,
  },
  {
    name: "Expected IPO Price Range",
    key: "ExpectedIPOPriceRange",
    pro: false,
  },
  {
    name: "Expected IPO Valuation",
    key: "ExpectedIPOValuation",
    pro: false,
  },
  {
    name: "IPO Market Cap",
    key: "IPOMarketCap",
    pro: true,
  },
  {
    name: "IPO S-1 Registration Link",
    key: "IPOS1RegistrationLink",
    pro: true,
  },
  {
    name: "IPO Filed Date",
    key: "IPOFiledDate",
    pro: true,
  },
  {
    name: "Registration Domicile",
    key: "RegistrationDomicile",
    pro: true,
  },
  {
    name: "S-1 Withdrawal Date",
    key: "S1WithdrawalDate",
    pro: true,
  },
  {
    name: "IPO Rumor Date",
    key: "IPORumorDate",
    pro: true,
  },
  {
    name: "IPO Rumor Publication",
    key: "IPORumorPublication",
    pro: true,
  },
  {
    name: "IPO Rumor Source",
    key: "IPORumorSource",
    pro: true,
  },
  {
    name: "IPO Stall Date",
    key: "IPOStallDate",
    pro: true,
  },
  {
    name: "IPO Stall Publication",
    key: "IPOStallPublication",
    pro: true,
  },
  {
    name: "IPO Stall Source",
    key: "IPOStallSource",
    pro: true,
  },
  {
    name: "Latest Price",
    key: "LatestPrice",
    pro: false,
  },
  {
    name: "1-day Price Chg %",
    key: "1dayPriceChg",
    pro: false,
  },
  {
    name: "Outstanding Shares",
    key: "OutstandingShares",
    pro: false,
  },
  {
    name: "52-Week High",
    key: "52WeekHigh",
    pro: false,
  },
  {
    name: "52-Week Low",
    key: "52WeekLow",
    pro: false,
  },
  {
    name: "52-Week High Percent Change",
    key: "52WeekHighPercentChange",
    pro: false,
  },
  {
    name: "52-Week Low Percent Change",
    key: "52WeekLowPercentChange",
    pro: false,
  },
  {
    name: "Volume",
    key: "Volume",
    pro: false,
  },
  {
    name: "Average 30 Day Volume",
    key: "Average30DayVolume",
    pro: false,
  },
  {
    name: "YTD Percent Change",
    key: "YTDPercentChange",
    pro: false,
  },
  {
    name: "Optionable",
    key: "Optionable",
    pro: false,
  },
  {
    name: "1-week Percent Change ",
    key: "1weekPercentChange ",
    pro: true,
  },
  {
    name: "30-day Change Percent",
    key: "30dayChangePercent",
    pro: true,
  },
  {
    name: "1-month Percent Change",
    key: "1monthPercentChange",
    pro: true,
  },
  {
    name: "3-month Percent Change",
    key: "3monthPercentChange",
    pro: true,
  },
  {
    name: "1-year Percent Change ",
    key: "1yearPercentChange ",
    pro: true,
  },
  {
    name: "Warrant Symbol",
    key: "WarrantSymbol",
    pro: false,
  },
  {
    name: "Latest Warrant Price",
    key: "LatestWarrantPrice",
    pro: false,
  },
  {
    name: "Warrant Price Change Previous",
    key: "WarrantPriceChangePrevious",
    pro: false,
  },
  {
    name: "SPAC Warrant Intrinsic Value",
    key: "SPACWarrantIntrinsicValue",
    pro: false,
  },
  {
    name: "Warrant 52-Week High",
    key: "Warrant52WeekHigh",
    pro: false,
  },
  {
    name: "Warrant 52-Week Low",
    key: "Warrant52WeekLow",
    pro: false,
  },
  {
    name: "Warrant Percent Change 52-Week High",
    key: "WarrantPercentChange52WeekHigh",
    pro: false,
  },
  {
    name: "Warrant Percent Change 52-Week Low",
    key: "WarrantPercentChange52WeekLow",
    pro: false,
  },
  {
    name: "Warrant Volume",
    key: "WarrantVolume",
    pro: false,
  },
  {
    name: "Warrant Average 30 Day Volume",
    key: "WarrantAverage30DayVolume",
    pro: false,
  },
  {
    name: "Warrant Return YTD",
    key: "WarrantReturnYTD",
    pro: false,
  },
  {
    name: "Unit Symbol",
    key: "UnitSymbol",
    pro: false,
  },
  {
    name: "Latest Unit Price",
    key: "LatestUnitPrice",
    pro: false,
  },
  {
    name: "Unit Price Change Previous Day",
    key: "UnitPriceChangePreviousDay",
    pro: false,
  },
  {
    name: "Unit Outstanding Shares",
    key: "UnitOutstandingShares",
    pro: false,
  },
  {
    name: "Unit 52-Week High",
    key: "Unit52WeekHigh",
    pro: false,
  },
  {
    name: "Unit 52-Week Low",
    key: "Unit52WeekLow",
    pro: false,
  },
  {
    name: "Unit 52-Week High Percent Change",
    key: "Unit52WeekHighPercentChange",
    pro: false,
  },
  {
    name: "Unit 52-Week Low Percent Change",
    key: "Unit52WeekLowPercentChange",
    pro: false,
  },
  {
    name: "Unit Volume",
    key: "UnitVolume",
    pro: false,
  },
  {
    name: "Unit YTD Percent Change",
    key: "UnitYTDPercentChange",
    pro: false,
  },
  {
    name: "Warrant Percent Change 1-week",
    key: "WarrantPercentChange1week",
    pro: true,
  },
  {
    name: "Warrant Percent Change 1-month",
    key: "WarrantPercentChange1month",
    pro: true,
  },
  {
    name: "Warrant Percent Change 1-year",
    key: "WarrantPercentChange1year",
    pro: true,
  },
  {
    name: "Unit 1-month Percent Change",
    key: "Unit1monthPercentChange",
    pro: true,
  },
  {
    name: "SPAC Progress Status",
    key: "SPACProgressStatus",
    pro: false,
  },
  {
    name: "Desired Target Focus",
    key: "DesiredTargetFocus",
    pro: false,
  },
  {
    name: "Prominent Leaders",
    key: "ProminentLeaders",
    pro: false,
  },
  {
    name: "Unit and Warrant Conversion Details",
    key: "UnitandWarrantConversionDetails",
    pro: false,
  },
  {
    name: "Split Date",
    key: "SplitDate",
    pro: false,
  },
  {
    name: "Initial SPAC Deadline Date",
    key: "InitialSPACDeadlineDate",
    pro: false,
  },
  {
    name: "Est. SPAC Deadline Date",
    key: "EstSPACDeadlineDate",
    pro: false,
  },
  {
    name: "Time Progress to SPAC Deadline",
    key: "TimeProgresstoSPACDeadline",
    pro: false,
  },
  {
    name: "Extension Details",
    key: "ExtensionDetails",
    pro: false,
  },
  {
    name: "Latest SPAC Extension Shareholder Vote Date",
    key: "LatestSPACExtensionShareholderVoteDate",
    pro: false,
  },
  {
    name: "DespacCloseDate",
    key: "DespacCloseDate",
    pro: false,
  },
  {
    name: "Post-SPAC Merger Estimated Warrant Exercisable Date",
    key: "PostSPACMergerEstimatedWarrantExercisableDate",
    pro: false,
  },
  {
    name: "Post-SPAC Merger Warrant Exercise Deadline Date",
    key: "PostSPACMergerWarrantExerciseDeadlineDate",
    pro: false,
  },
  {
    name: "Latest SPAC Extension Proxy Link",
    key: "LatestSPACExtensionProxyLink",
    pro: true,
  },
  {
    name: "SPAC Latest Extension Vote Redemption Deadline Date",
    key: "SPACLatestExtensionVoteRedemptionDeadlineDate",
    pro: true,
  },
  {
    name: "SPAC Latest Extension Vote Ex-Redemption Date",
    key: "SPACLatestExtensionVoteExRedemptionDate",
    pro: true,
  },
  {
    name: "Merger Vote Redemption Deadline Date",
    key: "MergerVoteRedemptionDeadlineDate",
    pro: true,
  },
  {
    name: "Merger Vote Ex-Redemption Date",
    key: "MergerVoteExRedemptionDate",
    pro: true,
  },
  {
    name: "Latest Post-SPAC Merger Share Registration S-1 Link",
    key: "LatestPostSPACMergerShareRegistrationS1Link",
    pro: true,
  },
  {
    name: "Post-SPAC Merger Share Registration Effective Date",
    key: "PostSPACMergerShareRegistrationEffectiveDate",
    pro: true,
  },
  {
    name: "Liquidation Date",
    key: "LiquidationDate",
    pro: true,
  },
  {
    name: "Liquidation Redemption Price",
    key: "LiquidationRedemptionPrice",
    pro: true,
  },
  {
    name: "Liquidation Announcement Link",
    key: "LiquidationAnnouncementLink",
    pro: true,
  },
  {
    name: "Liquidation Trust Value",
    key: "LiquidationTrustValue",
    pro: true,
  },
  {
    name: "Est. Trust Value",
    key: "EstTrustValue",
    pro: false,
  },
  {
    name: "Trust per Share",
    key: "TrustperShare",
    pro: false,
  },
  {
    name: "Trust Per Share Date",
    key: "TrustPerShareDate",
    pro: false,
  },
  {
    name: "Est. Shares Remaining Pre-Close (M)",
    key: "EstSharesRemainingPreCloseM",
    pro: false,
  },
  {
    name: "Est. Shares Remaining Post-Close (M)",
    key: "EstSharesRemainingPostCloseM",
    pro: false,
  },
  {
    name: "Trust P.S. at IPO",
    key: "TrustPSatIPO",
    pro: true,
  },
  {
    name: "Trust per Share Source",
    key: "TrustperShareSource",
    pro: true,
  },
  {
    name: "Trading Premium/Discount",
    key: "TradingPremiumDiscount",
    pro: true,
  },
  {
    name: "SPAC Shares Redeemed at Merger Vote (%)",
    key: "SPACSharesRedeemedatMergerVote",
    pro: true,
  },
  {
    name: "SPAC Shares Redeemed Lifetime (%)",
    key: "SPACSharesRedeemedLifetime",
    pro: true,
  },
];

export const CompanyProfile = [
  {
    name: "Company",
    key: "company",
    pro: false,
  },
  {
    name: "Symbol",
    key: "symbol",
    pro: false,
  },
  {
    name: "Listing Method",
    key: "price",
    pro: false,
  },
  {
    name: "Listing Status",
    key: "status",
    pro: false,
  },
  {
    name: "Exchange",
    key: "daily",
    pro: false,
  },
  {
    name: "Market Cap",
    key: "vol",
    pro: false,
  },
  {
    name: "Region",
    key: "Region",
    pro: true,
  },
  {
    name: "Sector",
    key: "Sector",
    pro: true,
  },
  {
    name: "Industry",
    key: "Industry",
    pro: true,
  },
  {
    name: "HQ City, Country",
    key: "HQCityCountry",
    pro: true,
  },
  {
    name: "Employees",
    key: "Employees",
    pro: true,
  },
];
export const IPOProfile = [
  {
    name: "IPO Status",
    key: "IPOStatus",
    pro: false,
  },
  {
    name: "IPO Type",
    key: "IPOType",
    pro: false,
  },
  {
    name: "IPO Price",
    key: "IPOPrice",
    pro: false,
  },
  {
    name: "IPO Date",
    key: "IPODate",
    pro: false,
  },
  {
    name: "IPO Proceeds",
    key: "IPOProceeds",
    pro: false,
  },
  {
    name: "IPO Underwriters",
    key: "IPOUnderwriters",
    pro: false,
  },
  {
    name: "Expected IPO Date",
    key: "ExpectedIPODate",
    pro: false,
  },
  {
    name: "ExpectedIPOShares",
    key: "ExpectedIPOShares",
    pro: false,
  },
  {
    name: "Expected IPO Price Range",
    key: "ExpectedIPOPriceRange",
    pro: false,
  },
  {
    name: "Expected IPO Valuation",
    key: "ExpectedIPOValuation",
    pro: false,
  },
  {
    name: "IPO Market Cap",
    key: "IPOMarketCap",
    pro: true,
  },
  {
    name: "IPO S-1 Registration Link",
    key: "IPOS1RegistrationLink",
    pro: true,
  },
  {
    name: "IPO Filed Date",
    key: "IPOFiledDate",
    pro: true,
  },
  {
    name: "Registration Domicile",
    key: "RegistrationDomicile",
    pro: true,
  },
  {
    name: "S-1 Withdrawal Date",
    key: "S1WithdrawalDate",
    pro: true,
  },
  {
    name: "IPO Rumor Date",
    key: "IPORumorDate",
    pro: true,
  },
  {
    name: "IPO Rumor Publication",
    key: "IPORumorPublication",
    pro: true,
  },
  {
    name: "IPO Rumor Source",
    key: "IPORumorSource",
    pro: true,
  },
  {
    name: "IPO Stall Date",
    key: "IPOStallDate",
    pro: true,
  },
  {
    name: "IPO Stall Publication",
    key: "IPOStallPublication",
    pro: true,
  },
  {
    name: "IPO Stall Source",
    key: "IPOStallSource",
    pro: true,
  },
];

export const Trading = [
  {
    name: "Latest Price",
    key: "LatestPrice",
    pro: false,
  },
  {
    name: "1-day Price Chg %",
    key: "1dayPriceChg",
    pro: false,
  },
  {
    name: "Outstanding Shares",
    key: "OutstandingShares",
    pro: false,
  },
  {
    name: "52-Week High",
    key: "52WeekHigh",
    pro: false,
  },
  {
    name: "52-Week Low",
    key: "52WeekLow",
    pro: false,
  },
  {
    name: "52-Week High Percent Change",
    key: "52WeekHighPercentChange",
    pro: false,
  },
  {
    name: "52-Week Low Percent Change",
    key: "52WeekLowPercentChange",
    pro: false,
  },
  {
    name: "Volume",
    key: "Volume",
    pro: false,
  },
  {
    name: "Average 30 Day Volume",
    key: "Average30DayVolume",
    pro: false,
  },
  {
    name: "YTD Percent Change",
    key: "YTDPercentChange",
    pro: false,
  },
  {
    name: "Optionable",
    key: "Optionable",
    pro: false,
  },
  {
    name: "1-week Percent Change ",
    key: "1weekPercentChange ",
    pro: true,
  },
  {
    name: "30-day Change Percent",
    key: "30dayChangePercent",
    pro: true,
  },
  {
    name: "1-month Percent Change",
    key: "1monthPercentChange",
    pro: true,
  },
  {
    name: "3-month Percent Change",
    key: "3monthPercentChange",
    pro: true,
  },
  {
    name: "1-year Percent Change ",
    key: "1yearPercentChange ",
    pro: true,
  },
];
export const SPACTrading = [
  {
    name: "Warrant Symbol",
    key: "WarrantSymbol",
    pro: false,
  },
  {
    name: "Latest Warrant Price",
    key: "LatestWarrantPrice",
    pro: false,
  },
  {
    name: "Warrant Price Change Previous",
    key: "WarrantPriceChangePrevious",
    pro: false,
  },
  {
    name: "SPAC Warrant Intrinsic Value",
    key: "SPACWarrantIntrinsicValue",
    pro: false,
  },
  {
    name: "Warrant 52-Week High",
    key: "Warrant52WeekHigh",
    pro: false,
  },
  {
    name: "Warrant 52-Week Low",
    key: "Warrant52WeekLow",
    pro: false,
  },
  {
    name: "Warrant Percent Change 52-Week High",
    key: "WarrantPercentChange52WeekHigh",
    pro: false,
  },
  {
    name: "Warrant Percent Change 52-Week Low",
    key: "WarrantPercentChange52WeekLow",
    pro: false,
  },
  {
    name: "Warrant Volume",
    key: "WarrantVolume",
    pro: false,
  },
  {
    name: "Warrant Average 30 Day Volume",
    key: "WarrantAverage30DayVolume",
    pro: false,
  },
  {
    name: "Warrant Return YTD",
    key: "WarrantReturnYTD",
    pro: false,
  },
  {
    name: "Unit Symbol",
    key: "UnitSymbol",
    pro: false,
  },
  {
    name: "Latest Unit Price",
    key: "LatestUnitPrice",
    pro: false,
  },
  {
    name: "Unit Price Change Previous Day",
    key: "UnitPriceChangePreviousDay",
    pro: false,
  },
  {
    name: "Unit Outstanding Shares",
    key: "UnitOutstandingShares",
    pro: false,
  },
  {
    name: "Unit 52-Week High",
    key: "Unit52WeekHigh",
    pro: false,
  },
  {
    name: "Unit 52-Week Low",
    key: "Unit52WeekLow",
    pro: false,
  },
  {
    name: "Unit 52-Week High Percent Change",
    key: "Unit52WeekHighPercentChange",
    pro: false,
  },
  {
    name: "Unit 52-Week Low Percent Change",
    key: "Unit52WeekLowPercentChange",
    pro: false,
  },
  {
    name: "Unit Volume",
    key: "UnitVolume",
    pro: false,
  },
  {
    name: "Unit YTD Percent Change",
    key: "UnitYTDPercentChange",
    pro: false,
  },
  {
    name: "Warrant Percent Change 1-week",
    key: "WarrantPercentChange1week",
    pro: true,
  },
  {
    name: "Warrant Percent Change 1-month",
    key: "WarrantPercentChange1month",
    pro: true,
  },
  {
    name: "Warrant Percent Change 1-year",
    key: "WarrantPercentChange1year",
    pro: true,
  },
  {
    name: "Unit 1-month Percent Change",
    key: "Unit1monthPercentChange",
    pro: true,
  },
];

export const SPACProfile = [
  {
    name: "SPAC Progress Status",
    key: "SPACProgressStatus",
    pro: false,
  },
  {
    name: "Desired Target Focus",
    key: "DesiredTargetFocus",
    pro: false,
  },
  {
    name: "Prominent Leaders",
    key: "ProminentLeaders",
    pro: false,
  },
  {
    name: "Unit and Warrant Conversion Details",
    key: "UnitandWarrantConversionDetails",
    pro: false,
  },
  {
    name: "Split Date",
    key: "SplitDate",
    pro: false,
  },
  {
    name: "Initial SPAC Deadline Date",
    key: "InitialSPACDeadlineDate",
    pro: false,
  },
  {
    name: "Est. SPAC Deadline Date",
    key: "EstSPACDeadlineDate",
    pro: false,
  },
  {
    name: "Time Progress to SPAC Deadline",
    key: "TimeProgresstoSPACDeadline",
    pro: false,
  },
  {
    name: "Extension Details",
    key: "ExtensionDetails",
    pro: false,
  },
  {
    name: "Latest SPAC Extension Shareholder Vote Date",
    key: "LatestSPACExtensionShareholderVoteDate",
    pro: false,
  },
  {
    name: "DespacCloseDate",
    key: "DespacCloseDate",
    pro: false,
  },
  {
    name: "Post-SPAC Merger Estimated Warrant Exercisable Date",
    key: "PostSPACMergerEstimatedWarrantExercisableDate",
    pro: false,
  },
  {
    name: "Post-SPAC Merger Warrant Exercise Deadline Date",
    key: "PostSPACMergerWarrantExerciseDeadlineDate",
    pro: false,
  },
  {
    name: "Latest SPAC Extension Proxy Link",
    key: "LatestSPACExtensionProxyLink",
    pro: true,
  },
  {
    name: "SPAC Latest Extension Vote Redemption Deadline Date",
    key: "SPACLatestExtensionVoteRedemptionDeadlineDate",
    pro: true,
  },
  {
    name: "SPAC Latest Extension Vote Ex-Redemption Date",
    key: "SPACLatestExtensionVoteExRedemptionDate",
    pro: true,
  },
  {
    name: "Merger Vote Redemption Deadline Date",
    key: "MergerVoteRedemptionDeadlineDate",
    pro: true,
  },
  {
    name: "Merger Vote Ex-Redemption Date",
    key: "MergerVoteExRedemptionDate",
    pro: true,
  },
  {
    name: "Latest Post-SPAC Merger Share Registration S-1 Link",
    key: "LatestPostSPACMergerShareRegistrationS1Link",
    pro: true,
  },
  {
    name: "Post-SPAC Merger Share Registration Effective Date",
    key: "PostSPACMergerShareRegistrationEffectiveDate",
    pro: true,
  },
  {
    name: "Liquidation Date",
    key: "LiquidationDate",
    pro: true,
  },
  {
    name: "Liquidation Redemption Price",
    key: "LiquidationRedemptionPrice",
    pro: true,
  },
  {
    name: "Liquidation Announcement Link",
    key: "LiquidationAnnouncementLink",
    pro: true,
  },
  {
    name: "Liquidation Trust Value",
    key: "LiquidationTrustValue",
    pro: true,
  },
];
export const TrustRedemptions = [
  {
    name: "Est. Trust Value",
    key: "EstTrustValue",
    pro: false,
  },
  {
    name: "Trust per Share",
    key: "TrustperShare",
    pro: false,
  },
  {
    name: "Trust Per Share Date",
    key: "TrustPerShareDate",
    pro: false,
  },
  {
    name: "Est. Shares Remaining Pre-Close (M)",
    key: "EstSharesRemainingPreCloseM",
    pro: false,
  },
  {
    name: "Est. Shares Remaining Post-Close (M)",
    key: "EstSharesRemainingPostCloseM",
    pro: false,
  },
  {
    name: "Trust P.S. at IPO",
    key: "TrustPSatIPO",
    pro: true,
  },
  {
    name: "Trust per Share Source",
    key: "TrustperShareSource",
    pro: true,
  },
  {
    name: "Trading Premium/Discount",
    key: "TradingPremiumDiscount",
    pro: true,
  },
  {
    name: "SPAC Shares Redeemed at Merger Vote (%)",
    key: "SPACSharesRedeemedatMergerVote",
    pro: true,
  },
  {
    name: "SPAC Shares Redeemed Lifetime (%)",
    key: "SPACSharesRedeemedLifetime",
    pro: true,
  },
];

export const AnnouncedSPACMergersScreener = [
  {
    name: "Deal Name",
    key: "DealName",
    pro: false,
  },
  {
    name: "Acquirer Company Name",
    key: "AcquirerCompanyName",
    pro: false,
  },
  {
    name: "Acquirer Symbol",
    key: "AcquirerSymbol",
    pro: false,
  },
  {
    name: "Acquirer Listing Status",
    key: "AcquirerListingStatus",
    pro: false,
  },
  {
    name: "Target Company Name",
    key: "TargetCompanyName",
    pro: false,
  },
  {
    name: "Target Symbol",
    key: "TargetSymbol",
    pro: false,
  },
  {
    name: "Merger Announced Date",
    key: "MergerAnnouncedDate",
    pro: false,
  },
  {
    name: "Deal Valuation",
    key: "DealValuation",
    pro: false,
  },
  {
    name: "Price per Share",
    key: "PriceperShare",
    pro: false,
  },
  {
    name: "Current Premium",
    key: "CurrentPremium",
    pro: false,
  },
  {
    name: "PIPE Equity Proceeds",
    key: "PIPEEquityProceeds",
    pro: false,
  },
  {
    name: "Announced PIPE Investors",
    key: "AnnouncedPIPEInvestors",
    pro: false,
  },
  {
    name: "Target Merger Vote Date",
    key: "TargetMergerVoteDate",
    pro: false,
  },
  {
    name: "Closing Date",
    key: "ClosingDate",
    pro: false,
  },
  {
    name: "Merger Type",
    key: "MergerType",
    pro: true,
  },
  {
    name: "Target Listing Status",
    key: "TargetListingStatus",
    pro: true,
  },
  {
    name: "Merger Announcement Link",
    key: "MergerAnnouncementLink",
    pro: true,
  },
  {
    name: "Investor Presentation Link",
    key: "InvestorPresentationLink",
    pro: true,
  },
  {
    name: "BCA Link",
    key: "BCALink",
    pro: true,
  },
  {
    name: "Deal Valuation Summary",
    key: "DealValuationSummary",
    pro: true,
  },
  {
    name: "Premium at Deal Announcement",
    key: "PremiumatDealAnnouncement",
    pro: true,
  },
  {
    name: "Funding Summary",
    key: "FundingSummary",
    pro: true,
  },
  {
    name: "S-4 Link",
    key: "S4Link",
    pro: true,
  },
  {
    name: "Expected Closing Date",
    key: "ExpectedClosingDate",
    pro: true,
  },
  {
    name: "Target Prelim Merger Vote Proxy Link",
    key: "TargetPrelimMergerVoteProxyLink",
    pro: true,
  },
  {
    name: "Target Definitive Merger Vote Link",
    key: "TargetDefinitiveMergerVoteLink",
    pro: true,
  },
  {
    name: "Outside Date",
    key: "OutsideDate",
    pro: true,
  },
  {
    name: "Closing Announcement Link",
    key: "ClosingAnnouncementLink",
    pro: true,
  },
  {
    name: "Post-Merger SEC Filings Link",
    key: "PostMergerSECFilingsLink",
    pro: true,
  },
  {
    name: "Terminated Date",
    key: "TerminatedDate",
    pro: true,
  },
  {
    name: "Terminated Source Link",
    key: "TerminatedSourceLink",
    pro: true,
  },
  {
    name: "Merger Rumor Date",
    key: "MergerRumorDate",
    pro: true,
  },
  {
    name: "Merger Rumor Publication",
    key: "MergerRumorPublication",
    pro: true,
  },
  {
    name: "Merger Rumor Source",
    key: "MergerRumorSource",
    pro: true,
  },
  {
    name: "Merger Talks Failed Date",
    key: "MergerTalksFailedDate",
    pro: true,
  },
  {
    name: "Merger Talks Failed Publication",
    key: "MergerTalksFailedPublication",
    pro: true,
  },
  {
    name: "Merger Talks Failed Source",
    key: "MergerTalksFailedSource",
    pro: true,
  },
];


export const DealProfile = [
  {
    name: "Deal Name",
    key: "DealName",
    pro: false,
  },
  {
    name: "Acquirer Company Name",
    key: "AcquirerCompanyName",
    pro: false,
  },
  {
    name: "Acquirer Symbol",
    key: "AcquirerSymbol",
    pro: false,
  },
  {
    name: "Acquirer Listing Status",
    key: "AcquirerListingStatus",
    pro: false,
  },
  {
    name: "Target Company Name",
    key: "TargetCompanyName",
    pro: false,
  },
  {
    name: "Target Symbol",
    key: "TargetSymbol",
    pro: false,
  },
  {
    name: "Merger Announced Date",
    key: "MergerAnnouncedDate",
    pro: false,
  },
  {
    name: "Deal Valuation",
    key: "DealValuation",
    pro: false,
  },
  {
    name: "Price per Share",
    key: "PriceperShare",
    pro: false,
  },
  {
    name: "Current Premium",
    key: "CurrentPremium",
    pro: false,
  },
  {
    name: "PIPE Equity Proceeds",
    key: "PIPEEquityProceeds",
    pro: false,
  },
  {
    name: "Announced PIPE Investors",
    key: "AnnouncedPIPEInvestors",
    pro: false,
  },
  {
    name: "Target Merger Vote Date",
    key: "TargetMergerVoteDate",
    pro: false,
  },
  {
    name: "Closing Date",
    key: "ClosingDate",
    pro: false,
  },
  {
    name: "Merger Type",
    key: "MergerType",
    pro: true,
  },
  {
    name: "Target Listing Status",
    key: "TargetListingStatus",
    pro: true,
  },
  {
    name: "Merger Announcement Link",
    key: "MergerAnnouncementLink",
    pro: true,
  },
  {
    name: "Investor Presentation Link",
    key: "InvestorPresentationLink",
    pro: true,
  },
  {
    name: "BCA Link",
    key: "BCALink",
    pro: true,
  },
  {
    name: "Deal Valuation Summary",
    key: "DealValuationSummary",
    pro: true,
  },
  {
    name: "Premium at Deal Announcement",
    key: "PremiumatDealAnnouncement",
    pro: true,
  },
  {
    name: "Funding Summary",
    key: "FundingSummary",
    pro: true,
  },
  {
    name: "S-4 Link",
    key: "S4Link",
    pro: true,
  },
  {
    name: "Expected Closing Date",
    key: "ExpectedClosingDate",
    pro: true,
  },
  {
    name: "Target Prelim Merger Vote Proxy Link",
    key: "TargetPrelimMergerVoteProxyLink",
    pro: true,
  },
  {
    name: "Target Definitive Merger Vote Link",
    key: "TargetDefinitiveMergerVoteLink",
    pro: true,
  },
  {
    name: "Outside Date",
    key: "OutsideDate",
    pro: true,
  },
  {
    name: "Closing Announcement Link",
    key: "ClosingAnnouncementLink",
    pro: true,
  },
  {
    name: "Post-Merger SEC Filings Link",
    key: "PostMergerSECFilingsLink",
    pro: true,
  },

];

export const RumorsTerminations = [
  {
    name: "Terminated Date",
    key: "TerminatedDate",
    pro: true,
  },
  {
    name: "Terminated Source Link",
    key: "TerminatedSourceLink",
    pro: true,
  },
  {
    name: "Merger Rumor Date",
    key: "MergerRumorDate",
    pro: true,
  },
  {
    name: "Merger Rumor Publication",
    key: "MergerRumorPublication",
    pro: true,
  },
  {
    name: "Merger Rumor Source",
    key: "MergerRumorSource",
    pro: true,
  },
  {
    name: "Merger Talks Failed Date",
    key: "MergerTalksFailedDate",
    pro: true,
  },
  {
    name: "Merger Talks Failed Publication",
    key: "MergerTalksFailedPublication",
    pro: true,
  },
  {
    name: "Merger Talks Failed Source",
    key: "MergerTalksFailedSource",
    pro: true,
  },
]

export const DeSPACScreener = [
  {
    name: "Company",
    key: "company",
    pro: false,
  },
  {
    name: "Symbol",
    key: "symbol",
    pro: false,
  },
  {
    name: "Listing Method",
    key: "price",
    pro: false,
  },
  {
    name: "Listing Status",
    key: "status",
    pro: false,
  },
  {
    name: "Exchange",
    key: "daily",
    pro: false,
  },
  {
    name: "Market Cap",
    key: "vol",
    pro: false,
  },
  {
    name: "Region",
    key: "Region",
    pro: true,
  },
  {
    name: "Sector",
    key: "Sector",
    pro: true,
  },
  {
    name: "Industry",
    key: "Industry",
    pro: true,
  },
  {
    name: "HQ City, Country",
    key: "HQCityCountry",
    pro: true,
  },
  {
    name: "Employees",
    key: "Employees",
    pro: true,
  },
  {
    name: "IPO Status",
    key: "IPOStatus",
    pro: false,
  },
  {
    name: "IPO Type",
    key: "IPOType",
    pro: false,
  },
  {
    name: "IPO Price",
    key: "IPOPrice",
    pro: false,
  },
  {
    name: "IPO Date",
    key: "IPODate",
    pro: false,
  },
  {
    name: "IPO Proceeds",
    key: "IPOProceeds",
    pro: false,
  },
  {
    name: "IPO Underwriters",
    key: "IPOUnderwriters",
    pro: false,
  },
  {
    name: "Expected IPO Date",
    key: "ExpectedIPODate",
    pro: false,
  },
  {
    name: "ExpectedIPOShares",
    key: "ExpectedIPOShares",
    pro: false,
  },
  {
    name: "Expected IPO Price Range",
    key: "ExpectedIPOPriceRange",
    pro: false,
  },
  {
    name: "Expected IPO Valuation",
    key: "ExpectedIPOValuation",
    pro: false,
  },
  {
    name: "IPO Market Cap",
    key: "IPOMarketCap",
    pro: true,
  },
  {
    name: "IPO S-1 Registration Link",
    key: "IPOS1RegistrationLink",
    pro: true,
  },
  {
    name: "IPO Filed Date",
    key: "IPOFiledDate",
    pro: true,
  },
  {
    name: "Registration Domicile",
    key: "RegistrationDomicile",
    pro: true,
  },
  {
    name: "S-1 Withdrawal Date",
    key: "S1WithdrawalDate",
    pro: true,
  },
  {
    name: "IPO Rumor Date",
    key: "IPORumorDate",
    pro: true,
  },
  {
    name: "IPO Rumor Publication",
    key: "IPORumorPublication",
    pro: true,
  },
  {
    name: "IPO Rumor Source",
    key: "IPORumorSource",
    pro: true,
  },
  {
    name: "IPO Stall Date",
    key: "IPOStallDate",
    pro: true,
  },
  {
    name: "IPO Stall Publication",
    key: "IPOStallPublication",
    pro: true,
  },
  {
    name: "IPO Stall Source",
    key: "IPOStallSource",
    pro: true,
  },
  {
    name: "Latest Price",
    key: "LatestPrice",
    pro: false,
  },
  {
    name: "1-day Price Chg %",
    key: "1dayPriceChg",
    pro: false,
  },
  {
    name: "Outstanding Shares",
    key: "OutstandingShares",
    pro: false,
  },
  {
    name: "52-Week High",
    key: "52WeekHigh",
    pro: false,
  },
  {
    name: "52-Week Low",
    key: "52WeekLow",
    pro: false,
  },
  {
    name: "52-Week High Percent Change",
    key: "52WeekHighPercentChange",
    pro: false,
  },
  {
    name: "52-Week Low Percent Change",
    key: "52WeekLowPercentChange",
    pro: false,
  },
  {
    name: "Volume",
    key: "Volume",
    pro: false,
  },
  {
    name: "Average 30 Day Volume",
    key: "Average30DayVolume",
    pro: false,
  },
  {
    name: "YTD Percent Change",
    key: "YTDPercentChange",
    pro: false,
  },
  {
    name: "Optionable",
    key: "Optionable",
    pro: false,
  },
  {
    name: "1-week Percent Change ",
    key: "1weekPercentChange ",
    pro: true,
  },
  {
    name: "30-day Change Percent",
    key: "30dayChangePercent",
    pro: true,
  },
  {
    name: "1-month Percent Change",
    key: "1monthPercentChange",
    pro: true,
  },
  {
    name: "3-month Percent Change",
    key: "3monthPercentChange",
    pro: true,
  },
  {
    name: "1-year Percent Change ",
    key: "1yearPercentChange ",
    pro: true,
  },
 
];

