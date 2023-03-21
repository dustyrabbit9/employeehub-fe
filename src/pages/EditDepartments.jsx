import React, { useState, useEffect } from "react";
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
} from "@mui/material";
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

const EditDepartments = () => {
  const [rows, setDepartments] = useState([]);

  // Edit Modal state
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  // Add Modal state
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  // Add form state
  const [departmentName, setDepartmentName] = useState("");

  // Edit form state
  const [editId, setEditId] = useState("");
  const [editDepartmentName, setEditDepartmentName] = useState("");

  // GET All Departments
  const getAllDepartments = () => {
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
  };

  useEffect(() => {
    getAllDepartments();
  }, []);

  const handleEdit = (id) => {
    handleOpenEdit();
    axios
      .get(
        `https://localhost:7113/api/EmployeeHub/department/getOneDepartment/${id}`
      )
      .then((response) => {
        setEditDepartmentName(response.data.departmentName);
        setEditId(id);

        getAllDepartments();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getDepartmentName = (id) => {
    handleOpenEdit();
    axios
      .get(
        `https://localhost:7113/api/EmployeeHub/department/getOneDepartment/${id}`
      )
      .then((response) => {
        setDepartmentName(response.data.departmentName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete the Employee record?") ==
      true
    ) {
      axios
        .delete(
          `https://localhost:7113/api/EmployeeHub/department/deleteDepartment/${id}`
        )
        .then((result) => {
          if (result.status === 200) {
            alert("Employee has been deleted");
            getAllDepartments();
          }
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7113/api/EmployeeHub/department/updateDepartment/${editId}`;
    const data = {
      departmentName: editDepartmentName,
    };

    axios.put(url, data).then((result) => {
      getAllDepartments();
      handleCloseEdit();
    }).catch((error) => {
        if (error) {
          console.log(error);
          alert(
            "Please check if the input values you have entered are proper!"
          );
        }
      });
  };

  const handleAdd = () => {
    const url =
      "https://localhost:7113/api/EmployeeHub/department/addDepartment";
    const data = {
      departmentName: departmentName,
    };

    axios
      .post(url, data)
      .then((result) => {
        getAllDepartments();
        handleCloseAdd();
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          alert(
            "Please check if the input values you have entered are proper!"
          );
        }
      });
  };

  return (
    <Box flex={5} p={2}>
      <Box container>
        <Box flex={5} p={2}>
          <Box>
            <Typography variant="h9" gutterBottom sx={{ fontStyle: "italic" }}>
              Edit Table{" "}
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Departments List{" "}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpenAdd}
            >
              Add Department
            </Button>
          </Box>
        </Box>
      </Box>

      <TableContainer sx={{ width: 550 }} component={Paper} elevation={4}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="1%">ID</TableCell>
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
                <TableCell>{row.departmentName}</TableCell>
                <TableCell colSpan={1} align="right">
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    size="small"
                    onClick={() => handleEdit(row.id)}
                  >
                    Edit
                  </Button>
                  &nbsp;
                  <Button
                    sx={{ bgcolor: "#ed4856" }}
                    variant="contained"
                    endIcon={<DeleteIcon />}
                    size="small"
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
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", marginBottom: 4 }}
          >
            Edit Department{" "}
          </Typography>

          <TextField
            onChange={(e) => setEditDepartmentName(e.target.value)}
            fullWidth
            id="outlined-helperText"
            label="Department Name"
            value={editDepartmentName}
            sx={{ marginBottom: 3 }}
          />
          <Stack>
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
              onClick={(e) => handleUpdate(e)}
            >
              Edit Department{" "}
            </Button>
          </Stack>
        </Box>
      </Modal>

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
            sx={{ fontWeight: "bold", marginBottom: 4 }}
          >
            Add Department{" "}
          </Typography>

          <TextField
            fullWidth
            id="outlined-helperText"
            label="Department Name"
            sx={{ marginBottom: 3 }}
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
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
              onClick={(e) => handleAdd(e)}
            >
              Add Department{" "}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default EditDepartments;
