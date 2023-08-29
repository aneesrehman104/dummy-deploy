import { TextField,Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CssTextField = styled(TextField)({
  width: "375px",
  height: "32px",
  border: "1px solid #dddee0",
  display:'flex',
  justifyContent:'center',
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



export const CssTextSpacsField = styled(TextField)({
  width: "368px",
  height: "40px",
  borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});

export const FilterModalStyle  = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid grey",
  boxShadow: 24,
  borderRadius: "15px",
  p: 3,
};



export const CssTextFieldBorder = styled(TextField)({
  height: "40px",
  marginTop: "10px",
  border: "1px solid #dddee0",
  background: "#dddee0",
  borderRadius: "40px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});




export const RequestDemoCssTextField = styled(TextField)({
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

export const RequestDemoCssTextFieldMultiLine = styled(TextField)({
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
export const CssSelect = styled(Select)({
  width: "278px",
  height: "56px",
  marginRight: "30px",
  color: "#ffffff",
  border: "1px solid #0aac85",
  borderRadius: "4px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  marginTop: "20px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "& input": {
      color: "#ffffff",
    },
    "&::placeholder": {
      color: "#ffffff",
    },
    "&::-moz-placeholder": {
      color: "#ffffff",
      opacity: 1,
    },
  },
  "& .MuiSelect-icon": {
    color: "#ffffff", // Sets the select icon color to white
  },
});