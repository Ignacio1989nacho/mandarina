import React from 'react'
import "../css/NavBar.css";
import Main from './Main';
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Basos from './Basos';
import Botellas from './Botellas';
import Yerberos from './Yerberos';
import JuegoMate from './JuegoMate';
import Loncherita from './Loncherita';
import Header from './Header';

const NavBar = (props) => {



  return (
    <div>
      <Header />
      <nav
        class="navbar navbar-expand-md bg-white sticky-top border-bottom "
        data-bs-theme="dark"
      >
        <div class="container letrasMenuHamgur">
          <a class="navbar-brand d-md-none" href="#">
            <svg class="bi" width="24" height="24">
              <use xlinkHref="#aperture" />
            </svg>
           
            <img
              className="borde-imagen flex-imagen logo radioLogo"
              src={require(`../imagenes/logoMandarina.png`)}
              alt="Imagen aqui"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="#offcanvas"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvas"
            aria-labelledby="offcanvasLabel"
          >
            <div class="offcanvas-header ">
              <h5 class="offcanvas-title" id="#offcanvasLabel">
                MANDARINA Deco & Bazar
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body letrasMenuHamgur">
              <ul class="navbar-nav flex-grow-1 justify-content-between">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <svg class="bi" width="24" height="24">
                      <use xlinkHref="#aperture" />
                    </svg>
                  </a>
                </li>
                <li class="nav-item ">
                  <Link
                    to="/"
                    className="color-font descrip-text eliminar-linea-link"
                  >
                    Inicio{" "}
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link
                    to="/Basos"
                    className="color-font descrip-text eliminar-linea-link"
                  >
                    Basos{" "}
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link
                    to="/Botellas"
                    className="color-font descrip-text eliminar-linea-link"
                  >
                    Botellas{" "}
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link
                    to="/Loncherita"
                    className="color-font descrip-text eliminar-linea-link"
                  >
                    Loncherita{" "}
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link
                    to="/JuegoMate"
                    className="color-font descrip-text eliminar-linea-link"
                  >
                    Juego de Mate{" "}
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link
                    to="/YerberosyZucareras"
                    className="color-font descrip-text eliminar-linea-link"
                  >
                    Yerberos y Zucareras{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Basos" element={<Basos />} />
        <Route path="/YerberosyZucareras" element={<Yerberos />} />
        <Route path="/JuegoMate" element={<JuegoMate />} />
        <Route path="/Botellas" element={<Botellas />} />
        <Route path="/Loncherita" element={<Loncherita />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default NavBar
