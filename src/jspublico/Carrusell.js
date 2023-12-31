import React from "react";

const Carrusell = (props) => {
  return (
    <div>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img
              className="borde-imagen flex-imagen"
              src={require(`../imagenes/${props.imagen1}.jpg`)}
              alt="Imagen aqui"
            />
            <div class="carousel-caption d-none d-md-block">
             
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              className="borde-imagen flex-imagen"
              src={require(`../imagenes/${props.imagen2}.jpg`)}
              alt="Imagen aqui"
            />
            <div class="carousel-caption d-none d-md-block">
            
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              className="borde-imagen flex-imagen"
              src={require(`../imagenes/${props.imagen3}.jpg`)}
              alt="Imagen aqui"
            />
            <div class="carousel-caption d-none d-md-block">
            
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrusell;
