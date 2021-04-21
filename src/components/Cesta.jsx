import { FlexDiv, Card } from "./UI/basic";
import { useEffect, useState } from "react";
import "./Styles/Cesta.css";

function Cesta({ productos }) {
  const [precioT, setPrecioT] = useState(0);

  let arrPrecios = productos.map((producto) => producto.price);
  console.log(arrPrecios);

  let suma = 0;
  for (let precio of arrPrecios) {
    suma = suma + precio;
  }
  console.log(suma);
  return (
    <div className="productos">
      <h6>Articulos Comprados</h6>
      {productos.map((producto) => {
        return (
          <div>
            <p className="articulos">
              <strong>Articulo:</strong> {producto.name}{" "}
              <strong>Precio: {producto.price} €</strong>
            </p>
          </div>
        );
      })}
      <p className="precio">
        <strong>Importe total {suma} €</strong>
      </p>
    </div>
  );
}

export default Cesta;
