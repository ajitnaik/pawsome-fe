import { LoadingButton } from "@mui/lab"
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { Auth } from "aws-amplify"
import dynamic from "next/dynamic"
import { ShelterInfo } from "@/app/types"
// import RegisterShelter from "./RegisterShelter"

const RegisterShelter = dynamic(() => import('./RegisterShelter'))

interface ShelterDetailsProps {
    user: any,
    shelterInfo: ShelterInfo,
}

const ShelterDetails = (props: ShelterDetailsProps) => {
    console.log(props.shelterInfo)
    const [update, setUpdate] = useState(false);
    const [open, setOpen] = useState(false);
    const [isLoading, setLoadingState] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteShelter = async () => {
        setLoadingState(true)
        const baseUrl = 'https://eif0ltq2a2.execute-api.us-east-1.amazonaws.com/deleteShelter'
        const jsonBody = { username: props.shelterInfo.username };

        const response = await fetch(baseUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": props.user.signInUserSession.accessToken.jwtToken
            },
            body: JSON.stringify(jsonBody),
        });

        if (response.status == 409) {

        } else {
            window.location.reload()
        }
        setLoadingState(false)
    }

    if (update) {
        return <RegisterShelter user={props.user} shelterInfo={props.shelterInfo} isUpdate />
    }
    else {
        return (
            <>
                <Container>
                    <br />
                    <Typography variant="h4" gutterBottom textAlign={'center'}>
                        Your Shelter
                    </Typography>
                    <b>Instagram username: </b>{props.shelterInfo.username} <br /><br />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <b>Locations:  </b>{props.shelterInfo.locations.map((location) => {
                            return (<div style={{ marginRight: 5 }} key={location}>{location},</div>)
                        })}
                    </Box><br />
                    <Typography sx={{ wordWrap: "break-word" }} gutterBottom>
                        <b>Website: </b><a target="_blank" href={props.shelterInfo.website}>{props.shelterInfo.website}</a><br /><br />
                    </Typography>
                    <Typography sx={{ wordWrap: "break-word" }} gutterBottom>
                        <b>Adoption Process: </b><a target="_blank" href={props.shelterInfo.adoptionProcess}>{props.shelterInfo.adoptionProcess}</a> <br /><br />
                    </Typography>

                    <Typography sx={{ wordWrap: "break-word" }} gutterBottom>
                        <b>Application Form: </b><a target="_blank" href={props.shelterInfo.applicationUrl}>{props.shelterInfo.applicationUrl}</a><br /><br />
                    </Typography>
                    <Container>
                        <Stack spacing={2}>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                onClick={() => setUpdate(true)}
                            >Update Shelter</Button>
                            <Button
                                color="error"
                                variant="contained"
                                type="submit"
                                onClick={handleClickOpen}
                            >Delete Shelter</Button>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                onClick={() => {
                                    Auth.signOut();
                                }}
                            >Sign Out</Button>
                        </Stack>
                    </Container>

                </Container>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to remove shelter: <b>{props.shelterInfo.username}</b> ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>No</Button>
                        <LoadingButton
                            onClick={() => deleteShelter()}
                            loading={isLoading}
                            color="error"
                            autoFocus>
                            Yes
                        </LoadingButton>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}

export default ShelterDetails