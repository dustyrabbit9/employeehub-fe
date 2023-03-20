import {
  Box,
  Button,
  Paper,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TestEditEmployees = () => {
  const [rows, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  useEffect(() => {
    axios
      .get("https://localhost:7113/api/EmployeeHub/employee/getAllEmployees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://localhost:7113/api/EmployeeHub/department/getAllDepartments"
      )
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [data, setData] = useState([]);

  const handleEdit = (id) => {
    //alert(id);
    handleOpenEdit();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure") == true) {
      alert(id);
    }
  };

  const handleUpdate = (id) => {
    //alert(id);
    handleOpenEdit();
  };

  const handleAdd = (id) => {
    if (window.confirm("Are you sure you want to Add?") == true) {
      alert(id);
    }
  };

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
      <TableContainer component={Paper} elevation={4}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="5%">#ID</TableCell>
              <TableCell width="5%">First Name</TableCell>
              <TableCell width="5%">Last Name </TableCell>
              <TableCell width="5%">DOB</TableCell>
              <TableCell width="5%">Age</TableCell>
              <TableCell width="5%">Email</TableCell>
              <TableCell width="5%">Salary</TableCell>
              <TableCell width="5%">Department</TableCell>
              <TableCell width="10%" align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.dob}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.departmentName}</TableCell>
                <TableCell colSpan={1} align="right">
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={() => handleEdit(row.id)}
                  >
                    Edit
                  </Button>
                  &nbsp;
                  <Button
                    sx={{ bgcolor: "#ed4856" }}
                    variant="contained"
                    endIcon={<DeleteIcon />}
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Employee{" "}
          </Typography>
          <Button
            sx={{ bgcolor: "#ed4856" }}
            variant="contained"
            onClick={handleCloseEdit}
          >
            Cancel
          </Button>
          &nbsp;
          <Button
            startIcon={<EditIcon />}
            variant="contained"
            onClick={handleUpdate}
          >
            Update{" "}
          </Button>
        </Box>
      </Modal>
      <Stack
        padding={3}
        direction="row"
        spacing={2}
        justifyContent="flex-end"
        sx={{ position: "fixed", right: "0" }}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenAdd}
        >
          Add Employee
        </Button>
      </Stack>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: 4 }}
          >
            Add Employee{" "}
          </Typography>
          <TextField
            fullWidth
            id="outlined-select-currency"
            select
            label="Department"
            helperText="Please select Department"
            sx={{ marginBottom: 3 }}
          >
            {departments.map((department) => (
              <MenuItem key={department.id} value={department.id}>
                {department.departmentName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            id="outlined-helperText"
            label="First Name"
            sx={{ marginBottom: 3 }}
          />
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Last Name"
            sx={{ marginBottom: 4 }}
          />
          <TextField
            fullWidth
            id="outlined-helperText"
            label="DOB"
            helperText="YYYY-MM-DDD"
            sx={{ marginBottom: 3 }}
          />
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Email"
            sx={{ marginBottom: 3 }}
          />
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Salary"
            helperText="Enter numerical value with no spaces"
            sx={{ marginBottom: 3 }}
          />

          <Stack>
            <Button
              sx={{ bgcolor: "#ed4856" }}
              variant="contained"
              onClick={handleCloseAdd}
            >
              Cancel
            </Button>
            &nbsp;
            <Button
              startIcon={<EditIcon />}
              variant="contained"
              onClick={handleAdd}
            >
              Update{" "}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default TestEditEmployees;
