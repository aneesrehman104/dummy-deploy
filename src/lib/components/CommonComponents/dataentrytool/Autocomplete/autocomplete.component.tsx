import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const AutocompleteInputField: React.FC<{
  options: Array<string>;
  value: string;
  changeHandler: (to: string) => void;
}> = ({ options, value, changeHandler }) => {
  return (
    <Autocomplete
      disablePortal
      size="small"
      value={value}
      options={options.map((item) => item.toUpperCase())}
      sx={{ width: 250 }}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option}>
            {option}
          </li>
        );
      }}
      onChange={(_, value) => {
        if (value) changeHandler(value.toLowerCase());
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default AutocompleteInputField;
