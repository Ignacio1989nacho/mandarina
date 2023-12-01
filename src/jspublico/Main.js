import React from "react";
import "../css/NavBar.css";
import Carrusell from "./Carrusell";
import MainImagenes from "./MainImagenes";
const Main = (props) => {

  return (
    <div>
      <main>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div class="col-md-6 p-lg-5 mx-auto my-5">
           <Carrusell imagen1="juegomateIg" imagen2="botellasIg" imagen3="loncherita2Ig"/>
            <h3 class="fw-normal text-muted mb-3">
              ¡Bienvenidos a nuestro bazar y tienda de decoración en línea! Aquí
              encontrarás una amplia variedad de artículos para el uso diario,
              desde basos, botellas, loncheras elegantes hasta accesorios
              decorativos únicos. Nuestro objetivo es ayudarte a elegir tus
              accesorios para que reflejen tu estilo y personalidad!.
            </h3>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <MainImagenes/>
        <MainImagenes/>
        <MainImagenes/>
        
      </main>
    </div>
  );
};

export default Main;
