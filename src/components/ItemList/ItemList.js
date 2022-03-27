import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const ItemList = ({products}) => {
    const [loading, setLoading] = useState(false)

    const [items, setItems] = useState([])
  
    const getItems = () => {
        setLoading(false)
        return new Promise((resolve, reject) => {
  
            return resolve(products)

        })
    }
  
    useEffect( () => {
        setLoading(true)
        setTimeout(() => {
            getItems().then( (data) => {
                setItems(data)
            })
        }, 2000)
    }, [])
  
    return (
        <div className='container-cards'>
            { loading ? (
                <div className='progress'>
                    <CircularProgress />
                </div>
            ) : (
                items.map( (item) => {
                    const {id} = item
                    return (
                        <Item product={item} key={id} /> 
                    )}) 
                )
            }    
        </div>
    )
}
  
export default ItemList;

