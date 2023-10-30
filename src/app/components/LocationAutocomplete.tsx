import { Dispatch, SetStateAction, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { getPlaces, getSuggestions } from '../AutocompleteApi';

interface LocationAutocompleteProps {
  setLocations: Dispatch<SetStateAction<string[]>>,
}

const LocationAutocomplete = (props: LocationAutocompleteProps) => {

   const [options, setOptions] = useState<{ id: string, label: string }[]>([]);

  const onSelect = async (option: { id: string, label: string }) => {
    const { label } = option;
    const { id } = option;
    console.log(label)
    console.log(id)

    const places = await getPlaces(id)
    props.setLocations(places);
    console.log(places);
  };

  const onChange = async (event: string) => {
    if (event.length < 3) return;
    const result = await getSuggestions(event);
    const newOptions = [];

    if (!result) {
      return;
    }

    for (var data of result) {
      newOptions.push({ id: data.PlaceId!, label: data.Text! })
    }
    setOptions(newOptions);
  };

  return (
    <Autocomplete
      freeSolo={true}
      id="combo-box-demo"
      options={options}
      style={{ backgroundColor: 'white', borderRadius: '6px'}}
      sx={{ width: 300 }}
      onChange={(event, newValue) => {
        if (newValue == null || (typeof newValue === 'string')) {
          props.setLocations([]);

        } else {
          onSelect(newValue);
          setOptions([]);
        }
      }}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      onInputChange={(event, newInputValue) => {
        onChange(newInputValue);
      }}
      filterOptions={(x) => x}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
  );
}

export default LocationAutocomplete;