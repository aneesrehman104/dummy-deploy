import { TableDataInterface } from "../interfaces";

type ReducerAction = {
  type: string;
  payload: Array<object>;
};

export const reducer = (
  state: Array<TableDataInterface>,
  action: ReducerAction
): Array<any> => {
  const dummy = [...state];
  switch (action.type) {
    case "replace":
      return action.payload;

    case "reviewed":
      return action.payload;

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

    // when ever we add a new column where we need to manage state such as Autocomplete or Switch or Checkboxes
    // add your logic with new case: column name
    default:
      return state;
  }
};
