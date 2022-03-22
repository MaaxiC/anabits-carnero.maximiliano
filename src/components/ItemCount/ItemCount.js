import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import '../ItemCount/ItemCount.css';
import IconButton from '@mui/material/IconButton';
import Notification from '../Notification/Notification'

const ItemCount = ({stock, initial, onAdd, setProducts}) => {
    const [count, setCount] = useState(1);

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
    }
  
      setOpen(false);
    };

    const handleClick = () => {
        setOpen(true);
      };

    const Alert = () => {
        handleClick();
        onAdd(count, setCount);
        productsHandler(count);
    }

    const productsHandler = (count) => {

        setProducts(count);
        
    }

    return (
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
                <Notification open={open} handleClose={handleClose} />
            </ButtonGroup>
        </div>
    );
}

export default ItemCount;