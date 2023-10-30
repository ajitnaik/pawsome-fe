import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface SelectPetTypeProps {
    petType: string,
    setPetType: Dispatch<SetStateAction<string>>,
  }

const SelectPetType = (props: SelectPetTypeProps) => {
    return (
        <FormControl sx={{ width: 300 }}>
        <InputLabel id="simple-select-label">Dog / Cat ?</InputLabel>
        <Select
            labelId="simple-select-label"
            id="demo-simple-select"
            value={props.petType}
            label="Dog / Cat ?"
            onChange={(e) => props.setPetType(e.target.value)}
        >
            <MenuItem value={'Dog'}>Dog</MenuItem>
            <MenuItem value={'Cat'}>Cat</MenuItem>
        </Select>
        </FormControl>
    );
}

export default SelectPetType;