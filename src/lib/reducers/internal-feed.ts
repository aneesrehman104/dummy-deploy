import { TableDataInterface } from "../interfaces";

type ReducerAction = {
  type: string;
  payload: Array<object>;
  index?: number[];
  config?: {
    value: string;
  };
};

export const reducer = (
  state: Array<Array<TableDataInterface>>,
  action: ReducerAction
): Array<any> => {
  const dummy = [...state].map((row) => [...row]);
  switch (action.type) {
    case "replace":
      return action.payload;

    case "Reviewed":
      if (action.index && action.index.length > 0) {
        dummy[action.index[0]][action.index[1]].checkbox_state =
          !dummy[action.index[0]][action.index[1]].checkbox_state;
      }
      return dummy;

    case "submit_to_keyfeed":
      if (action.index && action.index.length > 0) {
        dummy[action.index[0]][action.index[1]].checkbox_state =
          !dummy[action.index[0]][action.index[1]].checkbox_state;
      }
      return dummy;

    case "format_for_export":
      return state;

    case "relevant_data_suggestion":
      // dropdown
      return { ...action.payload };

    case "writeup_key_events":
      // this is a text area or an editable div
      if (action.config && action.index && action.index.length > 0) {
        dummy[action.index[0]][action.index[1]].text_value = action.config.value;
      }
      return dummy;

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
