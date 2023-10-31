// import MultipleLocationSelector from "../components/MultipleLocationSelector";
import SuccessDialog from "../components/SuccessDialog";
import { Auth } from "aws-amplify";
import LoadingButton from "@mui/lab/LoadingButton";
import { Container, Grid, Typography, FormControl, Stack, TextField, FormControlLabel, Checkbox, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { FormEvent, useState } from "react";
import dynamic from "next/dynamic";
import { ShelterInfo } from "@/app/types";
import { getPlaces } from "@/app/AutocompleteApi";


const MultipleLocationSelector = dynamic(() => import('../components/MultipleLocationSelector'))

interface RegisterShelterProps {
    user: any,
    shelterInfo: ShelterInfo,
    isUpdate: boolean,
}

const RegisterShelter = (props: RegisterShelterProps) => {

    const [locationIds, setLocationIds] = useState<string[]>([]);
    const [locationLabels, setLocationLabels] = useState<string[]>([]);
    const [username, setUsername] = useState<string>(props.shelterInfo.username);
    const email = props.user.attributes.email;
    const [website, setWebsite] = useState<string>(props.shelterInfo.website);
    const [url, setUrl] = useState<string>(props.shelterInfo.applicationUrl);
    const [adoptionProcess, setAdoptionProcess] = useState<string>(props.shelterInfo.adoptionProcess);
    const [dialogMessage, setDialogMessage] = useState<string>("");
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isLoading, setLoadingState] = useState(false);
    const [remote, setRemote] = useState(props.shelterInfo.remote);

    let places: string[] = []

    const handleAccept = async (user: any) => {
        setLoadingState(true)
        places = []

        await Promise.all(locationIds.map(async (id) => {places.push(...(await getPlaces(id)))}))
        console.log(places)

        if (props.isUpdate) {
            places = props.shelterInfo.locations
        }
        const baseUrl = 'https://eif0ltq2a2.execute-api.us-east-1.amazonaws.com/createShelter'

        const jsonBody = { username: username, locations: places, email: email, url: url, website: website, adoptionProcess: adoptionProcess, remote: remote };

        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": user.signInUserSession.accessToken.jwtToken
            },
            body: JSON.stringify(jsonBody),
        });

        if (response.status == 409) {
            setDialogMessage(`Instagram username: ${username} is already registered. If you are the owner, please contact info@pawsomesearch.com to update your information.`)
        } else {
            if (props.isUpdate) {
                setDialogMessage("Shelter details updated")
            } else {
                setDialogMessage("Success! We will send a message to the provided Instagram username to verify the account. Once verified, your instagram posts will be visible on this platform.")
            }
        }

        console.log(response)
        setLoadingState(true)
        setOpen(false);
        setSuccess(true)
        //window.location.reload();
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setOpen(true);

    }

    return (
        <>
            <Container>
                <Grid
                    display="flex"
                    justifyContent="center"
                    direction="column"
                    minHeight="90vh"
                    container
                    alignItems="center">
                    <Container>
                        <Typography variant="h4" gutterBottom textAlign={'center'}>
                        Enter your shelter details and select the locations where your Pets would be available for adoption
                        </Typography>
                    </Container>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <Stack spacing={2}>
                                <TextField
                                    required
                                    disabled={props.isUpdate}
                                    value={username}
                                    label="Instagram username"
                                    onChange={(e) => setUsername(e.target.value)}
                                ></TextField>
                                {
                                    props.isUpdate ? (
                                        <TextField
                                            required
                                            disabled={true}
                                            value={props.shelterInfo.locations}
                                            label="Locations"
                                        ></TextField>
                                    ) :
                                        (<MultipleLocationSelector setLocationIds={setLocationIds} setLocationLabels={setLocationLabels} />)
                                }
                                <TextField
                                    inputMode="url"
                                    type={"url"}
                                    value={website}
                                    label="Website"
                                    onChange={(e) => setWebsite(e.target.value)}
                                ></TextField>
                                <TextField
                                    inputMode="url"
                                    type={"url"}
                                    value={adoptionProcess}
                                    label="adoptionProcessLink"
                                    onChange={(e) => setAdoptionProcess(e.target.value)}
                                ></TextField>
                                <TextField
                                    inputMode="url"
                                    type={"url"}
                                    value={url}
                                    label="applicationFormLink"
                                    onChange={(e) => setUrl(e.target.value)}
                                ></TextField>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={remote} onChange={(e) => setRemote(e.target.checked)} />
                                    }
                                    label="Check if you are a remote shelter and can transport animals to the selected locations"/>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                    disabled={((locationIds.length == 0 && !props.isUpdate) || !username) ? true : false}
                                >"Submit"</Button>
                                <Button variant="contained" onClick={() => window.location.reload()}>
                                    "Reset"
                                </Button>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                    onClick={() => {
                                        Auth.signOut();
                                    }}
                                >Sign Out</Button>
                            </Stack>

                        </FormControl>
                    </form>
                </Grid>
            </Container>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center' }}>
                    {"Confirm details: "}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ wordWrap: "break-word" }} id="alert-dialog-description">
                        <b>Instagram username: </b> <br /> {username} <br /><br />
                        <b>Locations: </b><br />{
                            props.isUpdate ?
                                props.shelterInfo.locations.map((label) => {
                                    return <i key={label}>{label}<br /></i>
                                }) :
                                (locationLabels.map((label) => {
                                    return <i key={label}>{label}<br /></i>
                                }))
                        }
                        <br />
                        <b>Website: </b>{website}<br /><br />
                        <b>adoptionProcessLink: </b>{adoptionProcess}<br /><br />
                        <b>applicationFormLink: </b>{url}

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={() => setOpen(false)} autoFocus>
                        Cancel
                    </Button>
                    <LoadingButton
                        variant="contained"
                        onClick={() => {handleAccept(props.user)}}
                        loading={isLoading}
                        autoFocus>
                        OK
                    </LoadingButton>
                </DialogActions>
            </Dialog>
            {success && <SuccessDialog message={dialogMessage} />}
        </>
    )

}

export default RegisterShelter