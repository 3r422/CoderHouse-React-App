import  { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const categoriasRef = collection(db, "categorias");
export const NavBar = () => {
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoriasSnapshot = await getDocs(categoriasRef);
      const categories = categoriasSnapshot.docs.map(doc => doc.data().key);
      setUniqueCategories(categories);
    };
    fetchData();
  }, []);

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
       
        <Nav className="me-auto">
          <Link className='nav-link' to="/">ERART</Link>
          <NavDropdown title="Categorias">
            {[...uniqueCategories].map(category => (
              <NavDropdown.Item key={category} as='span'>
                <Link className='nav-link' to={`/category/${category}`} >{category}</Link>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
         
        </Nav>
     
        <CartWidget />
      </Container>
    </Navbar>
  )
};
