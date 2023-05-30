export interface TableDataInterface {
  type:
    | "Switch"
    | "Typography"
    | "Icon"
    | "Checkbox"
    | "Autocomplete"
    | "Link"
    | "Badge"
    | "Textarea";
  column_name: string;
  switch_state?: boolean;
  checkbox_state?: boolean;
  autocomplete_curr_state?: string;
  text_value?: string;
}

export type TTableColumns = "reviewed" | "submit_to_keyfeed" | "format_for_export" | "relevant_data_suggestion"
| "writeup_key_events" | "relevant_writeup" | "key_event" | "data_category" | "attach_to_record" | "entry_unit" |
"our_keywords_found" | "source_material_body" | "description" | "sec_form" | "source" | "material_type" | "tickers" | 
"company" | "date_time_est" | "source_link";