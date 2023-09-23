import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount"
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";


const ItemDetail = ({ item }) => {

  const { agregarAlCarrito } = useContext(CartContext);
  const [count, setCount] = useState(1)
  const navigate = useNavigate();

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };
  const handleIncreaseCount = () => {
    if (count < item.stock) {
      setCount(prev => prev + 1);
    }
  };
  if (!item.nombre) {
    return (<p>no existe</p>)
  }

  return (
    <Card style={{ width: '18rem', display: "flex", flexWrap: "wrap" }}>
      <Card.Img style={{ width: '18rem' }} variant="top" src={item.imagen} />
      <Card.Body >
        <Card.Title >{item.nombre}</Card.Title>
        <Card.Text >
          {item.descripcion}
        </Card.Text>
        <Card.Text >
          Categoría: {item.categoria}
        </Card.Text>
        <Card.Text>
          Stock: {item.stock}
        </Card.Text>
        <Card.Text>
          Precio: {item.precio}
        </Card.Text>
        <ItemCount
          count={count}
          handleDecreaseCount={handleDecreaseCount}
          handleIncreaseCount={handleIncreaseCount}
          handleAgregar={() => { agregarAlCarrito(item, count) }}
        />
        <Button className='volver' onClick={() => navigate(-1)}>Volver</Button>
      </Card.Body>

    </Card>

  )
}

export default ItemDetail