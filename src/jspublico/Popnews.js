import React from "react";
import "../css/Popnews.css";
import ReactDOM from "react-dom";

const Popnews = (props) => {
  const { onClose } = props;
  return ReactDOM.createPortal(
    <div className="estilo-modal">
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
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
             /* data-bs-dismiss="modal"*/
              onClick={onClose}
            >
              IGNORAR
            </button>
            <button type="button" class="btn btn-primary">
              REGISTRARME
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Popnews;
