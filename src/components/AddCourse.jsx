import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function AddCourse() {
  const [openCourse, setOpenCourse] = React.useState(false);

  const handleOpenCourse = () => setOpenCourse(true);
  const handleCloseCourse = () => setOpenCourse(false);
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpenCourse}>
        Kurs Qo'shish
      </Button>
      <Modal
        open={openCourse}
        onClose={handleCloseCourse}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="w-[600px] max-w-[90%] min-h-[80vh] bg-white absolute left-1/2 top-1/2 -translate-x-1/2 py-8 -translate-y-1/2 rounded-xl p-4 flex justify-center items-start flex-col gap-4">
          <div
            onClick={handleCloseCourse}
            className="duration-300 text-2xl hover:bg-gray-100 p-2 absolute top-5 right-5 cursor-pointer flex justify-center items-center"
          >
            <CloseIcon color="error" />
          </div>
          <h3>Kurs Yaratish</h3>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Mavzuni Tanlang
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Mavzuni Tanlang"
            >
              <MenuItem value={"Dasturlash"}>Dasturlash</MenuItem>
              <MenuItem value={"Amaliy-Fanlar"}>Amaliy Fanlar</MenuItem>
              <MenuItem value={"Tabiiy-Fanlar"}>Tabiiy Fanlar</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="text"
            className="w-full"
            label="Kurs Nomi"
            variant="outlined"
          />
          <TextField
            id="text"
            className="w-full"
            label="Kurs Narxi"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="success"
            onClick={handleCloseCourse}
          >
            Yaratish
          </Button>
        </Box>
      </Modal>
    </>
  );
}
