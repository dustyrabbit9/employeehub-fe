import { Box } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      bgcolor={"lightblue"}
      flex={0.9}
      p={2}
      sx={{
        padding: 0,
        height: "100vh",
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
