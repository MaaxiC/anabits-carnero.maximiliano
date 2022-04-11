import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';
import { mockItems } from '../../data/Data';
import { useParams } from 'react-router-dom';


const ItemList = () => {
    const { category } = useParams();
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    
    const filterProductByCategory = (array, category) => {
        return array.map( (product, i) => {
            if( product.category === category ) {
                return setItems(items => [...items, product]);
            } else {
                return null
            }
        })
    }

    const getItems = () => {
        setLoading(false);
        return new Promise((resolve, reject) => {
            return resolve(mockItems);
        });
    }
  
    useEffect( () => {
        setItems([]);
        setLoading(true);
        setTimeout(() => {
            getItems().then( (data) => {
                category ? filterProductByCategory(data, category) : setItems(data) 
            })
        }, 1000);
    }, [category])
  
    return (
        <>
        { category ? <h2>{ category.charAt(0).toUpperCase() + category.slice(1) }</h2> : <h2>Products</h2> }
        <div className='container-cards'>
            { loading ? (
                mockItems.map( (item, i) => { 
                    if (category) {
                        if( item.category === category ) {
                            return ( <Item key={i} loading={loading}/> )
                        } else {
                            return null
                        } 
                    } else {
                        return ( <Item key={i} loading={loading}/> ) 
                    }
                })
            ) : (
                items.map( (item) => {
                    const {id} = item
                    return ( <Item product={item} key={id} loading={loading}/> )
                }) 
            )}    
        </div>
        </>
    )
}
  
export default ItemList;