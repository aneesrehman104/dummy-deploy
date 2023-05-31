import { TableDataInterface } from "../interfaces";

type ReducerAction = {
  type: string;
  payload: Array<object>;
};

export const reducer = (
  state: Array<TableDataInterface>,
  action: ReducerAction
): Array<any> => {
  switch (action.type) {
    case "replace":
      return [...state].map((item) => {
        return { ...item };
      });
    case "reviewed":
      // this is checkbox component
      return { ...action.payload };
    case "submit_to_keyfeed":
      // this is checkbox component
      return { ...action.payload };
    case "format_for_export":
      return state;
    case "relevant_data_suggestion":
      // dropdown
      return { ...action.payload };
    case "writeup_key_events":
      // this is a text area or an editable div
      return { ...action.payload };
    case "relevant_writeup":
      // dropdown
      return { ...action.payload };
    case "key_event":
      // this is an autocomplete component
      return { ...action.payload };
    case "data_category":
      // this is an autocomplete component
      return { ...action.payload };
    case "attach_to_record":
      // this is an autocomplete component
      return { ...action.payload };
    case "entry_unit":
      // this is an autocomplete component
      return { ...action.payload };
    // case "our_keywords_found":
    //   return state;
    // case "source_material_body":
    //   return state;
    // case "description":
    //   return state;
    // case "sec_form":
    //   return state;
    // case "source":
    //   return state;
    // case "material_type":
    //   return state;
    // case "tickers":
    //   return state;
    // case "company":
    //   return state;
    // case "date_time_est":
    //   return state;
    // case "source_link":
    //   return state;

    // when ever we add a new column where we need to manage state such as Autocomplete or Switch or Checkboxes
    // add your logic with new case: column name
    default:
      return state;
  }
};
