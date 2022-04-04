import * as React from 'react';
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

const Item = ({product, loading}) => {
  const onAdd = (count, setCount) => {
    alert(`Agregaste ${count} productos`);
    setCount(1);
  }
  
  return (
    <Card 
      sx={{ maxWidth: 300, border: 1, borderRadius: 5, margin: 2, boxShadow: 5, 
        ':hover': {boxShadow: 20} }} >
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
            <Skeleton animation="wave" height={15} width="25%" />
          ) : (
            'US$ ' + product.price
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 240, marginTop: 4, marginBottom: 10, width: 300 }} animation="wave" variant="rectangular" />
      ) : (
      <CardContent component={Link} to={`/${product.category}/${product.id}`} >
        <CardMedia
          component="img"
          height="250"
          image={product.image}
          alt={product.alt}
          sx={{ padding: 1 }}
        />
      </CardContent>
      )}
      {loading ? (null) : (
      <CardActions disableSpacing > 
        <IconButton >
          <ShareIcon />
        </IconButton>
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      </CardActions>
      )}
    </Card>
  );
}

export default Item;