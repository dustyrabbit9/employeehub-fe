import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { format } from "date-fns";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 300 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "dob",
    headerName: "DOB",
    valueFormatter: (params) => format(new Date(params.value), "yyyy-MM-dd"),
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 195,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "salary",
    headerName: "Salary",
    width: 100,
  },
  {
    field: "departmentName",
    headerName: "Department",
    width: 200,
  },
];

const EditEmployees = () => {
  const [rows, setRows] = useState([]);


  useEffect(() => {
    axios
      .get("https://localhost:7113/api/EmployeeHub/employee/getAllEmployees")
      .then((response) => {
        setRows(response.data);
      });
  }, []);


  return (
    <Box flex={5} p={2}>
      <Box flex={5} p={2}>
        <Typography variant="h9" gutterBottom sx={{ fontStyle: "italic" }}>
          Edit Table{" "}
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Employees List{" "}
        </Typography>
      </Box>
      <Paper elevation={2}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight={true}
          autoWidth={true}
          checkboxSelection
          
        />
      </Paper>
      <Stack
        padding={3}
        direction="row"
        spacing={2}
        justifyContent="flex-end"
        sx={{ position: "fixed", right: "0" }}
      >
        <Button variant="outlined" startIcon={<EditIcon />}>
          Update
        </Button>
        <Button
          sx={{ bgcolor: "#ed4856" }}
          variant="contained"
          endIcon={<DeleteIcon />}
          onClick={() => {
            console.log("LOL");
          }}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  );
};

export default EditEmployees;
