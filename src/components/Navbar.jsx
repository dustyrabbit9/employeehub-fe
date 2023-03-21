import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function MenuAppBar() {
  return (
    <Box
      sx={{ flexGrow: 1, display: { xs: "block", sm: "block", md: "block" } }}
    >
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              padding: "10px",
              flexGrow: 1,
              fontWeight: "bold",
            }}
          >
            EmployeeHub
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "block", sm: "none" },
              flexGrow: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            EmployeeHub
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                component={Link}
                to={"/"}
                endIcon={<HomeIcon />}
                color="secondary"
                size="small"
              >
                Home
              </Button>
            </ButtonGroup>
            &nbsp;
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                component={Link}
                to={"/Employees"}
                color="secondary"
                size="small"
              >
                Employees
              </Button>
              <Button
                component={Link}
                to={"/EditEmployees"}
                startIcon={<EditIcon />}
                color="secondary"
                size="small"
              ></Button>
            </ButtonGroup>
            &nbsp;
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                component={Link}
                to={"/Departments"}
                color="secondary"
                size="small"
              >
                Departments
              </Button>
              <Button
                component={Link}
                to={"/EditDepartments"}
                startIcon={<EditIcon />}
                color="secondary"
                size="small"
              ></Button>
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
