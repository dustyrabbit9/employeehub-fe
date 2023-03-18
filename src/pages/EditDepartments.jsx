import React from "react";
import { Box } from "@mui/material";

const editDepartments = () => {
  return (
    <Box
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      bgcolor={"skyBlue"}
      flex={5}
      p={2}
    >
      EDIT DEPARTMENTS
    </Box>
  );
};

export default editDepartments;
