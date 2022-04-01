import * as React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import CircularProgress from '@mui/material/CircularProgress';
import { mockItems } from '../../data/Data';
import Backdrop from '@mui/material/Backdrop';
import '../ItemDetailContainer/ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
  
    const filterProductById = (array, id) => {
        return array.filter( (product) => {
            if( product.id === id ) {
                return setDetail(product);
            }
        })
    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const getDetail = async () => {
        setLoading(false);
        return new Promise((resolve, reject) => {
            return resolve(mockItems);
        });
    }

    useEffect( () => {
        setLoading(true);
        handleToggle();
        setTimeout(() => {
            getDetail().then( (data) => {
                filterProductById(data, id);
            })
        }, 1000);
    }, [id])
    
    return (
        <div className='container-detail' >
            {loading ? (
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <CircularProgress />
                    </Backdrop>
            ) : (
                    <ItemDetail item={detail} />
                )
            }
        </div>
    );
  }
  
  export default ItemDetailContainer;