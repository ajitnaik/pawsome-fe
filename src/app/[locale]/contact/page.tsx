import { Container, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Container>
        <br />
        <Typography textAlign="center" variant="h5" fontWeight="bold" gutterBottom>
          We would love to hear from you.
        </Typography>
        <Typography textAlign="center" sx={{ wordWrap: "break-word" }} variant="h6">
          Whether you are curious about features, have a complaint or feedback, want to work together, or anything else,<br />
          simply write to us at: <b><a href="mailto:info@pawsomesearch.com">info@pawsomesearch.com</a></b><br />
          We will get back to you within 24 hours
        </Typography>
      </Container>
    </div>
  )
}

export default Contact