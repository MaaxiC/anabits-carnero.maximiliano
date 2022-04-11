import * as React from 'react';
import { useState, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import CartContext from '../../../context/CartContext';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider } from '@mui/material/styles';
import ThemeContext from '../../../context/ThemeContext';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';

function CartWidget() {
    const { theme } = useContext(ThemeContext);

    const { cartProducts, removeProduct, total } = useContext(CartContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const menuId = 'cart-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            keepMounted
            open={open}
            onClose={handleClose}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{vertical: 'top', horizontal: 'center'}}
        >
            <Paper sx={{ width: 300, marginBottom: -1 }} >
                <MenuList dense>
                    <Typography gutterBottom variant="h5" component="div" textAlign={"center"} >
                        Cart
                    </Typography>
                    <Divider />
                    {cartProducts.map( (cartProduct) => {
                        return(
                            <ThemeProvider theme={theme} key={cartProduct.id}>
                                <MenuItem>
                                    <div>
                                        <img src={cartProduct.image} alt={"item"} width='80%'/>
                                    </div>
                                    <div>
                                        <ListItemText style={{ textAlign: "right" }}>{cartProduct.title}</ListItemText>
                                        <ListItemText style={{ textAlign: "right" }}>{`US$ ${cartProduct.price}`}</ListItemText>
                                        <ListItemText style={{ textAlign: "right" }}>{`Quantity: ${cartProduct.quantity}`}</ListItemText>
                                    </div>
                                    <div>
                                        <IconButton 
                                            onClick={() => removeProduct(cartProduct)}
                                            color='primary'
                                            sx={{ padding: 1.5 }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </MenuItem>
                            </ThemeProvider>
                        )
                    })}
                    <Divider />
                    <Typography variant="h5" component="div" margin={1.5} textAlign="right" >
                        Total: US$ {total}
                    </Typography>
                    <Divider />  
                    <Box textAlign='center'>
                        <Button 
                            variant='contained'
                            theme={theme}
                            sx={{ margin: 1.5, paddingInline: 12 }}
                            component={Link} to={'/cart'}
                        >
                            Checkout
                        </Button>
                    </Box>
                </MenuList>
            </Paper>
        </Menu>
      );

    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
                size='large' 
                color='inherit'
                onClick={handleClick}
            >
                <Badge badgeContent={cartProducts.length} color='error'>
                    <ShoppingCartIcon/>
                </Badge>
            </IconButton>
            {renderMenu}
        </Box>
    );
}

export default CartWidget;