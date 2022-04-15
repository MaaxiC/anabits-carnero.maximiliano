import React from 'react';
import { useContext } from "react";
import Container from '@mui/material/Container';
import CartContext from '../../context/CartContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import ThemeContext from '../../context/ThemeContext';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import '../Cart/Cart.css'
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cartProducts, total, removeProduct, clearCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
        <Container sx={{ marginTop: 3, marginBottom: 50, marginLeft: 25 }}>
            <Typography variant="h5" component="div" marginBottom={5}>
                Checkout
            </Typography>
            {total > 0 ? (
            <>
            <div className='buttonfromcart'>
                <Button 
                    sx={{ marginBottom: 2 }}
                    onClick={() => clearCart()}
                >
                    Empty Cart
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Unit Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartProducts.map((cartProduct) => (
                            <TableRow
                                key={cartProduct.id}
                            >
                                <TableCell>
                                    <img src={cartProduct.image} alt={"item"} width='100'/>
                                </TableCell>
                                <TableCell align="center">{cartProduct.title}</TableCell>
                                <TableCell align="center">{cartProduct.price}</TableCell>
                                <TableCell align="center">{cartProduct.quantity}</TableCell>
                                <TableCell align="center">
                                    <IconButton 
                                        color='primary'
                                        sx={{ padding: 1.5 }}
                                        onClick={() => removeProduct(cartProduct)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={4} align="right">Total:</TableCell>
                            <TableCell align="center">US$ {total}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>        
            </TableContainer>
            <div className='buttonfromcart'>
                <Button variant="contained" sx={{ marginTop: 3 }}>Buy Now</Button>
            </div>
            </>
            ) : (
                <div className='emptycart'> 
                    <img src="http://floornwalls.com/Content/empty-cart.png" alt={"empty-cart"} width= "50%"/>
                    <Button variant="contained" sx={{ marginLeft: 1 }} component={Link} to={'/'}>Back to Home</Button>
                </div>
            )}
        </Container>
        </ThemeProvider>
    )
}

export default Cart;