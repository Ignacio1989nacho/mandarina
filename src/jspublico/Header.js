import React from 'react'
import "../css/Header.css";

const Header = (props) => {
  return (
    <div className="colorFondo eliminarLogo">
      
        <img
          className="borde-imagen flex-imagen logo radioLogo"
          src={require(`../imagenes/logoMandarina.png`)}
          alt="Imagen aqui"
        />
      
    </div>
  );
}

export default Header
