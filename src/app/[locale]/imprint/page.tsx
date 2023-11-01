import { Container, Typography } from '@mui/material'
import React from 'react'

const Imprint = () => {
  return (
    <div>
      <br />

      <Container>
        <Typography textAlign="center" variant="h5" fontWeight="bold" gutterBottom>
          IMPRINT
        </Typography>
        <Typography textAlign="center" sx={{ wordWrap: "break-word" }} variant="h6">
          <b>PawsomeSearch</b><br />
          <b>Represented by: </b>AJIT MARUTI NAIK<br />
          <b>Email: </b>info@pawsomesearch.com<br />
          <b>Phone: </b>+49016091987167<br />
          <b>Address: </b> Alte Jakobstrasse 78A, 10179 Berlin, Germany
        </Typography>
      </Container>
    </div>
  )
}

export default Imprint