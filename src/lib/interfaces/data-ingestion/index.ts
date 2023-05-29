export interface TableDataInterface {
  type:
    | "Switch"
    | "Typography"
    | "Icon"
    | "Checkbox"
    | "Autocomplete"
    | "Link"
    | "Badge";
  column_name: string;
  switch_state?: boolean;
  checkbox_state?: boolean;
  autocomplete_curr_state?: string;
  text_value?: string;
}
