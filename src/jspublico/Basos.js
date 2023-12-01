import React from "react";
import FotoDescripcionProducto from "./FotoDescripcionProducto";
import "../css/TituloFuente.css";
const Basos = (props) => {
  return (
    <div>
      <h2 className="titulo-fuente">BASOS</h2>
      <div className="flex  ">
        <FotoDescripcionProducto
          imagen="basosIg"
          descripcion="descrip"
          numeroArticulo="137"
          precio="150"
        />
        <FotoDescripcionProducto
          imagen="basos2Ig"
          descripcion="descrip"
          numeroArticulo="137"
          precio="150"
        />
      </div>
      <div className="flex">
        <FotoDescripcionProducto
          imagen="basos3Ig"
          descripcion="descrip"
          numeroArticulo="137"
          precio="150"
        />
        <FotoDescripcionProducto
          imagen="basos4Ig"
          descripcion="descrip"
          numeroArticulo="137"
          precio="150"
        />
      </div>
      <FotoDescripcionProducto
        imagen="basos5Ig"
        descripcion="descrip"
        numeroArticulo="137"
        precio="150"
      />
    </div>
  );
};

export default Basos;
