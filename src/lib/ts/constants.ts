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
    ],
  },
];

export const navBarText = {
  signUp: "Sign up",
  signIn: "Sign in",
};

export const homeConstants = {
  title: "LISTINGTRACK",
  IOPS: "IOPS",
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
  MergersPipeline:{
    title:'Merger Pipeline'
  }
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
