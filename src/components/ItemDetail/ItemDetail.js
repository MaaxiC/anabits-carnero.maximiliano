import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import ItemCount from '../ItemCount/ItemCount';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import '../ItemDetail/ItemDetail.css';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { ThemeProvider } from '@mui/material/styles';
import ThemeContext from '../../context/ThemeContext';
import CartContext from '../../context/CartContext';
import { useParams } from 'react-router-dom';


const ItemDetail = ({item}) => {
  const { id } = useParams();

  const {title, price, image, alt, stock, description}  = item

  const { theme } = useContext(ThemeContext);
  const { cartProducts, addProductToCart } = useContext(CartContext);

  const onAdd = (count) => {
    addProductToCart(item);
  }

  return (
    <ThemeProvider theme={theme}>
    <Container sx={{  marginTop: 7, marginBottom: 35 }} >
      <Card sx={{  borderRadius: 3, boxShadow: 5 }} >
        <div className='card-header'>
          <CardMedia
            component="img"
            height="500"
            image={image}
            alt={alt}
          />
          <div className='card-description'>
            <CardHeader
              action={
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              }
              title= {title}
              subheader={<Rating defaultValue={3.5} precision={0.5} />}
            />
            <h3 className='price'>{`US$ ${price}`}</h3>
            <CardContent>
              <Typography variant="body2" color="text.secondary" component="p">
                {description}
              </Typography>
            </CardContent>
            <div className='card'>
              <CreditCardIcon sx={{ marginLeft: 3, marginRight: 3 }} color= 'primary' />
              Credit Card payment accepted
            </div>
            <CardActions sx={{  marginLeft: -4, marginRight: 5 }} > 
              <LocalShippingIcon sx={{ marginLeft: 6, marginRight: 3 }} color= 'primary' />
              Free Shipping
              {cartProducts.find(cartProduct => cartProduct.id === id) ? (
                <Button variant="contained" sx={{ marginLeft: 4, marginRight: -1 }} component={Link} to={'/cart'}>Go to Cart</Button>
              ) : (
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/> 
              )}
            </CardActions>
          </div>
        </div>
        </Card>
    </Container>
    </ThemeProvider>
  );
}
  
export default ItemDetail;