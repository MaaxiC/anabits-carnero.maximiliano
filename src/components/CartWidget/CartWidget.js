import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Box from '@mui/material/Box';

function CartWidget() {
    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
                size="large" 
                color="inherit"
            >
            <Badge badgeContent={4} color='error'>
                <ShoppingCartCheckoutIcon />
            </Badge>
            </IconButton>
        </Box>
    );
}

export default CartWidget;