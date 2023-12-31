import React, { useState } from "react";
import "./change-log.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Select from "@mui/material/Select";
import { ArrayChangeLog_, currencies_ } from "./constants";
interface PROPS {}

const ChangeLog: React.FC<PROPS> = () => {
  const [currencies, setCurrencies] = React.useState(currencies_);
  const [searchText, setSearchText] = useState<string>("");
  const [logData, setLogData] = useState(ArrayChangeLog_);

  const handleInputChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleClearClick = () => {
    setSearchText("");
    setLogData(ArrayChangeLog_);
  };
  const toggleDetails = (index: any) => {
    const updatedLogData = [...logData];
    updatedLogData[index].isOpen = !updatedLogData[index].isOpen;
    setLogData(updatedLogData);
  };

  const handleSearchClick = () => {
    const filteredLogData = ArrayChangeLog_.filter(
      (item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.info.toLowerCase().includes(searchText.toLowerCase())
    );
    setLogData(filteredLogData);
  };

  return (
    <section className="sectionChangeLog">
      <div className="textChangeLog">Changelog</div>
      <div className="spaceBetweenChangeLog">
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            marginTop: "20px",
            marginRight: "20px",
          }}
        >
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSearchClick}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Changelog"
            value={searchText}
            onChange={handleInputChange}
          />

          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="clear"
            onClick={handleClearClick}
          >
            <ClearIcon />
          </IconButton>
        </Paper>
        <TextField
          sx={{
            p: "2px 4px",
            width: 300,
            marginTop: "20px",
          }}
          id="filled-select-currency"
          select
          label="Select The Value"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      {logData.map((item: any, index: number) => {
        return (
          <div key={item.date} className="collapsColor">
            <main
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <div style={{ width: "50%" }}>
                <span className="textChangeLog">{item.title}</span> -{" "}
                <span>{item.info}</span>
              </div>
              <Select value={item.option} variant="standard" disableUnderline>
                <MenuItem value="SPAC Screener">SPAC Screener</MenuItem>
                <MenuItem value="Recent IPOs">Recent IPOs</MenuItem>
              </Select>

              <div>{item.date}</div>
              <div onClick={() => toggleDetails(index)}>
                {item.isOpen ? <ArrowCircleUpIcon /> : <ArrowCircleDownIcon />}
              </div>
            </main>
            {item.isOpen ? (
              <main
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="change-log-item-details">{item.details}</div>
              </main>
            ) : null}
          </div>
        );
      })}
    </section>
  );
};

export default ChangeLog;
