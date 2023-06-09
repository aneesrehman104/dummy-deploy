import { SerializeDataResponse } from './../utils/data-ingestion/index';
import { TableDataInterface } from "../interfaces";

type ReducerAction = {
  type: string;
  payload: Array<Array<SerializeDataResponse>>;
  index?: number[];
  config?: {
    value: string;
  };
};

export const reducer = (
  state: Array<Array<SerializeDataResponse>>,
  action: ReducerAction
): Array<Array<SerializeDataResponse>> => {
  const dummy = [...state].map((row) => [...row]);
  switch (action.type) {
    case "replace":
      return action.payload;

    default:
      return state;
  }
};
