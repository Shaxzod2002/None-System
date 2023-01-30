import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function AddStudent() {
  const [openStudent, setOpenStudent] = React.useState(false);

  const handleOpenStudent = () => setOpenStudent(true);
  const handleCloseStudent = () => setOpenStudent(false);
  return (
    <>
      <Button variant="contained" onClick={handleOpenStudent} color={"primary"}>
        O'quvchi Qo'shish
      </Button>
      <Modal
        open={openStudent}
        onClose={handleCloseStudent}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="w-[600px] max-w-[90%] min-h-[80vh] bg-white absolute left-1/2 top-1/2 -translate-x-1/2 py-8 -translate-y-1/2 rounded-xl p-4 flex justify-center items-start flex-col gap-4">
          <div
            onClick={handleCloseStudent}
            className="duration-300 text-2xl hover:bg-gray-100 px-2 absolute top-5 right-5 cursor-pointer flex justify-center items-center"
          >
            <CloseIcon color="error" />
          </div>
          <h3>Talaba Qo'shish</h3>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Talabani tanlang
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Talabani tanlang"
            >
              <MenuItem value={"Abdulloh"}>Abdulloh</MenuItem>
              <MenuItem value={"Saidakbar"}>Saidakbar</MenuItem>
              <MenuItem value={"Muhammad"}>Muhammad</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Status"
            >
              <MenuItem value={"Faol"}>Faol</MenuItem>
              <MenuItem value={"Faol"}>Sinov Darsi</MenuItem>
            </Select>
          </FormControl>
          <Input type={"date"} className="w-full border rounded-md p-3" />
          <Button variant="contained" color="success">
            Yangi qo'shish
          </Button>
        </Box>
      </Modal>
    </>
  );
}
