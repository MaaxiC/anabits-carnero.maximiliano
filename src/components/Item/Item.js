import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import ItemCount from '../ItemCount/ItemCount';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CartContext from '../../context/CartContext';
import ThemeContext from '../../context/ThemeContext';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


const Item = ({product, loading}) => {
  const { cartProducts, addProductToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const onAdd = (count) => {
    addProductToCart(product);
  }

  return (
    <ThemeProvider theme={theme}>
    <Card 
      sx={{ maxWidth: 310, borderRadius: 3, margin: 2, boxShadow: 5, 
        ':hover': {boxShadow: 20} }} >
      
      {loading ? (
        <Skeleton sx={{ height: 240, marginTop: 4, marginBottom: 3, width: 300 }} animation="wave" variant="rectangular" />
      ) : (
      <CardContent component={Link} to={`/${product.category}/${product.id}`} >
        <CardMedia
          component="img"
          height="250"
          image={product.image}
          alt={product.alt}
          sx={{ paddingLeft: 1, paddingRight: 1  }}
        />
      </CardContent>
      )}
      <CardHeader
        action={
          loading ? (null) : (
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          )
        }
        title={
          loading ? (
            <Skeleton
            animation="wave"
            height={15}
            width="80%"
            style={{ marginBottom: 15, marginTop: 10 }}
            />
          ) : (
          product.title
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={15} width="25%" style={{ marginBottom: 60}}/>
          ) : (
            'US$ ' + product.price
          )
        }
      />
      {loading ? (null) : (
      <CardActions disableSpacing > 
        <IconButton >
          <ShareIcon />
        </IconButton>
        {cartProducts.find(cartProduct => cartProduct.id === product.id) ? (
          <Button variant="contained" sx={{ marginLeft: 16 }} component={Link} to={'/cart'}>Go to Cart</Button>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        )}
      </CardActions>
      )}
    </Card>
    </ThemeProvider>
  );
}

export default Item;