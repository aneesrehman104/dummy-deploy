import { Button, CircularProgress } from "@mui/material";
import React from "react";
import { ButtonProps } from "@lib/ts/interface";

const CommonfiButton = (props: ButtonProps) => {
  return (
    <div>
      <Button
        className={props.className}
        style={{
          height: props.height,
          width: props.width,
          background: props.background,
          border: props.border,
          borderRadius: props.borderRadius,
          fontSize: props.fontSize,
          color: props.color,
        }}
        size={props.size}
        startIcon={props.startIcon}
        variant={props.variant}
        href={props.href}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        sx={props.sx}
        disableRipple={props.disableRipple}
      >
        {props.isLoading ? <CircularProgress /> : props.title}
      </Button>
    </div>
  );
};

export default CommonfiButton;
