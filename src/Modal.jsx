import React from "react";
import "./Modal.css"; 

const Modal = ({ onClose, onClick, children }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <div onClick={() => onClick && onClick()}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
