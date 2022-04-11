import React from 'react';
import '../Footer/Footer.css'
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

function Footer() {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <div className={`footer ${lightTheme ? 'dark-mode' : ''}`}>
        <Typography variant="body4" color="white" component="h3">
            Anabits e-commerce. Copyright © 2022.
        </Typography>
    </div>
  );
}

export default Footer;