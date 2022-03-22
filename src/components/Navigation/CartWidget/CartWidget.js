import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';


function CartWidget({products}) {
    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
                size='large' 
                color='inherit'
            >
            <Badge badgeContent={products} color='error'>
                <ShoppingCartIcon />
            </Badge>
            </IconButton>
        </Box>
    );
}

export default CartWidget;