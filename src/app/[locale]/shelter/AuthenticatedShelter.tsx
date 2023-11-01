import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ShelterDetails from "./ShelterDetails";
import dynamic from "next/dynamic";
import { ShelterInfo } from "@/app/types";

const RegisterShelter = dynamic(() => import('./RegisterShelter'))

const AuthenticatedShelter = ({ user }: { user: any }) => {
    const [registerShelter, setRegisterShelter] = useState(true);
    const [shelter, setShelterDetails] = useState<ShelterInfo>();
    const [openBackdrop, setOpenBackdrop] = useState(false);
  
    useEffect(() => {
        setOpenBackdrop(true)
        const getAccount = (user: any) => {
            const baseUrl = 'https://eif0ltq2a2.execute-api.us-east-1.amazonaws.com/getAccount'
            fetch(baseUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": user.signInUserSession.accessToken.jwtToken
                },
            }).then(response => response.json())
                .then(data => {
                    if (Object.keys(data).length === 0) {
                        console.log("Account has no shelter")
                        setRegisterShelter(true)
                        return null
                    } else {
                        console.log("Account has shelter")
                        // setShelterDetails(data[0])
                        setRegisterShelter(false)
                        setShelterDetails(data[0])
                        return data[0]
                    }
                })
                .catch(error => {
                    alert(error)
                    // Handle the error
                })
                .finally(
                    () => setOpenBackdrop(false)
            );
        }
        getAccount(user)
        // do stuff here...
    }, []) // 
  
    if (openBackdrop) {
        return (
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openBackdrop}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
        )
    } else {
        if (registerShelter) {
            const shelterInfo: ShelterInfo = {
                username: "",
                website: "",
                adoptionProcess: "",
                applicationUrl: "",
                locations: [],
                remote: false,
            }
            return <RegisterShelter user={user} shelterInfo={shelterInfo} isUpdate={false} />
    
        } else {
            console.log(shelter)
            console.log(user.attributes.email)
            return <ShelterDetails user={user} shelterInfo={shelter!} />
        }
    }
  }

  export default AuthenticatedShelter