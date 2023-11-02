import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    return (
        <div>
            <br />
            <Container>
                <Typography variant="h5" gutterBottom textAlign={'center'} fontWeight="bold">
                    Frequently Answered Questions
                </Typography>
                <Typography id='shelters' variant="h6" gutterBottom fontWeight="bold">
                    Shelters:
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h6">1. How do I sign-up as a shelter ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Go to <b><Link href={"/shelter"}>Shelter</Link></b>. Create an account using your email address and enter the details of your shelter.
                            Note: Your shelter should have a business Instagram account. Switching to business Instagram account is very easy.
                            Just follow the process described here: <b><a target="_blank" href="https://help.instagram.com/502981923235522">Instagram switch to Business account</a></b>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h6">2. What are the fees to use the platform ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Currently, there are no fees to use the platform. This platform is self-funded solely out of our love for animals.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h6">3. How do I share my adoption post on this platform ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Once you have registered and your instagram account is verified, you will be able to share the adoption posts on this platform.
                            To label a post as an adoption post and share it on the platform, you'll have to: <br />
                            1. Mention <b>@pawsomesearch</b> in the post caption<br />
                            2. Use <b>#dog</b> or <b>#cat</b> in the caption.<br />
                            Once the post is published on Instagram, it will appear on the platform within an hour.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h6">4. Why does my instagram post doesn't appear in the search results ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            As the platform checks for new Instagram posts every hour, it can take upto one hour for the post to appear on the platform.
                            Also make sure that the post mentions <b>@pawsomesearch</b> and has either <b>#dog</b> or <b>#cat</b>.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h6">5. How do I update my data ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You can update some of the data in <b><Link href={"/shelter"}>Shelter</Link></b>. Update to data like your Instagram username or locations needs to be verified before it can be updated. For that, please reach out to us at <b><a href="mailto:info@pawsomesearch.com">info@pawsomesearch.com</a></b> .
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <br />

                <Typography variant="h6" gutterBottom fontWeight="bold">
                    Adopters:
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h6">1. How do I search for my pawsome pet ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Go to <b><Link href={"/"}>Find a Pet</Link></b>
                            . Enter the City, State or Country where you are looking for a pet.
                            Select <b>Dog</b> or <b>Cat</b> and click <b>Search</b>.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="h6">2. Are the shelters verified ? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Shelters are currently manual verified to ensure their ethical standards. If you encounter a shelter that doesn't meet these standards, please reach out to us.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="h6">3. How does the platform make money ? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We don't make any money. This platform is self-funded solely out of our love for animals.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="h6">4. What user data is tracked ? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We use Google Analytics to track user interaction, and it will be utilized to enhance the platform.
                            Note: When you visit the Instagram page, Instagram will track your data.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="h6">5. I still have questions/feedback. How can I contact you ? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Please reach out to us at <b><a href="mailto:info@pawsomesearch.com">info@pawsomesearch.com</a></b>.
                            We would be happy to hear from you
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="h6">4. I saw an post from an unethical shelter. How do I report it ? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Please reach out to us at <b><a href="mailto:info@pawsomesearch.com">info@pawsomesearch.com</a></b>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <br />
            </Container>
        </div>
    )
}

export default FAQ