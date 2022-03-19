import * as React from 'react';
import CardProduct from '../CardProduct/CardProduct';
import '../ItemListContainer/ItemListContainer.css';

const ItemListContainer = () => {

  return (
    <div>
      <h2 className='ItemList-Title' >Products Offers</h2>
      <div className="container-cards" >
        <CardProduct product={"Headphone AKG K92"} price={12500} date={"March 18, 2022"} image={"../headphone.png"} alt={"headphone"} />
        <CardProduct product={"Audio-Technica AT2020"} price={15000} date={"February 3, 2022"} image={"../microphone.jpg"} alt={"microphone"} />
      </div>
    </div>
  );
}

export default ItemListContainer;