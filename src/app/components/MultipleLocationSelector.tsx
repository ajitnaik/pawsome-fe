import { Dispatch, SetStateAction, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { getSuggestions } from '../AutocompleteApi';

interface MultipleLocationSelectorProps {
    setLocationIds: Dispatch<SetStateAction<string[]>>,
    setLocationLabels: Dispatch<SetStateAction<string[]>>,
  }

const MultipleLocationSelector = (props: MultipleLocationSelectorProps) => {

    const [options, setOptions] = useState<{ id: string, label: string }[]>([]);
    var locationIds = []
    var locationLabels: string[] = []
    

    const onSelect = async (locations: (string | { id: string, label: string })[]) => {

        locationIds = []
        locationLabels = []
        for (const location of locations) {
            if (location == null || (typeof location === 'string')) {
                
            } else {
                locationIds.push(location.id)
                locationLabels.push(location.label)
            }

        }
        console.log(locationIds)
        props.setLocationIds(locationIds)
        props.setLocationLabels(locationLabels)
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
            multiple
            options={options}
            onChange={(_event, newValue) => {
                onSelect(newValue);
            }}
            onInputChange={(_event, newInputValue) => {
                onChange(newInputValue);
            }}
            isOptionEqualToValue={(option, value) => option.label === value.label}
            filterOptions={(x) => x}
            renderInput={(params) => <TextField {...params} label="Locations" placeholder="You can select more than one" />}
        />
    );
}

export default MultipleLocationSelector