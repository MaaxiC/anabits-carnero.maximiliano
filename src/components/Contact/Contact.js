import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Container from '@mui/material/Container';


function Contact() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 510, marginTop: 10, boxShadow: 5, marginBottom: 15, }}>
        <CardMedia
          component="img"
          height="300"
          image="https://lirp.cdn-website.com/cc407b53/dms3rep/multi/opt/1500+x+750-495980fb-1920w.jpg"
          alt="contact-us"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Contact Us
          </Typography>
          <Box
              component="form"
              sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
          >
              <TextField
                  required
                  id="First-Name"
                  label="First Name"
                  variant="filled"
              />
              <TextField
                  required
                  id="Last-Name"
                  label="Last Name"
                  variant="filled"
              />
              <TextField
                  required
                  id="Email"
                  label="Email"
                  variant="filled"
              />
              <TextField
                  id="Reason"
                  label="Reason"
                  helperText="Optional"
                  variant="filled"
              />
          </Box>
          <TextField
              required
              id="Message"
              label="Message"
              multiline
              maxRows={6}
              variant="filled"
              sx={{ m: 1, width: '52ch'}}
          />
          <Button variant="contained" endIcon={<SendIcon />} sx={{ m: 1, width: '59.5ch', marginTop: 2 }} >
              Send
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Contact;