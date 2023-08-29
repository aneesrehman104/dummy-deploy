// initialState.ts

import { GraphDataInterface, IpoMarketStatsDto } from "@/lib/ts/interface";

export const initialGraphData: GraphDataInterface = {
  additional_dataset: {},
  dataset: {
    Title: "",
    XAxis: {
      Title: "",
      Unit: null,
      Labels: [],
      MinValue: null,
      MaxValue: null,
      Interval: null,
    },
    YAxis: {
      Title: "",
      Unit: null,
      Labels: [],
      MinValue: null,
      MaxValue: null,
      Interval: null,
    },
    SeriesData: [],
  },
};

export const ipoMarketStatsInitialState: IpoMarketStatsDto = {
  Overview: {
    WithSpacs: {
      IposYTD: 0,
      IposPrevYear: 0,
      IposYearlyChangePercentage: 0,
      IposFiled: 0,
      IposScheduled: 0,
      IposWithdrawnYTD: 0,
    },
    WithoutSpacs: {
      IposYTD: 0,
      IposPrevYear: 0,
      IposYearlyChangePercentage: 0,
      IposFiled: 0,
      IposScheduled: 0,
      IposWithdrawnYTD: 0,
    },
  },
  PricingYTD: {
    WithSpacs: {
      ValuationsOver1B: 0,
      ValuationsAvgMarketCap: 0,
      ValuationsMedianMarketCap: 0,
      ProceedsOver500M: 0,
      AvgProceeds: 0,
      MedianProceeds: 0,
      Underwriters: [],
    },
    WithoutSpacs: {
      ValuationsOver1B: 0,
      ValuationsAvgMarketCap: 0,
      ValuationsMedianMarketCap: 0,
      ProceedsOver500M: 0,
      AvgProceeds: 0,
      MedianProceeds: 0,
      Underwriters: [],
    },
  },
  AverageReturns: {
    WithSpacs: {
      PercentageAboveIpoPrice: 0,
      AvgPremiumIpoPrice: 0,
      MedianPremiumIpoPrice: 0,
      PercentageClosedAboveOnIpoDay: 0,
      AvgReturnAtCloseOnIpoDay: 0,
      MedianReturnAtCloseOnIpoDay: 0,
    },
    WithoutSpacs: {
      PercentageAboveIpoPrice: 0,
      AvgPremiumIpoPrice: 0,
      MedianPremiumIpoPrice: 0,
      PercentageClosedAboveOnIpoDay: 0,
      AvgReturnAtCloseOnIpoDay: 0,
      MedianReturnAtCloseOnIpoDay: 0,
    },
  },
};
