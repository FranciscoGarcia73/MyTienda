import "./Styles/Cesta.css";

function Cesta({ productos }) {
  let arrPrecios = productos.map((producto) => producto.price);
  console.log(arrPrecios);

  const nArticulos = productos.length;
  console.log(nArticulos);

  let suma = 0;
  for (let precio of arrPrecios) {
    suma = suma + precio;
  }
  console.log(suma);
  return (
    <div className="productos">
      <h6>
        Articulos Comprados{" "}
        <div>
          <i class="fas fa-shopping-cart"></i>
          <spam>{nArticulos}</spam>
        </div>
      </h6>
      <hr />
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
