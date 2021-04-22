import "./Styles/Cesta.css";

function Cesta({ productos }) {
  let suma = 0;
  productos.map((producto) => (suma += producto.price));

  const nArticulos = productos.length;

  return (
    <div className="productos">
      <h6>
        Articulos Comprados{" "}
        <div>
          <i class="fas fa-shopping-cart"></i>
          <span>{nArticulos}</span>
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
        <hr />
        <strong>Importe total {suma} €</strong>
      </p>
    </div>
  );
}

export default Cesta;
