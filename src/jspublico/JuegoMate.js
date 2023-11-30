import React from 'react'
import FotoDescripcionProducto from "./FotoDescripcionProducto";
const JuegoMate = (props) => {
  return (
    <div>
      <h2 className="titulo-fuente">JUEGO DE MATES</h2>
      <FotoDescripcionProducto
        imagen="mateIg"
        descripcion="descrip"
        numeroArticulo="137"
        precio="150"
      />
      <FotoDescripcionProducto
        imagen="mate2Ig"
        descripcion="descrip"
        numeroArticulo="137"
        precio="150"
      />
      <FotoDescripcionProducto
        imagen="mate3Ig"
        descripcion="descrip"
        numeroArticulo="137"
        precio="150"
      />
    </div>
  );
}

export default JuegoMate
