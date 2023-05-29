import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#000", color: "#fff" }}
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit user Deatails</DialogContentText>
          <TextField
            id="outlined-basic"
            label="FirstName"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="LastName"
            variant="outlined"
            fullWidth
          />
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            variant="standard"
          />
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            fullWidth
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
