import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CssTextField = styled(TextField)({
  width: "278px",
  height: "56px",
  marginRight: "30px",
  color: "#ffffff", // or "white"
  border: "1px solid #0aac85",
  borderRadius: "4px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  marginTop: "10px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "& input": {
      color: "#ffffff", // Sets the input text color to white
    },
    "&::placeholder": {
      color: "#ffffff", // Sets the placeholder color to white
    },
    "&::-moz-placeholder": {
      color: "#ffffff",
      opacity: 1,
    },
  },
});

export const CssTextFieldMultiLine = styled(TextField)({
  width: "95%",
  height: "117px",
  color: "white", // Text color (white in this case)
  border: "1px solid #0aac85",
  borderRadius: "4px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  marginTop: "30px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "& textarea::placeholder": {
      color: "white", // Placeholder color (white in this case)
    },
    "& .MuiOutlinedInput-input": {
      color: "white", // Text color (white in this case)
    },
    "& .MuiInputLabel-root": {
      color: "white", // Label color (white in this case)
    },
  },
});
