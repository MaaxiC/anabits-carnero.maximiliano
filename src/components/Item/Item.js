import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const Item = ({product}) => {
  const {title, price, image, alt, stock} = product

  const onAdd = (count, setCount) => {
    alert(`Agregaste ${count} productos`);
    setCount(1);
  }
  
  return (
    <Card sx={{ width: 320, border: 1, borderRadius: 5, margin: 2, boxShadow: 5, ':hover': {boxShadow: 20} }} >
      <CardHeader
        action={
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        }
        title={title}
        subheader={price}
      />
      <CardMedia
        component='img'
        height='300'
        image={image}
        alt={alt}
      />
      <CardActions disableSpacing>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <div className='card-price'>
           <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </div>
      </CardActions>
    </Card>
  );
}

export default Item;