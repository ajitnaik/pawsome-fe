"use client";
import { useState } from "react";
import { Alert, Box, Button, Container, Stack } from "@mui/material";
import EmbedInstagram from "../EmbedInstagram";
import { Pet } from "@/app/types";
import SearchForm from "./SearchForm";
import { FindPetContext } from "@/app/contexts";

const FindPet = () => {

    const [pets, setPets] = useState(new Map<string, Pet>());
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    return (
        <Box>
            {isAlertVisible ? (
                <Alert
                    sx={{ textAlign: 'center' }}
                    severity="info"
                    onClose={() => setIsAlertVisible(false)}
                >NoAnimalsFound</Alert>
            ) : null}

            <FindPetContext.Provider value={{ pets, setPets, isAlertVisible, setIsAlertVisible }}>
                <SearchForm />
            </FindPetContext.Provider>
            {
                pets.size === 0 ? (
                    <>
                        <Container component="img" src="/images/background.svg" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', height: '70%', width: '70%' }} />
                        <Container component="img" src="/images/background.svg" sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'center', height: '70%', width: '70%' }} />
                    </>
                ) : null
            }
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {[...pets.keys()].map((key) => {
                    let pet = pets.get(key)!
                    return (
                        <Stack key={key} spacing={1} padding={3} paddingInline={6}>
                            <EmbedInstagram url={pet.permalink} key={pet.permalink} />
                            {(pet.adoptionProcess) ?
                                <Button variant="contained" target="_blank" href={pet.adoptionProcess}>Adoption Process"</Button> :
                                <Button variant="contained" disabled={true}>Adoption Process</Button>}
                            {(pet.applicationUrl) ?
                                <Button variant="contained" target="_blank" href={pet.applicationUrl}>Apply</Button> :
                                <Button variant="contained" disabled={true}>Visit the Instagram page to apply</Button>}
                        </Stack>
                    )
                })}
            </Box>
        </Box>
    );
}

export default FindPet;