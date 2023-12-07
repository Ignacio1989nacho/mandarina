import React from 'react'
import FotoDescripcionProducto from './FotoDescripcionProducto';

const Cajitas = (props) => {
  return (
    <div>
      <FotoDescripcionProducto
        imagen="Cajita"
        descripcion="descrip"
        numeroArticulo="137"
        precio="150"
      />
    </div>
  );
}

export default Cajitas
