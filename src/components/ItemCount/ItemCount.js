import * as React from 'react';
import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import '../ItemCount/ItemCount.css';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import ThemeContext from '../../context/ThemeContext';


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(1);

    const { theme } = useContext(ThemeContext);

    const Alert = () => {
        onAdd(count);
    }

    return (
        <ThemeProvider theme={theme}>
        <div className='button-group'>
            <ButtonGroup>
                <Button
                    aria-label='reduce'
                    onClick={() => {
                    setCount(Math.max(count - 1, 0));
                    }}
                    disabled={count === initial ? true : null}
                >
                    <RemoveIcon fontSize='small' />
                </Button>
                <Button
                    aria-label='increase'
                    onClick={() => {
                    setCount(count + 1);
                    }}
                    disabled={count === stock ? true : null}
                >
                    <AddIcon fontSize='small' />
                </Button>
                <div className='cart-count'>
                    <IconButton
                    size='small'
                    color='inherit'
                    onClick={() => Alert()}
                    >
                        <Badge color='primary' badgeContent={count}>
                            <AddShoppingCartIcon fontSize='medium' />
                        </Badge>
                    </IconButton>
                </div>
            </ButtonGroup>
        </div>
        </ThemeProvider>
    );
}

export default ItemCount;