import * as React from 'react';
import CardProduct from '../CardProduct/CardProduct';
import '../ItemListContainer/ItemListContainer.css';

const ItemListContainer = ({setProducts}) => {

  return (
    <div>
      <h2 className='ItemList-Title' >Products Offers</h2>
      <div className='container-cards' >
        <CardProduct product={'Headphone AKG K92'} price={'US$ 65'} image={'../headphone.png'} alt={'headphone'} stock={5} setProducts={setProducts} />
        <CardProduct product={'Audio-Technica AT2020'} price={'US$ 100'} image={'../microphone.jpg'} alt={'microphone'} stock={7} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default ItemListContainer;