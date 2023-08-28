import { TextField } from "@mui/material";
import React from "react";

const InputField: React.FC<{
  label: string;
  placeholder: string;
  name: string;
  error_status: boolean;
  hiddenLabel: boolean;
  helperText: string;
}> = ({ label, placeholder, name, error_status, hiddenLabel, helperText }) => {
  return (
    <TextField
      size="medium"
      variant="outlined"
      label={label}
      error={error_status}
      helperText={helperText}
      hiddenLabel={hiddenLabel}
      placeholder={placeholder}
      required
      name={name}
    />
  );
};

export default InputField;
