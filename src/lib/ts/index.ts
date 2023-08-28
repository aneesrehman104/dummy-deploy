export type ResponseBody = {
  source_link: string;
  date_time_est: string;
  company: string;
  tickers: string;
  material_type: string;
  source: string;
  sec_form: string;
  description: string;
  source_material_body: string;
  our_keywords_found: string;
  entry_unit: string;
  attach_to_record: string;
  data_category: string;
  key_event: string;
  relevant_writeup: string;
  writeup_key_events: string;
  relavant_data_suggestion: string;
  format_for_export: string;
  submit_to_keyfeed: boolean;
  reviewed: boolean;
};

export interface IResponseSchema {
  api_id: number;
  error: boolean;
  errorMsg: {
    sys: string;
    api_message: string;
    error_code: number;
  };
  version: string;
  response_date: string;
  api_release_date: string;
  _from: string;
  meta: {
    api_name: string;
    method: string;
    authenticator_ip: string;
    mozilla_browser_information: string;
    unix_time: number;
  };
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