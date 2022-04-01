import React from 'react';
import './App.css';
import NavBar from './components/Navigation/NavBar/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import HomePage from './pages/Home';
import ContactPage from './pages/ContactInfo';
import AboutUsPage from './pages/About';
import FavoritesPage from './pages/Favorit';
import CategoryPage from './pages/Category';
import NotFound from './pages/NotFound';
import DetailPage from './pages/Detail';
import CartPage from './pages/Cart';

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
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <HomePage/> } />
            <Route path='/:category/' element={ <CategoryPage/>} />
            <Route path='/:category/:id' element={ <DetailPage/> } />
            <Route path='/favorites' element={ <FavoritesPage/> } />
            <Route path='/aboutus' element={ <AboutUsPage/> } />
            <Route path='/contact' element={ <ContactPage/> } />
            <Route path='/cart' element={ <CartPage/> } />
            <Route path='*' element={ <NotFound/> } />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;