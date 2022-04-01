import React from 'react';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css';


const ItemListContainer = () => {
  return (
    <div className='container-items'>
      <ItemList />
    </div>
  )
}

export default ItemListContainer;