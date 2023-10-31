import { useContext, useState } from 'react';
import { Box, Container, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SearchIcon from '@mui/icons-material/Search';
import { Pet } from "@/app/types";
import SelectPetType from './SelectPetType';
import dynamic from 'next/dynamic';
import { FindPetContext } from '@/app/contexts';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const LocationAutocomplete = dynamic(() => import('../LocationAutocomplete'))

const SearchForm = () => {
  const t = useTranslations('FindPet');

  const [locations, setLocations] = useState<string[]>([]);
  let { setPets, setIsAlertVisible } = useContext(FindPetContext);
  const [petType, setPetType] = useState('');
  const [isLoading, setLoadingState] = useState(false);
  const remote = true;

  const getPets = async () => {
    let pets = new Map<string, Pet>();
    console.log("Pets: " , pets)
    let petsAvailable = false
    setPets(new Map());
    setLoadingState(true)
    setIsAlertVisible(false)
    console.log(locations)
    const baseUrl = 'https://eif0ltq2a2.execute-api.us-east-1.amazonaws.com/pets?'
    var constructedUrl = baseUrl + 'location=' + locations[0] + "&petType=" + petType + "&remote=" + false
    fetch(constructedUrl)
      .then(response => response.json())
      .then(data => {
        if (Object.keys(data).length === 0) {
        } else {
          petsAvailable = true
          console.log(data)
          let newPets: Pet[] = data
          
          const updateMap = new Map<string, Pet>()
  
          for (const pet of newPets) {
            updateMap.set(pet.permalink, pet)
          }
  
          setPets(updateMap);
        }
      })
      .catch(error => {
        alert(error)
        setLoadingState(false)
        // Handle the error
      });

    if (remote) {
      await Promise.all(locations.map(async (location) => {
        constructedUrl = baseUrl + 'location=' + location + "&petType=" + petType + "&remote=" + remote
        await fetch(constructedUrl)
          .then(response => response.json())
          .then(data => {
            if (Object.keys(data).length === 0) {
            } else {
              petsAvailable = true
              console.log(data)

              let newPets: Pet[] = data
          
              const updateMap = new Map<string, Pet>()
      
              for (const pet of newPets) {
                updateMap.set(pet.permalink, pet)
              }
              setPets(new Map<string, Pet>([...pets,...updateMap]));
            }
          })
          .catch(error => {
            alert(error)
            setLoadingState(false)
            // Handle the error
          }).finally(
            () => {
              setLoadingState(false)
            }
          );
      })).finally(() => {
        console.log(petsAvailable)
        setIsAlertVisible(!petsAvailable)
      });
    } else {
      setLoadingState(false)
      setIsAlertVisible(!petsAvailable)
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 4,
        flexDirection: 'column',
      }}>
      <Typography variant="h3" textAlign={'center'}>
      {t('title')}
      </Typography>
      <LocationAutocomplete setLocations={setLocations} />
      <SelectPetType petType={petType} setPetType={setPetType} />
      {/* <FormControlLabel
        control={
          <Checkbox checked={remote} onChange={(e) => setRemote(e.target.checked)} />
        }
        label={I18n.get("Show pets from remote shelters")} /> */}
      <LoadingButton
        color="primary"
        variant="contained"
        type="submit"
        disabled={(locations.length === 0 || !petType) ? true : false}
        onClick={() => getPets()}
        loading={isLoading}
        loadingPosition="start"
        startIcon={<SearchIcon />}
      >
        <span>{t('search')}</span>
      </LoadingButton>
      <Container sx={{ textAlign: 'center' }}>
      {t('recommendation')}: <Link href={"blog/findingyourperfectpet"}>Finding your Perfect Pet</Link>
      </Container>
    </Box>
  );
}

export default SearchForm;