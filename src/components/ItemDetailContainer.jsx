import Container from 'react-bootstrap/Container';
import data from '../data/data.json';
import { useState, useEffect } from "react";
import { ItemDetail } from './ItemDetail';
import { useParams } from "react-router-dom";



export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);

 const { id } = useParams();
    
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const productById = data.find((product) => product.id === id);
                resolve(productById);
            }, 2000);

        });
        promise.then((data) => setProduct(data))
    }, [])

    if (!product) return <div>Loading...</div>

    return (
        <Container className='mt-4'>
            <h1>DETALLE</h1>
            <ItemDetail product={product} />
        </Container>
    );

}