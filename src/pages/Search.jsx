import React from "react";
import { Box } from "@mui/material";

const search = () => {
  return (
    <Box
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      bgcolor={"skyblue"}
      flex={5}
      p={2}
    >
      SEARCH
    </Box>
  );
};

export default search;
