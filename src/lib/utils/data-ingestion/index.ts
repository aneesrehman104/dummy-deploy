import { InternalFeedTableData, sorted_data_feed_keys } from "@/lib/ts/internal-feed";
import { TTableColumns } from "@/lib/interfaces/data-ingestion";
import { ResponseBody } from "@/lib/ts";
type TableResponse = {
  column_name: string;
  value: string | boolean;
};

export function GetValuePlaceholder(
  value: string | boolean,
  component_type: string
) {
  switch (component_type) {
    case "Typography":
      return { text_value: value as string, options: value.toString().split("\n") };
    case "Link":
      return { text_value: value as string };
    case "Checkbox":
      return { checkbox_state: value as boolean };
    case "Switch":
      return { switch_state: value as boolean };
    case "Autocomplete":
      return { autocomplete_curr_state: value as string, options: value.toString().split("\n") };
    case "Badge":
      return { text_value: value as string };
    case "Textarea":
      return { text_value: value as string, options: value.toString().split("\n") };
    default:
      return { text_value: value as string };
  }
}

export function serializeData(data: Array<ResponseBody>) {
  if (data.length === 0) return data;
  const internal_feed_key = sorted_data_feed_keys;
  const serializedData = data.map((item) => {
    const sorted_item = {}
    internal_feed_key.forEach((key: string) => {
      // @ts-ignore
      sorted_item[key] = item[key];
    });
    const column_names = Object.keys(sorted_item);
    const column_values: Array<string> = Object.values(sorted_item);
    const tableResponse: Array<TableResponse> = [];
    for (let i = 0; i < column_names.length; i++) {
      tableResponse.push({
        column_name: column_names[i],
        value: column_values[i],
      });
    }

    const innerData: Array<
      | {
          column_name: string;
          component: string;
          text_value: string;
          checkbox_state?: undefined;
          switch_state?: undefined;
          autocomplete_curr_state?: undefined;
          options?: undefined | string[];
        }
      | {
          column_name: string;
          component: string;
          text_value?: undefined;
          checkbox_state: boolean;
          switch_state?: undefined;
          autocomplete_curr_state?: undefined;
          options?: undefined | string[];
        }
      | {
          column_name: string;
          component: string;
          text_value?: undefined;
          checkbox_state?: undefined;
          switch_state: boolean;
          autocomplete_curr_state?: undefined;
          options?: undefined | string[];
        }
      | {
          column_name: string;
          component: string;
          text_value?: undefined;
          checkbox_state?: undefined;
          switch_state?: undefined;
          autocomplete_curr_state: string;
          options: string[];
        }
    > = [];


    tableResponse.forEach((table_response_item, i) => {
      const _elmKey = internal_feed_key.find(
        (internal_feed_key_item) =>
          internal_feed_key_item === table_response_item.column_name
      );
      if (_elmKey) {
        const _componentType =
          InternalFeedTableData[_elmKey as TTableColumns].component;
        const value = GetValuePlaceholder(
          table_response_item.value,
          _componentType
        );
        innerData.push({
          column_name: table_response_item.column_name,
          component: _componentType,
          ...value,
        });
      }
    });

    return innerData;
  });
  return serializedData;
}
