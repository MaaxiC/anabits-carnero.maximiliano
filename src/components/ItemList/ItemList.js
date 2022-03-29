import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';
import { mockItems } from '../../data/data';


const ItemList = () => {
    const [loading, setLoading] = useState(false)

    const [items, setItems] = useState([])
  
    const getItems = () => {
        setLoading(false);
        return new Promise((resolve, reject) => {
            return resolve(mockItems);
        });
    }
  
    useEffect( () => {
        setLoading(true);
        setTimeout(() => {
            getItems().then( (data) => {
                setItems(data);
            })
        }, 2000);
    }, [])
  
    return (
        <div className='container-cards'>
            { loading ? (
                mockItems.map( (item, i) => {
                    return (
                        <Item key={i} loading={loading}/> 
                    )}) 
            ) : (
                items.map( (item) => {
                    const {id} = item
                    return (
                        <Item product={item} key={id} loading={loading}/> 
                    )}) 
                )
            }    
        </div>
    )
}
  
export default ItemList;