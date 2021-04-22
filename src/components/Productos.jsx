import { articulos } from "./Data/articulos";
import styled from "styled-components";
import { useState } from "react";

import { FlexDiv, Card } from "./UI/basic";
import "./Styles/Productos.css";
import Boton from "./UI/Boton";

const StyledDiv = styled.div`
  display: flex;
  width: 828px;
  align-items: center;
  margin-left: 72px;
`;

let listProductos = <h3>No hay productos</h3>;

function Productos({ productoCreado }) {
  const [categoria, setCategoria] = useState(articulos);

  const handleClick = (event) => {
    const value = event.target.getAttribute("data-value");
    const productoComprado = articulos.filter(
      (articulo) => articulo.id == value
    );
    productoCreado(productoComprado[0]);
  };

  const handleChange = (event) => {
    const cat = event.target.value;
    if (cat == "") {
      setCategoria(articulos);
    } else {
      const catProductos = articulos.filter(
        (articulo) => articulo.category == cat
      );
      setCategoria(catProductos);
    }
  };

  if (categoria.length > 0) {
    listProductos = categoria.map((producto) => (
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
  return (
    <div>
      <StyledDiv className="seleccionar">
        <select
          name="categoria"
          className="form-control"
          onChange={handleChange}
        >
          <option value="" selected>
            Selecciona una categoria
          </option>
          <option value="macbook">MacBook</option>
          <option value="imac">iMac</option>
          <option value="macmini">Mac mini</option>
          <option value="iphone">iPhone</option>
          <option value="ipad">iPad</option>
          <option value="watch">Watch</option>
          <option value="accesorios">Accesorios</option>
        </select>
      </StyledDiv>
      <FlexDiv>{listProductos}</FlexDiv>
    </div>
  );
}

export default Productos;
