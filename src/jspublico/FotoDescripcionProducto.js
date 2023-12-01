import React from "react";
import "../css/FotoDescripcionProducto.css"
const FotoDescripcionProducto = (props) => {
  return (
    <div className="cont">
      <div class="col">
        <div class="card shadow-sm">
          <div className="expandible ">
            
            <img
              className="borde-imagen flex-imagen "
              src={require(`../imagenes/${props.imagen}.jpg`)}
              alt="Imagen aqui"
            />
            
          </div>
          <div class="card-body descripcion-producto text-descripcion ">
            <p class="card-text">{props.descripcion}</p>
            <div class="d-flex justify-content-between align-items-center">
              <p>Art n° {props.numeroArticulo}</p>
            </div>
            <small class="text-body-secondary"> ${props.precio}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotoDescripcionProducto;
