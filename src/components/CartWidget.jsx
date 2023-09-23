import { useContext } from 'react';
import carrito from "../assets/cart.png"
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

export function CartWidget() {

    const { cantPrdEnCarrito } = useContext(CartContext);

    return (
        <>
            <Link className='nav-link' to="/carrito">
                <img  src={carrito}  />
                <span >{cantPrdEnCarrito()}</span>
            </Link>
        </>
    );
}