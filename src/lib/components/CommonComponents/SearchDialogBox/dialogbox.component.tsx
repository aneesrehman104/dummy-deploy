import Image from "next/image";
import {
  IconButton,
  InputAdornment,
  Dialog,
  DialogContent,
} from "@mui/material";
import "./dialogbox.css";
import searchIcon from "../../../../../public/searchIcon.svg";
import CloseIcon from "@mui/icons-material/Close";
import { CssTextField } from "@/lib/styled-components/index.styled";

const SearchDialogBox: React.FC<{
  isSearchModalOpen: boolean;
  handleCloseModal: () => void;
}> = ({ isSearchModalOpen, handleCloseModal }) => {
  return (
    <Dialog
      open={isSearchModalOpen}
      onClose={handleCloseModal}
      PaperProps={{
        style: {
          height: "100%",
          width: "100%",
          overflowY: "unset", // Remove the default y-axis overflow
          padding: 0, // Remove the default padding
          margin: 0, // Remove the default margin
          maxHeight: "100%", // Remove the max-height property
        },
      }}
    >
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleCloseModal}
        aria-label="close"
        sx={{
          position: "absolute",
          top: 8,
          right: 20,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        style={{
          overflowY: "unset",
          padding: "50px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CssTextField
          placeholder="Search ticker or company"
          className=""
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src={searchIcon}
                  alt="searchIcon"
                  width={18}
                  height={18}
                  style={{ cursor: "pointer" }}
                />
              </InputAdornment>
            ),
          }}
          size="small"
          hiddenLabel
        />
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialogBox;