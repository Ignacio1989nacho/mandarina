import React from 'react'
import FotoDescripcionProducto from "./FotoDescripcionProducto";
const Botellas = (props) => {
  return (
    <div>
      <h2>BOTELLAS</h2>
      <FotoDescripcionProducto
        imagen="mint-5239188_640"
        descripcion="descrip"
        numeroArticulo="137"
        precio="150"
      />
    </div>
  );
}

export default Botellas
