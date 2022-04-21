import React from 'react';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import { itemData } from '../../data/Brands';
import { useParams } from 'react-router-dom';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ItemListContainer = () => {
  const { category } = useParams();

  return (
    <div className='container-items'>
      {category ? <ItemList /> : (
        <>
        <ItemList />
        <Container maxWidth="lg" sx={{  marginTop: 4 }}>
          <h2>Our Brands</h2>
          <ImageList
            sx={{ width: 1200, height: 500, marginBottom: -15, borderRadius: 3, boxShadow: 5}}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
        </>
      )}
    </div>
  )
}

export default ItemListContainer;