import React from 'react';
import Container from '@mui/material/Container';

function NotFound() {
  return (
    <Container sx={{ marginTop: 20, marginBottom: 17}} >
        <img src='https://flywheelmkt.com/wp-content/uploads/2020/10/404error.png' alt='ERROR 404 - Page not found' width='100%' />
    </Container>
  );
}

export default NotFound;