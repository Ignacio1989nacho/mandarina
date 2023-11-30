import React from 'react'
import FotoDescripcionProducto from './FotoDescripcionProducto';

const Yerberos = (props) => {
  return (
    <div>
      <h2 className="titulo-fuente">YERBEROS Y ZUCARERAS</h2>
      <FotoDescripcionProducto
        imagen="juegomateIg"
        descripcion="descrip"
        numeroArticulo="137"
        precio="150"
      />
      <FotoDescripcionProducto
        imagen="juegomate2Ig"
        descripcion="descrip"
        numeroArticulo="137"
        precio="150"
      />
    </div>
  );
}

export default Yerberos
