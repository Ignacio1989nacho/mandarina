import React from 'react'

const MainImagenes = (props) => {
     let style = {
       width: "80%",
       height: "300px",
       borderRadius: "21px 21px 0 0",
     };
  return (
    <div>
      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">AQUI ALGO</h2>
            <p class="lead">AQUI TMB.</p>
          </div>
          <div class="bg-body-tertiary shadow-sm mx-auto" style={style}></div>
        </div>
      
      </div>
    </div>
  );
}

export default MainImagenes
