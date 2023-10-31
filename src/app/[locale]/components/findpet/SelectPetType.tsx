import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

interface SelectPetTypeProps {
    petType: string,
    setPetType: Dispatch<SetStateAction<string>>,
  }

const SelectPetType = (props: SelectPetTypeProps) => {
    const t = useTranslations('FindPet');

    return (
        <FormControl sx={{ width: 300 }}>
        <InputLabel id="simple-select-label">{t('petType')}</InputLabel>
        <Select
            labelId="simple-select-label"
            id="demo-simple-select"
            value={props.petType}
            label={t('petType')}
            onChange={(e) => props.setPetType(e.target.value)}
        >
            <MenuItem value={'Dog'}>{t('dog')} 🐶</MenuItem>
            <MenuItem value={'Cat'}>{t('cat')} 🐱</MenuItem>
        </Select>
        </FormControl>
    );
}

export default SelectPetType;