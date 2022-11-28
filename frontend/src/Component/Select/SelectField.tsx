import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Category } from "../../Data/Dummy/Category";
import { useState } from "react";

interface formData {
  value: string;
  onChange: any;
  name: string;
  helperText: any;
  error: any;
  label: string;
  type: string;
  getData: any;
}
const SelectField = ({
  value,
  onChange,
  name,
  helperText,
  error,
  label,
  type,
  getData,
}: formData) => {
  const [age, setAge] = React.useState<string | number>("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    console.log("actual value", event.target.value);
    setAge(event.target.value);
    getData(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Button sx={{ display: "block", mt: 2 }} onClick={handleOpen}>
        select your category
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
        <Select
          sx={{
            width: {
              lg: "600px",
              xs: "300px",
            },
          }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Category"
          onChange={handleChange}
        >
          {Category.map((item) => {
            return (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
