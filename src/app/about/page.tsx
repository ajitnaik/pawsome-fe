import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import LunaPic from './luna.jpg'

const About = () => {
  return (
    <div>
      <Container>
        <br />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', rowGap: 2 }}>
          <Image src={LunaPic} alt="Luna Image" sizes="100vw" style={{ borderRadius: '30%', width: '50%', height: '50%'}} />
          <Typography textAlign="justify" sx={{ wordWrap: "break-word" }} gutterBottom paragraph>
            Greetings, I'm Ajit—a dedicated animal enthusiast who has been fortunate to gain diverse experiences working with a wide array of creatures.
            My journey has taken me from the streets of India, where I connected with stray dogs, to the heart of the United States, where I volunteered at an animal shelter, and even to Germany, where I provided pet sitting services.
            These incredible encounters have provided me with valuable insights and knowledge, teaching me profound lessons about the beauty of the animal kingdom.
            Now, I'm excited to share my passion and expertise on this platform as a way of giving back to these remarkable beings.
            My time spent at the shelter, coupled with the stories of adoption shared by my pet sitting clients and friends, revealed a common challenge—the adoption process can be quite challenging.
            Animal shelters invest significant effort into promoting their adoptable pets, while potential adopters struggle to identify which animals are currently available for adoption.
            Through this platform, my aim is to bridge this gap and facilitate connections between these wonderful animals and their forever homes.
            I aspire to make the adoption process smoother and more efficient for both the shelters and the prospective pet parents, ensuring that these lovely creatures find their lifelong companions much more quickly.
            Together, we can make a difference in the lives of these deserving animals.
          </Typography>
        </Box>

      </Container>
    </div>
  )
}

export default About