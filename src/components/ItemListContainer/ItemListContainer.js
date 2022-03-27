import React from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
  const mockItems = [{
    id: 1,
    title: 'Headphone AKG K92',
    price: 'US$ 65',
    image: '../headphone.png',
    alt: 'headphone',
    stock: 5,
    },
    {
    id: 2,
    title: 'Audio-Technica AT2020',
    price: 'US$ 100',
    image: '../microphone.jpg',
    alt: 'microphone',
    stock: 7,
    }]

  return (
    <div>
      <h2 className='ItemList-Title' >Products Offers</h2>
      <ItemList products= {mockItems}/>
    </div>
  )
}

export default ItemListContainer;