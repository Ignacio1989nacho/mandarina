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
            Facebook
            <svg
              class="bi bi-facebook"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.616-3.5a.5.5 0 0 1 .616.577v.868h-.385c-.408 0-.847.245-.847.994v1.324h1.23l-.153 1.406h-1.08V16H8.925v-5.33H7.77V9.265h1.155V8.1c0-1.434.927-2.6 2.46-2.6z"
              />
            </svg>
          </a>
          <a
            class="icon-link icono-color-detalle-ig"
            href="https://www.instagram.com/mandarina_deco_bazar"
            target="_blank"
          >
            Instagram
            <svg
              class="bi bi-instagram"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C5.828 0 4.5 1.343 4.5 3v1.5h-1C2.673 4.5 2 5.206 2 6v8c0 .794.673 1.5 1.5 1.5h11c.827 0 1.5-.706 1.5-1.5V6c0-.794-.673-1.5-1.5-1.5h-1V3c0-1.657-1.328-3-3-3zm3.5 4.5h1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h1V3c0-.982.762-1.5 1.5-1.5s1.5.518 1.5 1.5v1.5h3V3c0-.982.762-1.5 1.5-1.5S11.5 2.018 11.5 3v1.5zM8 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm3.5-.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
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
