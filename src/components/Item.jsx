import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export const Item = ( { product } ) => (
    <Card key = {product.id} style={{ width: '18rem' }}>
    <Card.Img 
     style= {{height: "80px"} }
     variant="top"
     src= {product.avatar}
    />
    <Card.Body>
      <Card.Title>{ product.name }</Card.Title>
      <Card.Text>{ product.category}</Card.Text>
      <Link to= {`/item/ ${product.id}`}>
        <Button variant="primary">Go somewhere</Button>
      </Link>
    </Card.Body>
    
</Card>
)
  
