import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";

const home = () => {
  return (
    <Box flex={5} p={2}>
      {/* <Typography variant="h9" gutterBottom sx={{ fontStyle: "italic" }}>
        Edit Table{" "}
      </Typography> */}
      <Box p={2}>
        <Typography
          color="primary"
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          EmployeeHub{" "}
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontSize: "20px", marginBottom: "20px" }}
        >
          EmployeeHub implements a CRUD (Create, Insert, Update, Delete) Table
          to a ReactJS based frontend. The backend with API endpoints for the
          web app was developed with .NET Core Web Api.{" "}
        </Typography>
        <Divider></Divider>
        <Typography
          color="primary"
          variant="h5"
          gutterBottom
          sx={{ marginTop: "30px", fontWeight: "bold" }}
        >
          GitHub Repo{" "}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ marginBottom: "0px", fontWeight: "bold" }}
        >
          employeehub-be (Backend){" "}
        </Typography>
        <Typography gutterBottom>
          <a href="https://github.com/dustyrabbit9/employeehub-be">
            https://github.com/dustyrabbit9/employeehub-be
          </a>{" "}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ marginBottom: "0px", fontWeight: "bold" }}
        >
          employeehub-fe (Frontend){" "}
        </Typography>
        <Typography gutterBottom>
          <a href="https://github.com/dustyrabbit9/employeehub-fe">
            https://github.com/dustyrabbit9/employeehub-fe
          </a>{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default home;
