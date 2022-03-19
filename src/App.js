import React from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar body={<ItemListContainer/>}>
          <CartWidget/>
        </NavBar>
      </ThemeProvider>
    </div>
  );
}

export default App;