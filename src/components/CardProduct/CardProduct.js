import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../CardProduct/CardProduct.css';

const CardProduct = (props) => {
  const {product, price, date, image, alt} = props
  
  return (
    <Card sx={{ maxWidth: 320, border: 1, borderRadius: 5, margin: 2, boxShadow: 5, ':hover': {boxShadow: 20} }} >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={alt}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="buy">
          <AddShoppingCartIcon />
        </IconButton>
        <div className='card-price'>
          Price: {price}
        </div>
      </CardActions>
    </Card>
  );
}

export default CardProduct;

