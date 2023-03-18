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
  
  const Sidebar = () => {
    return (
      <Box
        flex={1}
        p={2}
        sx={{
          padding: 0,
          height: "100vh",
          boxShadow: 2,
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <List disablePadding>
          <ListItem>
            <ListItemButton components="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
        <List disablePadding>
          <ListItem>
            <ListItemButton components="a" href="#Search">
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
            <ListItemButton components="a" href="#Employees">
              <ListItemIcon>
                <BadgeIcon />
              </ListItemIcon>
              <ListItemText primary="Employees" />
            </ListItemButton>
          </ListItem>
        </List>
        <List disablePadding>
          <ListItem>
            <ListItemButton components="a" href="#EditEmployees">
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
            <ListItemButton components="a" href="#Departments">
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Departments" />
            </ListItemButton>
          </ListItem>
        </List>
        <List disablePadding>
          <ListItem>
            <ListItemButton components="a" href="#EditDepartments">
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
  