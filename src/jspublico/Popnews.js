import React from "react";
import "../css/Popnews.css";
import ReactDOM from "react-dom";
import Carrusell from "./Carrusell";


const Popnews = (props) => {
  const { onClose } = props;
  return ReactDOM.createPortal(
    <div className="estilo-modal pop-superior">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              PROMOS EXCLUSIVAS!
            </h5>

            <button
              type="button"
              class="btn-close"
              /* data-bs-dismiss="modal"*/
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div class="modal-body">
            <Carrusell imagen1="mateIg" imagen2="mate3Ig" imagen3="mateIg" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              /* data-bs-dismiss="modal"*/
              onClick={onClose}
            >
              SKIP
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Popnews;
