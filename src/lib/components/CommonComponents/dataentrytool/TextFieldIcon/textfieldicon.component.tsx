import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";

interface PROPS {
  label: string;
  placeholder: string;
  name: string;
  error_status: boolean;
  type: "password" | "text";
  icon_click_handler: () => void;
  show_password: boolean;
}

export const TextFieldIcon: React.FC<PROPS> = ({
  label,
  placeholder,
  name,
  error_status,
  type,
  icon_click_handler,
  show_password,
}) => {
  const [mouse_down_status, setMouseDownStatus] = React.useState(false);

  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={type}
        placeholder={placeholder}
        error={error_status}
        name={name}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={icon_click_handler}
              // onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {type === "password" && show_password ? (
                <VisibilityOff />
              ) : (
                <Visibility />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};
