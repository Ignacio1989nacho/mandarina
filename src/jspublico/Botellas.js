import React from 'react'
import FotoDescripcionProducto from "./FotoDescripcionProducto";

const Botellas = (props) => {
  return (
    <div className="">
      <h2 className="titulo-fuente">BOTELLAS</h2>
      <div className=" ">
        <FotoDescripcionProducto
          imagen="botellasIg"
          descripcion="descrip"
          numeroArticulo="137"
          precio="150"
        />
        <FotoDescripcionProducto
          imagen="botellas2Ig"
          descripcion="descrip"
          numeroArticulo="137"
          precio="150"
        />
      </div>
      <div className="flex ">
        <FotoDescripcionProducto
          imagen="botellas3Ig"
          descripcion="descrip"
          numeroArticulo="137"
          precio="150"
        />
        <FotoDescripcionProducto
          imagen="botellas4Ig"
          descripcion="descrip"
          numeroArticulo="137"
          precio="150"
        />
      </div>
    </div>
  );
}

export default Botellas
