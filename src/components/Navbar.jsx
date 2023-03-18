import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "block" } }}>
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
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
