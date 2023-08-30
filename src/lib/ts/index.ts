export type ResponseBody = {
  sourceLink: string;
  dateTimeEst: string;
  company: string;
  tickers: string;
  materialType: string;
  source: string;
  secForm: string;
  description: string;
  sourceMaterialBody: string;
  ourKeywordsFound: string;
  entryUnit: string;
  attachToRecord: string;
  dataCategory: string;
  keyEvent: string;
  relevantWriteup: string;
  writeupKeyEvents: string;
  relavantDataSuggestion: string;
  formatForExport: string;
  submitToKeyFeed: boolean;
  reviewed: boolean;
};

export interface IResponseSchema {
  source: {
    dataset: Array<ResponseBody>;
    additional_dataset: object
  };
}

export interface IResponseSchemaInternalFeed extends IResponseSchema {
  source: {
    dataset: Array<ResponseBody>;
    additional_dataset: object;
  }
}