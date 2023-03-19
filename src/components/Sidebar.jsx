import {
  backdropClasses,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import BadgeIcon from "@mui/icons-material/Badge";
import BusinessIcon from "@mui/icons-material/Business";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <Box
      flex={1}
      py={2}
      sx={{
        height: "100vh",
        boxShadow: 2,
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      <List disablePadding>
        <ListItem>
          <ListItemButton
            component={Link}
            to="/"
            selected={location.pathname === "/"}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem>
          <ListItemButton component={Link} to="/Search" selected={location.pathname === "/Search"}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List disablePadding>
        <ListItem>
          <ListItemButton component={Link} to="/Employees" selected={location.pathname === "/Employees"}>
            <ListItemIcon>
              <BadgeIcon />
            </ListItemIcon>
            <ListItemText primary="Employees" />
          </ListItemButton>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem>
          <ListItemButton component={Link} to="/EditEmployees" selected={location.pathname === "/EditEmployees"}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Employees" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List disablePadding>
        <ListItem>
          <ListItemButton component={Link} to="/Departments" selected={location.pathname === "/Departments"}>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Departments" />
          </ListItemButton>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem>
          <ListItemButton component={Link} to="/EditDepartments" selected={location.pathname === "/EditDepartments"}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Departments" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
