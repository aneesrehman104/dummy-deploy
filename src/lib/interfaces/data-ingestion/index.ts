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

export type TTableColumns = "reviewed" | "submitToKeyFeed" | "formatForExport" | "relevantDataSuggestion"
| "writeupKeyEvents" | "relevantWriteup" | "keyEvent" | "dataCategory" | "attachToRecord" | "entryUnit" |
"ourKeywordsFound" | "description" | "secForm" | "source" | "materialType" | "tickers" | 
"company" | "dateTimeEst" | "sourceLink";