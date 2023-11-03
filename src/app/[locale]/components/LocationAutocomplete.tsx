import { Dispatch, SetStateAction, useState } from 'react';
import { Alert, AlertTitle, Autocomplete, Link, TextField } from '@mui/material';
import { getPlaces, getSuggestions } from '@/app/AutocompleteApi';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';

interface LocationAutocompleteProps {
  setLocations: Dispatch<SetStateAction<string[]>>,
}

const LocationAutocomplete = (props: LocationAutocompleteProps) => {

  const t = useTranslations('FindPet');
  const [options, setOptions] = useState<{ id: string, label: string }[]>([]);
  const [instagramConsent, setInstagramConsent] = useState(true);

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
    const cookieStatus = JSON.parse(localStorage.getItem('TERMLY_API_CACHE') || '{}');
    const instagramCookie = cookieStatus['TERMLY_COOKIE_CONSENT']['value']['social_networking']
    setInstagramConsent(instagramCookie)
    if (!instagramCookie) {
      setTimeout(() => {
        setInstagramConsent(true);
      }, 10000);
    }
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
    <>
      {!instagramConsent ? (
        <Alert
          severity="warning"
        >
          <AlertTitle>Warning</AlertTitle>
          {t('enableInstagram')}
          <br/>
          <Link color="inherit" component={NextLink} href="#" 
            onClick={() => {
                (window as any).displayPreferenceModal();
                return false;
            }}>Cookies</Link>
          </Alert>
      ) : null}
      <Autocomplete
        freeSolo={true}
        id="combo-box-demo"
        options={options}
        style={{ backgroundColor: 'white', borderRadius: '6px' }}
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
        renderInput={(params) => <TextField {...params} label={t('location')} />}
      />
    </>
  );
}

export default LocationAutocomplete;