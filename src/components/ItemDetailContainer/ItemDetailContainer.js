import * as React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import CircularProgress from '@mui/material/CircularProgress';
//import { mockItems } from '../../data/Data';
import Backdrop from '@mui/material/Backdrop';
import '../ItemDetailContainer/ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebase';
import { useNavigate } from 'react-router-dom';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
  
    // const filterProductById = (array, id) => {
    //     return array.filter( (product) => {
    //         if( product.id === id ) {
    //             return setDetail(product);
    //         }
    //     })
    // }

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const getDetail = async () => {
        setLoading(false);
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            let product = docSnap.data();
            product.id = docSnap.id;
            setDetail(product);
        } else {
            navigate('/error');
        }
        // return new Promise((resolve, reject) => {
        //     return resolve(mockItems);
        // });
    }

    useEffect( () => {
        setLoading(true);
        handleToggle();
        let timer = setTimeout(() => {
            getDetail();
//          getDetail().then( (data) => {
//                 filterProductById(data, id);
//            })
        }, 1000);

        return () => {
            clearTimeout(timer);
        };

    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
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
                Object.keys(detail).length !== 0 && <ItemDetail item={detail} />
                )
            }
        </div>
    );
  }
  
  export default ItemDetailContainer;