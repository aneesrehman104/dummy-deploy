import { InternalFeedTableData } from "@/lib/ts/internal-feed";
import { TTableColumns } from "@/lib/interfaces/data-ingestion";
type TableResponse = {
  column_name: string;
  value: string;
};

export function GetValuePlaceholder(value: string | boolean, component_type: string) {
  switch (component_type) {
    case "Typography":
      return { text_value: value as string };
    case "Link":
      return { text_value: value as string };
    case "Checkbox":
      return { checkbox_state: value as boolean };
    case "Switch":
      return { switch_state: value as boolean };
    case "Autocomplete":
      return { autocomplete_curr_state: value as string };
    case "Badge":
      return { text_value: value as string };
    case "Textarea":
      return { text_value: value as string };
    default:
      return { text_value: value as string };
  }
}

export function serializeData(data: Array<TableResponse>) {
  if (data.length === 0) return data;
  const serializedData = data.map((item) => {
    const _elmKey = Object.keys(InternalFeedTableData).find(
      (mapper_item) => mapper_item === item.column_name
    );
    if (_elmKey) {
      const _componentType =
        InternalFeedTableData[_elmKey as TTableColumns].component;
      const value = GetValuePlaceholder(item.value, _componentType);
      return { ...item, component: _componentType, ...value };
    }
  });
  return serializedData;
}
