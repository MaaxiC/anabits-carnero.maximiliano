import { createContext, useState } from "react";
import Notification from '../components/Notification/Notification'


const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [total, setTotal] = useState(0);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
      }
        setOpen(false); 
    };
  
    const handleClick = () => {
        setOpen(true);
    };

    const addProductToCart = (product, count) => {
        let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
        let array = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            alt:  product.alt,
            quantity: count,
        };
        !exist && setCartProducts(cartProducts => [...cartProducts, array]);
        !exist && handleClick();
        !exist && calculeTotalPrice(product.price)
    }    

    const removeProduct = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
    }

    const calculeTotalPrice = (price) => {
        setTotal(total + price);
    }

    const data = {
        cartProducts,
        addProductToCart,
        total,
        removeProduct
    }

    return (
        <CartContext.Provider value={data} >
            {children}
            <Notification open={open} handleClose={handleClose} />
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext;