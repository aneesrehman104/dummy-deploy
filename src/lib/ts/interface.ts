import { extend } from "highcharts";

export interface Props {
  selected_id?: string;
  handleLogout?: any;
  openModal?: any;
  hideModal?: any;
  children?: any;
  window?: () => Window;
}

export interface SidebarItem {
  name: string;
  pathname: string;
  id: string;
  breadcrumb: string;
  items?: SidebarItem[];
}

export interface SidebarState {
  [key: string]: boolean;
}

export type EvenetChart = {
  data: any;
};

export type EventChartSpacs = {
  options: object | any;
};

export type ButtonProps = {
  title?: any;
  background?: string;
  color?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  startIcon?: any;
  variant?: "text" | "outlined" | "contained";
  border?: string;
  width?: string;
  borderRadius?: string;
  fontSize?: string;
  onClick?: any;
  className?: string;
  height?: string;
  isLoading?: boolean;
  type?: string;
  href?: any;
  sx?: any;
  disableRipple?: boolean;
  endIcon?: any;
};

export type GainerInterFace = {
  title?: string;
  data?: any;
  itemsPerPage?: any;
  spacsTradingGainerDataSelectedTab?: any;
  setSpacsTradingGainerDataSelectedTab?: any;
  spacsTradingGainerDataCurrentPage?: any;
  setSpacsTradingGainerDataCurrentPage?: any;
  spacsTradingGainerData?: any;
  isLoading?: boolean;
};

export type LoserInterFace = {
  title?: string;
  data?: any;
  itemsPerPage?: any;
  spacsTradingLoserDataSelectedTab?: any;
  setSpacsTradingLoserDataSelectedTab?: any;
  spacsTradingLoserDataCurrentPage?: any;
  setSpacsTradingLoserDataCurrentPage?: any;
  spacsTradingGainerData?: any;
  isLoadingLooser?: boolean;
};

// Charting definitions
export interface IChartType {
  type: string;
}

export interface ITitle {
  text?: string;
  align?: string;
}

export interface ISubtitle {
  text: string;
  align?: string;
}

export interface IAxis {
  title: ITitle;
  categories?: string[];
}

export interface IChartData {
  y?: number;
}

export interface PieChartData extends IChartData {
  name: string;
  y: number;
  sliced: boolean;
  selected: boolean;
}

export interface ISeries<T extends IChartData> {
  name: string;
  data: T[];
}

export interface MultiAxesSeries<T extends IChartData> extends ISeries<T> {
  type: string;
  yAxis: number;
}

export interface IChart {}

export interface BaseChart<TChart extends IChartType, TTitle extends ITitle, TSubtitle extends ISubtitle, TSeries extends ISeries<IChartData>> extends IChart {
  chart: TChart;
  title: TTitle;
  subtitle: TSubtitle;
  series: TSeries[];
}

export interface LineChart extends BaseChart<IChartType, ITitle, ISubtitle, ISeries<IChartData>> {
  xAxis: IAxis;
  yAxis: IAxis;
}

export interface ColumnChart extends BaseChart<IChartType, ITitle, ISubtitle, ISeries<IChartData>> {
  xAxis: IAxis;
  yAxis: IAxis;
}


export interface GraphDataInterface<T extends IChart> {
  additional_dataset?: {
    IPO?: number;
    Closed_Mergers?: number;
    Announced_Mergers?: number;
    Liquidations?: number;
  };
  dataset: T;
  // Define other properties here if needed
}

export interface PipelineInterface {
  data: any[];
  totalLength?: any;
  itemsPerPage?: any;
  currentPage?: any;
  paginate?: any;
}

export interface IpoPipelineInterface {
  companyName: string;
  companySymbol: string;
  ipoType: string;
  ipoStatus: string;
  exchange: string;
  expectedIpoDate: string;
  expectedIpoPrice: string;
  ipoOfferingSize: string;
}

// #region ipo market stats
//
//
export interface IpoMarketStatsDto {
  overview: IpoOverviewMarketStats;
  pricingYTD: IpoPricingYTDMarketStats;
  averageReturns: IpoAverageReturnsMarketStats;
}

export interface IpoOverviewMarketStats {
  withSpacs: IpoOverviewStats;
  withoutSpacs: IpoOverviewStats;
}

export interface IpoOverviewStats {
  iposYTD: number;
  iposPrevYear: number;
  iposYearlyChangePercentage: number;
  iposFiled: number;
  iposScheduled: number;
  iposWithdrawnYTD: number;
}

export interface IpoPricingYTDMarketStats {
  withSpacs: IpoPricingYTDStats;
  withoutSpacs: IpoPricingYTDStats;
}

export interface IpoPricingYTDStats {
  valuationsOver1B: number;
  valuationsAvgMarketCap: number;
  valuationsMedianMarketCap: number;
  proceedsOver500M: number;
  avgProceeds: number;
  medianProceeds: number;
  underwriters?: UnderwriterStats[];
}

export interface UnderwriterStats {
  name: string;
  count: number;
  percentage: number;
}

export interface IpoAverageReturnsMarketStats {
  withSpacs: IpoAverageReturnsStats;
  withoutSpacs: IpoAverageReturnsStats;
}

export interface IpoAverageReturnsStats {
  percentageAboveIpoPrice: number;
  avgPremiumIpoPrice: number;
  medianPremiumIpoPrice: number;
  percentageClosedAboveOnIpoDay: number;
  avgReturnAtCloseOnIpoDay: number;
  medianReturnAtCloseOnIpoDay: number;
}

// #endregion ipo market stats
export interface ChartOptions {
  chart: {
    type: string;
    height: number| null;
    width: number | null;
    marginTop: number;
    marginBottom: number;
    plotBackgroundColor: null;
    renderTo: string;
    animation: boolean;
    zooming: {
      mouseWheel: {
        enabled: boolean;
      };
    };
  };
  title: {
    text: string;
  };
  xAxis: {
    categories: string[];
    title?: {
      text: string | null;
    };
  };
  yAxis: {
    opposite: boolean;
    title?: {
      text: string | null;
    };
  };
  credits: {
    enabled: boolean;
  };
  legend: {
    align: string;
    verticalAlign: string;
    layout: string;
  };
  series: {
    name: string;
    data: number[] | null;
    color: string;
  }[];
}
