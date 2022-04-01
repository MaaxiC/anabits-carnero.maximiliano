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
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';


const ItemDetail = ({item}) => {
  const {title, price, image, alt, stock, description}  = item
  const [hidden, setHidden] = useState(false);
      
  const onAdd = (count, setCount) => {
    alert(`Agregaste ${count} productos`);
    setCount(1);
    setHidden(true);
  }

  return (
    <Container sx={{  marginTop: 7 }} >
      <Card sx={{  border: 1, borderRadius: 5, boxShadow: 5 }} >
        <div className='card-header'>
          <CardMedia
            component="img"
            image={image}
            alt={alt}
          />
          <div className='card-description'>
            <CardHeader
              action={
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              }
              title={title}
              subheader={<Rating defaultValue={3.5} precision={0.5} />}
            />
            <h3 className='price'>{price}</h3>
            <CardContent>
              <Typography variant="body2" color="text.secondary" component="p">
                {description}
              </Typography>
            </CardContent>
            <CardActions sx={{  marginLeft: -4, marginRight: 5 }} > 
              <LocalShippingIcon sx={{ marginLeft: 6, marginRight: 3,  color: '#573391' }} />
              Free Shipping
              <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            </CardActions>
          </div>
        </div>
        </Card>
    </Container>
  );
}
  
export default ItemDetail;