import { createContext, useState, useEffect } from "react";
import { createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [lightTheme, setLightTheme] = useState(false);
    const [theme, setTheme] = useState(false);

    useEffect( () => {
        setTheme(defaultTheme);
    }, [])
    
    const defaultTheme = createTheme({
        palette: {
        primary: {
            main: '#573391',
        },
        secondary: {
            main: '#5902EC',
        },
        },
    });

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#121212',
            },
            secondary: {
                main: '#573391',
            },
        },
    });

    const handleTheme = () => {
        setLightTheme(!lightTheme);
        lightTheme ? (
            setTheme(defaultTheme)
        ) : (
            setTheme(darkTheme)
        )
    }

    const data = {
        lightTheme,
        handleTheme,
        theme
    }

    return (
        <ThemeContext.Provider value={data} >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider };
export default ThemeContext;