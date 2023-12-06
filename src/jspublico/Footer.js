import React from "react";
import "../css/Footer.css";
const Footer = (props) => {
  const dia = new Date().getFullYear();
  return (
    <div>
      <footer class="container py-5">
        <div class="d-flex gap-3 justify-content-center lead fw-normal">
          <a
            class="icon-link icono-color-detalle-face"
            href="https://www.facebook.com/tuPagina"
            target="_blank"
          >
            <img src={require(`../imagenes/${props.imagenface}.ico`)} />
          </a>
          <a
            class="icon-link icono-color-detalle-ig"
            href="https://www.instagram.com/mandarina_deco_bazar"
            target="_blank"
          >
            <img src={require(`../imagenes/${props.imagenig}.ico`)} />
          </a>
        </div>
      </footer>
      <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></script>
      &copy; {dia} SLoto Web
    </div>
  );
};

export default Footer;
