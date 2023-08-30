// initialState.ts

import { GraphDataInterface, IChart, IpoMarketStatsDto } from "@/lib/ts/interface";

export const initialGraphData: GraphDataInterface<any> = {
  additional_dataset: {},
  dataset: {},
};

// export const ipoMarketStatsInitialState: IpoMarketStatsDto = {

export const ipoMarketStatsInitialState: IpoMarketStatsDto = {
  overview: {
    withSpacs: {
      iposYTD: 0,
      iposPrevYear: 0,
      iposYearlyChangePercentage: 0,
      iposFiled: 0,
      iposScheduled: 0,
      iposWithdrawnYTD: 0,
    },
    withoutSpacs: {
      iposYTD: 0,
      iposPrevYear: 0,
      iposYearlyChangePercentage: 0,
      iposFiled: 0,
      iposScheduled: 0,
      iposWithdrawnYTD: 0,
    },
  },
  pricingYTD: {
    withSpacs: {
      valuationsOver1B: 0,
      valuationsAvgMarketCap: 0,
      valuationsMedianMarketCap: 0,
      proceedsOver500M: 0,
      avgProceeds: 0,
      medianProceeds: 0,
      underwriters: [],
    },
    withoutSpacs: {
      valuationsOver1B: 0,
      valuationsAvgMarketCap: 0,
      valuationsMedianMarketCap: 0,
      proceedsOver500M: 0,
      avgProceeds: 0,
      medianProceeds: 0,
      underwriters: [],
    },
  },
  averageReturns: {
    withSpacs: {
      percentageAboveIpoPrice: 0,
      avgPremiumIpoPrice: 0,
      medianPremiumIpoPrice: 0,
      percentageClosedAboveOnIpoDay: 0,
      avgReturnAtCloseOnIpoDay: 0,
      medianReturnAtCloseOnIpoDay: 0,
    },
    withoutSpacs: {
      percentageAboveIpoPrice: 0,
      avgPremiumIpoPrice: 0,
      medianPremiumIpoPrice: 0,
      percentageClosedAboveOnIpoDay: 0,
      avgReturnAtCloseOnIpoDay: 0,
      medianReturnAtCloseOnIpoDay: 0,
    },
  },
};
