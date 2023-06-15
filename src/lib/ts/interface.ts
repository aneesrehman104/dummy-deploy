export interface Props {
  selected_id?: string;
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
export interface GraphDataInterface {
  additional_dataset?: {
    IPO?: number;
    Closed_Mergers?: number;
    Announced_Mergers?: number;
    Liquidations?: number;
  };
  dataset: {
    month: string;
    data: number;
    event: string;
  }[];
  // Define other properties here if needed
}
export interface PipelineInterface {
  data: any[];
  totalLength?: any;
  itemsPerPage?: any;
  currentPage?: any;
  paginate?: any;
}
