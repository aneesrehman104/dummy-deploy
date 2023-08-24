import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CssTextField = styled(TextField)({
  width: "375px",
  height: "40px",
  border: "1px solid #dddee0",
  background: "#dddee0",
  borderRadius: "8px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});

export const FooterTextField = styled(TextField)({
  width: "100%",
  height: "56px",
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