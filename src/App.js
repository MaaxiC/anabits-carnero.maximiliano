import React from 'react';
import './App.css';
import NavBar from './components/Navigation/NavBar/NavBar';
import Footer from './components/Footer/Footer';
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
//context
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className='App'>
      <CartProvider >
        <ThemeProvider >
          <BrowserRouter>
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
              <Footer/>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;