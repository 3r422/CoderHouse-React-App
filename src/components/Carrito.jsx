import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

import Button from "react-bootstrap/Button";


const Carrito = () => {
    const { carrito, totalCarrito, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    const handleEliminar = (id) => {
        eliminarDelCarrito(id);
    };

    return (
        <Container>
            <h1 className='main-title'>Cart</h1>

            {
                carrito.map((prd) => (
                    <div className='map-productos' key={prd.id}>
                        <img className='img-producto' src={prd.imagen} alt={prd.alt} />
                        <div className='dupla-prd'>
                            <small>Producto: </small>
                            <p className='prd-nombre'>{prd.nombre}</p>
                        </div>
                        <div className='dupla'>
                            <small>Cantidad: </small>
                            <p className='prd-cantidad'>{prd.count}</p>
                        </div>
                        <div className='dupla'>
                            <small>Precio: </small>
                            <p className='prd-precio'>{prd.precio}</p>
                        </div>
                        <div className='dupla'>
                            <small>Total: </small>
                            <p className='prd-total'>{prd.count * prd.precio}</p>
                        </div>
                        <div className='eliminar-prd-div'>
                            <Button className='eliminar-prd' onClick={() => handleEliminar(prd.id)}>Eliminar</Button>
                        </div>
                    </div>
                ))
            }
            {
                carrito.length > 0 ?
                    <div >
                        <div >
                            <h3>Precio Total: ${totalCarrito()}</h3>
                            < Link to="/checkout"><Button>Finalizar Compra</Button></Link>
                        </div>
                        <div >
                            <Button onClick={handleVaciar}>Vaciar Carrito</Button>
                        </div>
                    </div>
                    :
                    <h2>Su carrito está vacío</h2>
            }

        </Container>
    )
}

export default Carrito