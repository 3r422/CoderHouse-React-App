
import './App.css';

import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting ="Welcome to my Gallery!"/>
    </>
  );
  
 
}

export default App;
