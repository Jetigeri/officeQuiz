import React from "react";
// import "./Modal.css"

const Modal = () => {
  return (
    <div className="modal-dialog modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Your answer is</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">wrong</div>
      </div>
    </div>
  );
};

export default Modal;
