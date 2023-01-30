import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
export default function AddGroup() {
  const [openGroup, setOpenGroup] = React.useState(false);
  const handleOpenGroup = () => setOpenGroup(true);
  const handleCloseGroup = () => setOpenGroup(false);


  return (
    <>
      <Button variant="contained" onClick={handleOpenGroup} color={"primary"}>
        Guruh Qo'shish
      </Button>
      <Modal
        open={openGroup}
        onClose={handleCloseGroup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="w-[600px] max-w-[90%] min-h-[80vh] max-h-[95vh] bg-white absolute left-1/2 top-1/2 -translate-x-1/2 py-8 -translate-y-1/2 rounded-xl px-4 flex justify-center items-start flex-col gap-4 overflow-y-auto pt-[150px]">
          <div
            onClick={handleCloseGroup}
            className="duration-300 text-2xl hover:bg-gray-100 px-2 absolute top-5 right-5 cursor-pointer flex justify-center items-center"
          >
            <CloseIcon color="error" />
          </div>
          <h3>Yangi Guruh Qo'shish</h3>
          <TextField
            id="text"
            className="w-full"
            label="Nomi"
            variant="outlined"
          />
          <TextField
            id="price"
            className="w-full"
            label="Narxi"
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="course">Kursni Tanlang</InputLabel>
            <Select
              labelId="course"
              id="demo-simple-select"
              label="Kursni Tanlang"
            >
              <MenuItem value={"Front End"}>Front End</MenuItem>
              <MenuItem value={"Back End"}>Back End</MenuItem>
              <MenuItem value={"Grafik Dizayn"}>Grafik Dizayn</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="student">O'qituvchini Tanlang</InputLabel>
            <Select
              labelId="student"
              id="demo-simple-select"
              label="O'qituvchini Tanlang"
            >
              <MenuItem value={"Abdulloh"}>Abdulloh</MenuItem>
              <MenuItem value={"Saidakbar"}>Saidakbar</MenuItem>
              <MenuItem value={"Muhammad"}>Muhammad</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="room">Xonani Tanlang</InputLabel>
            <Select
              labelId="room"
              id="demo-simple-select"
              label="Xonani Tanlang"
            >
              <MenuItem value={"1-xona"}>1-xona</MenuItem>
              <MenuItem value={"2-xona"}>2-xona</MenuItem>
              <MenuItem value={"3-xona"}>3-xona</MenuItem>
              <MenuItem value={"4-xona"}>4-xona</MenuItem>
            </Select>
          </FormControl>
          <div className="w-full flex justify-between">
            <div>
              <p>Boshlanish Vaqti</p>
              <Input
                type={"time"}
                className="w-[200px] border rounded-md p-3"
              />
            </div>
            <div>
              <p>Tugash Vaqti</p>
              <Input
                type={"time"}
                className="w-[200px] border rounded-md p-3"
              />
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <p>Boshlanish sanasi</p>
              <Input
                type={"date"}
                className="w-[200px] border rounded-md p-3"
              />
            </div>
            <div>
              <p>Tugash sanasi</p>
              <Input
                type={"date"}
                className="w-[200px] border rounded-md p-3"
              />
            </div>
          </div>
          <Button variant="contained" color="success">
            Saqlash
          </Button>
        </Box>
      </Modal>
    </>
  );
}
