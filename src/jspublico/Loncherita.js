import React from 'react'
import FotoDescripcionProducto from "./FotoDescripcionProducto";
const Loncherita = (props) => {
  return (
    <div className="">
      <h2 className="titulo-fuente">LONCHERITAS</h2>

      <FotoDescripcionProducto
        imagen="loncheritaIg"
        descripcion="descrip"
        numeroArticulo="137"
        precio="150"
      />
      <FotoDescripcionProducto
        imagen="loncherita2Ig"
        descripcion="descrip"
        numeroArticulo="137"
        precio="150"
      />
    </div>
  );
}

export default Loncherita
