import React from 'react';
import { useContext, useState, useEffect } from "react";
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
import Modal from '../Modal/Modal'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import db from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LinearProgress from '@mui/material/LinearProgress';

const Cart = () => {
    const { cartProducts, total, removeProduct, clearCart } = useContext(CartContext);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [formError, setFormError] = useState(false);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    });
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((cartProduct) => { 
                return{
                    id: cartProduct.id,
                    title: cartProduct.title,
                    price: cartProduct.price
                }
            }),
            total: total
        }
    );
    const [successOrder, setSuccessOrder] = useState();

    const { theme } = useContext(ThemeContext);

    const handleChange = (e) => {
        const {value, id} = e.target
        setFormData({
            ...formData,
            [id]: value
        })
    }

    const pushOrder = async(prevOrder) => {
        const orderFirebase = collection(db, 'orders');
        const orderDoc = await addDoc(orderFirebase, prevOrder);
        setSuccessOrder(orderDoc.id)
    }

    const emailRegex = new RegExp('^[a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-z0-9]@[a-z0-9][-\.]{0,1}([a-z][-\.]{0,1})*[a-z0-9]\.[a-z0-9]{1,}([\.\-]{0,1}[a-z]){0,}[a-z0-9]{0,}$');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstName.trim() === '' || formData.lastName.trim() === '' || formData.phone.length !== 11 || !emailRegex.test(formData.email)) {
            setFormError(true)
        } else {
            let prevOrder = {...order, buyer: formData}
            setOrder({...order, buyer: formData})
            pushOrder(prevOrder)
        }
    }

    useEffect( () => {
        setSubmitLoading(true);
        setTimeout(() => {
             setSubmitLoading(false);
        }, 2000);
    }, [order])

    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ marginTop: 3, marginBottom: 55 }}>
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
                <Button variant="contained" sx={{ marginTop: 3 }} onClick={() => setOpen(true)}>Buy Now</Button>
            </div>
            </>
            ) : (
                <div className='emptycart'> 
                    <img src="http://floornwalls.com/Content/empty-cart.png" alt={"empty-cart"} width= "50%"/>
                    <Button variant="contained" sx={{ marginLeft: 1 }} component={Link} to={'/'}>Back to Home</Button>
                </div>
            )}
            <Modal 
                handleClose={() => setOpen(false)} 
                open={open}
            >
                {successOrder ? (
                    <>
                    {submitLoading ? (
                            <Box
                                sx={{
                                    width: 430,
                                    height: 160
                                }}
                            >
                                <LinearProgress />
                            </Box>
                    ) : (
                        <>
                        <DialogTitle >
                            {"Purchase successful"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Order generated with the id: {successOrder}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => clearCart()} component={Link} to={'/'} autoFocus>
                                Close
                            </Button>
                        </DialogActions>
                        </>
                    )}
                    </>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <Card sx={{ maxWidth: 510 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    User Info
                                </Typography>
                                <Box
                                    component="form"
                                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        required
                                        id="firstName"
                                        label="First Name"
                                        variant="filled"
                                        error={formError && formData.firstName.trim() === ""}
                                        helperText={formError && formData.firstName.trim() === "" ? "Invalid Value" : " "}
                                        onChange={handleChange}
                                        value={formData.firstName}
                                    />
                                    <TextField
                                        required
                                        id="lastName"
                                        label="Last Name"
                                        variant="filled"
                                        error={formError && formData.lastName.trim() === ""}
                                        helperText={formError && formData.lastName.trim() === "" ? "Invalid Value" : " "}
                                        onChange={handleChange}
                                        value={formData.lastName}
                                    />
                                    <TextField
                                        required
                                        id="phone"
                                        label="Phone"
                                        type="number"
                                        variant="filled"
                                        error={formError && formData.phone.length !== 11}
                                        helperText={formError && formData.phone.length !== 11 ? "Invalid Value" : "Inicia con 0 y sin 15"}
                                        onChange={handleChange}
                                        value={formData.phone}
                                    />
                                    <TextField
                                        required
                                        id="email"
                                        label="Email"
                                        variant="filled"
                                        error={formError && !emailRegex.test(formData.email)}
                                        helperText={formError && !emailRegex.test(formData.email) ? "Invalid Value" : " "}
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                </Box>
                                <Button variant="contained" sx={{ m: 1, width: '59.5ch', marginTop: 2 }} type="submit" >
                                    Send
                                </Button>
                            </CardContent>
                        </Card>
                    </form>
                )}
            </Modal>
        </Container>
        </ThemeProvider>
    )
}

export default Cart;