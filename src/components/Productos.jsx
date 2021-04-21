import { articulos } from "./Data/articulos";

import { FlexDiv, Card } from "./UI/basic";
import Boton from "./UI/Boton";

function Productos({ productoCreado }) {
  const handleClick = (event) => {
    const value = event.target.getAttribute("data-value");
    const productoComprado = articulos.filter(
      (articulo) => articulo.id == value
    );
    productoCreado(productoComprado[0]);
  };

  let listProductos = <h3>No hay productos</h3>;
  if (articulos.length > 0) {
    listProductos = articulos.map((producto) => (
      <Card>
        <h6>{producto.name}</h6>
        <img src={producto.image} alt="" />
        <p>Descripcion: {producto.description}</p>
        <p>Precio: {producto.price} €</p>
        <p>Categoria:{producto.category} </p>
        <Boton
          onClick={handleClick}
          label="Comprar"
          value={producto.id}
        ></Boton>
      </Card>
    ));
  }
  return <FlexDiv>{listProductos}</FlexDiv>;
}

export default Productos;
