import { useState } from 'react';
import './App.css';
import Productos from './components/Productos';
import Cesta from './components/Cesta';

function App() {

  const [productosAComprar, setProductosAComprar] = useState([]);
  
  const onProductoCreado = (productoNuevo) => {
    setProductosAComprar([...productosAComprar, productoNuevo]);
  }
  
  return (
    <div className="App">
      <div className="container d-flex">
        <div className="col-9 mt-5 d-flex">
          <Productos productoCreado={onProductoCreado}/>
        </div>
        <div className="col-3 mt-5">
          <Cesta productos={productosAComprar} />
          </div>
        </div>
    </div>
  );
}

export default App;
