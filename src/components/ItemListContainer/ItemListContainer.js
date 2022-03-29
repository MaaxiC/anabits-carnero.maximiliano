import React from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
  return (
    <div>
      <h2 className='ItemList-Title' >Products Offers</h2>
      <ItemList />
    </div>
  )
}

export default ItemListContainer;