import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function AboutUs() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 500, marginTop: 10, boxShadow: 5, marginBottom: 18, }}>
        <CardMedia
          component="img"
          height="300"
          image="https://sistemasgeniales.com/wp-content/uploads/2022/01/reactjs.jpg"
          alt="about-us"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            About Us
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            Anabits
          </Typography>
          <Typography variant="body1" color="text.secondary">
              It is an ecommerce of audio components created with the purpose of showing the knowledge acquired during the
              React course by CoderHouse.
              It uses MUI as the UI library to provide a simple and visually elegant user experience based
              on the principle of Material Design.
              At the same time, it integrates routing to browse the page quickly and comfortably with categories and the id of the item as well as promises and loaders to
              emulate the network delays generated by the response from the backend.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutUs;