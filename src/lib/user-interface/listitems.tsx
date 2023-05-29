import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Tooltip } from "@mui/material";

const list = [
  {
    id: Math.floor(Math.random() * 1000000).toString(),
    name: "Source Material Feed",
    icon: <HomeIcon />,
  },

  {
    id: Math.floor(Math.random() * 1000000).toString(),
    name: "Data Entry Tool",
    icon: <KeyboardIcon />,
  },

  {
    id: Math.floor(Math.random() * 1000000).toString(),
    name: "Newsletter Tool",
    icon: <MarkunreadIcon />,
  },

  {
    id: Math.floor(Math.random() * 1000000).toString(),
    name: "Data Metrics",
    icon: <QueryStatsIcon />,
  },

  {
    id: Math.floor(Math.random() * 1000000).toString(),
    name: "Database Activity Feed",
    icon: <HistoryToggleOffIcon />,
  },

  {
    id: Math.floor(Math.random() * 1000000).toString(),
    name: "Calendar",
    icon: <CalendarMonthIcon />,
  },

  {
    id: Math.floor(Math.random() * 1000000).toString(),
    name: "Our Metrics",
    icon: <QueryStatsIcon />,
  },
];

export const MainListItems: React.FC<{
  current_item: string;
  switch_selection: (type: string) => void;
}> = ({ current_item, switch_selection }) => {
  return (
    <React.Fragment>
      {list.map((item) => {
        return (
          <ListItemButton
            onClick={() => switch_selection(item.name)}
            style={{
              backgroundColor:
                current_item === item.name ? "rgb(230, 230, 230)" : "",
            }}
            key={item.id + item.name}
          >
            <Tooltip title={item.name} placement="right">
              <ListItemIcon>{item.icon}</ListItemIcon>
            </Tooltip>
            <ListItemText primary={item.name} />
          </ListItemButton>
        );
      })}
    </React.Fragment>
  );
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
