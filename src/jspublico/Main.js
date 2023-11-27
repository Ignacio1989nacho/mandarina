import React from 'react'
import "../css/NavBar.css";

const Main = (props) => {
    let style = {
      width: "80%",
      height: "300px",
      borderRadius: "21px 21px 0 0",
    };
  return (
    <div>
      <main>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div class="col-md-6 p-lg-5 mx-auto my-5">
            <h1 class="display-3 fw-bold">Designed for engineers</h1>
            <h3 class="fw-normal text-muted mb-3">
              Build anything you want with Aperture
            </h3>
            <div class="d-flex gap-3 justify-content-center lead fw-normal">
              <a class="icon-link" href="#">
                Learn more
                <svg class="bi">
                  <use xlinkHref="#chevron-right" />
                </svg>
              </a>
              <a class="icon-link" href="#">
                Buy
                <svg class="bi">
                  <use xlinkHref="#chevron-right" />
                </svg>
              </a>
            </div>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">Another headline</h2>
              <p class="lead">And an even wittier subheading.</p>
            </div>
            <div class="bg-body-tertiary shadow-sm mx-auto" style={style}></div>
          </div>
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5">Another headline</h2>
              <p class="lead">And an even wittier subheading.</p>
            </div>
            <div class="bg-dark shadow-sm mx-auto" style={style}></div>
          </div>
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5">Another headline</h2>
              <p class="lead">And an even wittier subheading.</p>
            </div>
            <div class="bg-dark shadow-sm mx-auto" style={style}></div>
          </div>
          <div class="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">Another headline</h2>
              <p class="lead">And an even wittier subheading.</p>
            </div>
            <div class="bg-body-tertiary shadow-sm mx-auto" style={style}></div>
          </div>
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5">Another headline</h2>
              <p class="lead">And an even wittier subheading.</p>
            </div>
            <div class="bg-body shadow-sm mx-auto" style={style}></div>
          </div>
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">Another headline</h2>
              <p class="lead">And an even wittier subheading.</p>
            </div>
            <div class="bg-body shadow-sm mx-auto" style={style}></div>
          </div>
        </div>

        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5">Another headline</h2>
              <p class="lead">And an even wittier subheading.</p>
            </div>
            <div class="bg-body shadow-sm mx-auto" style={style}></div>
          </div>
          <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">Another headline</h2>
              <p class="lead">And an even wittier subheading.</p>
            </div>
            <div class="bg-body shadow-sm mx-auto" style={style}></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main
