import * as React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import CircularProgress from '@mui/material/CircularProgress';
import { mockItems } from '../../data/data';
import Backdrop from '@mui/material/Backdrop';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };

    const getDetail = async () => {
        setLoading(false);
        return new Promise((resolve, reject) => {
            return resolve(mockItems[4]);
        });
    }

    useEffect( () => {
        setLoading(true);
        handleToggle();
        setTimeout(() => {
            getDetail().then( (data) => {
                setDetail(data);
            })
        }, 2000);
    }, [])
    
    return (
        <div>
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