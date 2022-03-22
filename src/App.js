import React from 'react';
import './App.css';
import NavBar from './components/Navigation/NavBar/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Notification from './components/Notification/Notification'

const theme = createTheme({
  palette: {
    primary: {
      main: '#573391',
    },
    secondary: {
      main: '#5902EC',
    },
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Notification/>
      </ThemeProvider>
    </div>
  );
}

export default App;