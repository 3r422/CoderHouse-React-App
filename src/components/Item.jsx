import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({ producto}) => {
  return (
    <Card key={producto.id} style={{ width: '18rem' }}>
      <Card.Img style={{height:"150px"}} variant='top' src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          Categoría: {producto.category}
        </Card.Text>
        <Card.Text>
          Stock: {producto.stock}
        </Card.Text>
        <Card.Text>
          Precio: {producto.precio}
        </Card.Text>
        <Link className="btn btn-primary" to={`/Item/${producto.id}`}>Ver más</Link>
      </Card.Body>
    </Card>
  )
}

export default Item