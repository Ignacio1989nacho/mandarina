import React from 'react'
import FotoDescripcionProducto from "./FotoDescripcionProducto";
const Loncherita = (props) => {
  return (
    <div>
      <h2>LONCHERITAS</h2>
      <FotoDescripcionProducto
        imagen="mint-5239188_640"
        descripcion="descrip"
        numeroArticulo="137"
        precio="150"
      />
    </div>
  );
}

export default Loncherita
