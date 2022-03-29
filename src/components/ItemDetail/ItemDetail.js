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

const ItemDetail = ({item}) => {
    const {title, price, image, alt, stock, description}  = item

    return (
    <div className='card-container'>
      <Card 
        sx={{ minWidth: 1100, border: 1, borderRadius: 5, margin: 2, boxShadow: 5, }} >
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
              subheader={price}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" component="p">
                {description}
              </Typography>
            </CardContent>
            <CardActions sx={{  marginLeft: -5, marginRight: 5 }} > 
              <ItemCount stock={stock} initial={1} />
            </CardActions>
          </div>
        </div>
      </Card>
    </div>
    );
  }
  
  export default ItemDetail;